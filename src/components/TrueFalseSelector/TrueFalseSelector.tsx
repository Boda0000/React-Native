import {
  View,
  Text,
  TouchableOpacity,
  I18nManager,
  StyleSheet,
} from "react-native";

interface Props {
  value: boolean | null;
  onChange: (val: boolean) => void;
}

export default function TrueFalseSelector({ value, onChange }: Props) {
  const isRTL = I18nManager.isRTL;

  const options = [
    { label: "خطأ", val: false },
    { label: "صح", val: true },
  ];

  return (
    <View
      style={[
        styles.container,
        { flexDirection: isRTL ? "row-reverse" : "row" },
      ]}
    >
      {options.map((opt) => {
        const active = value === opt.val;

        return (
          <TouchableOpacity
            key={opt.label}
            style={[styles.option, active && styles.active]}
            onPress={() => onChange(opt.val)}
          >
            <Text style={[styles.text, active && styles.activeText]}>
              {opt.label}
            </Text>

            <View style={[styles.circle, active && styles.activeCircle]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 70,
  },
  option: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 12,
    paddingHorizontal:9,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#DAE0F0",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 6,
  },
  active: {
    backgroundColor: "#E8F0FF",
    borderColor: "#082375",
  },
  text: {
    color: "#082375",
    fontSize: 16,
    justifyContent: "flex-end",
  },
  activeText: {
    fontWeight: "700",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DAE0F0",
  },
  activeCircle: {
    backgroundColor: "#082375",
    borderWidth: 2,
     width: 15,
    height: 15,
  },
});
