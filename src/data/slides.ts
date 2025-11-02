import i18n from "src/locales/i18n"; 

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: any;
}

const imagesArr = [
  require("../assets/onBoarding/illustration 1.png"),
  require("../assets/onBoarding/e-library 2.png"),
  require("../assets/onBoarding/illustration 3.png"),
];

export const getSlidesData = (): Slide[] => {
  const slides = i18n.t("Onboarding.Slides", { returnObjects: true }) as { title: string; subtitle: string }[];

  return slides.map((slide, index) => ({
    ...slide,
    id: index.toString(),
    image: imagesArr[index],
  }));
};
