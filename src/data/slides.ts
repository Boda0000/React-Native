import i18n from "src/locales/i18n"; // استدعاء i18n الرئيسي

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: any;
}

// مصفوفة الصور المرتبطة بالسلايدات بالترتيب
const imagesArr = [
  require("../assets/onBoarding/illustration 1.png"),
  require("../assets/onBoarding/e-library 2.png"),
  require("../assets/onBoarding/illustration 3.png"),
  require("../assets/onBoarding/illustration 4.png"),
];

export const getSlidesData = (): Slide[] => {
  // استخدام i18n.t لجلب البيانات المترجمة من ملفات الترجمة
  const slides = i18n.t("Onboarding.Slides", { returnObjects: true }) as { title: string; subtitle: string }[];

  // دمج العناوين والوصف مع الصور وإضافة id لكل سلايد
  return slides.map((slide, index) => ({
    ...slide,
    id: index.toString(),
    image: imagesArr[index],
  }));
};
