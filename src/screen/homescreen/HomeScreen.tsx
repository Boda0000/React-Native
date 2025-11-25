import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import { colors } from "src/assets/colors/colors";
import Quiz from "../../assets/icons/quiz.svg";
import Leftarrow from "../../assets/icons/leftarrow.svg";
import Rightarrow from "../../assets/icons/rightarrow.svg";

export default function Counter() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const [currentnumber, setcurrentnumber] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number[]>([]);

  function onPressNumber(index: number) {
    if (!completed.includes(currentnumber)) {
      setCompleted((prev) => [...prev, currentnumber]);
    }

    if (!completed && !wrong.includes(currentnumber)) {
      setWrong((prev) => [...prev, currentnumber]);
    }
    setcurrentnumber(index);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={numbers}
          horizontal
          contentContainerStyle={styles.counterRow}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onPressNumber(index)}
              style={[
                styles.numbers,
                completed.includes(index) && styles.correct,
                wrong.includes(index) && styles.wrong,
                index === currentnumber && styles.current,
              ]}
            >
              <Text style={styles.circleText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Text style={styles.questionNumber}>السؤال 4 من 8 (مقالي)</Text>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 11 }}>
        <Text style={styles.questionText}>اكتب عن كيفية نمو الأسماك</Text>
        <Quiz width={22} height={22} />
      </View>

      <Image
        style={styles.image}
        source={require("../../assets/images/quiz.png")}
      />

      <TextInput
        style={styles.input}
        placeholder="اكتب اجابتك هنا..."
        placeholderTextColor="#6C798D"
      />

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button}>
          <Leftarrow width={15} height={15} />
          <Text style={styles.buttonText}>السؤال التالي</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>السؤال السابق</Text>
          <Rightarrow width={15} height={15} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? 50 : 120,
  },

  counterRow: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginBottom: 15,
    flexWrap: "wrap",
    gap: 9,
  },

  numbers: {
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },

  circleText: {
    color: "#000",
  },

  current: {
    backgroundColor: "#082375",
    borderColor: "#082375",
  },

  correct: {
    backgroundColor: "#00CE3A1A",
    borderColor: "#00CE3A",
  },

  wrong: {
    backgroundColor: "#CE00431A",
    borderColor: "#CE0043",
  },

  questionNumber: {
    textAlign: "center",
    color: "#52383C",
    marginBottom: 20,
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "IBM Plex Sans Arabic",
  },

  questionText: {
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "IBMPlexSansArabic-Bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#52383C",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },

  input: {
    height: 130,
    borderWidth: 1,
    borderColor: "#DAE0F0",
    borderRadius: 14,
    padding: 16,
    marginBottom: 25,
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#082375",
    justifyContent: "center",
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },

  buttonText: {
    color: "#082375",
    fontWeight: 700,
    fontSize:14,
    fontFamily:"IBMPlexSansArabic-Bold",
  },
});
