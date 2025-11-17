export const palette = {
  neutral100: "#FFFFFF",
  neutral150:"#FFFFFF66",
  neutral200: "#F4F6F8",
  neutral300: "#D9E1E5",
  neutral400: "#B0BFC6",
  neutral500: "#7D8B91",
  neutral600: "#5A6A70",
  neutral700: "#39474B",
  neutral800: "#385052", 
  neutral900:"rgba(125, 139, 145, 0.5)",
  primary500: "#289CA5", 
  primaryCustom: "#0A84FF", 
  secondary500: "#75B83B",
  secondary100: "#DBEDCC",
  secondary200:"#C9E1E4",
  secondry300:"#3dbacb",
  error500: "#CE0043", 
  error100: "#FDECEA",
  cardLight: "#DCF1F3", 
  borderLight: "#BEDBDE", 
  activetab:"#253536",
  shadow:"#DCEBEC",
  shadow2:"#ADD1D5",
  circle:"#D9D9D9",
} as const;

export const colors = {
  palette,
  ...palette, 

  background: palette.neutral100, 
  card: palette.cardLight,
  border: palette.borderLight,
  separator: palette.neutral300,

  text: palette.neutral800, 
  textDim: palette.neutral500,
  textHint: palette.neutral400,
  textInverse: palette.neutral100,

  tint: palette.primary500,
  secondary: palette.secondary500,
  secondaryContainer: palette.secondary100,

  error: palette.error500,
  errorBackground: palette.error100,
  success: "#00A86B",
  successBackground: "#E6F9F0",
  warning: "#FF9500",
  warningBackground: "#FFF4E5",

  transparent: "rgba(0,0,0,0)",
  black: "#000000",
  white: "#FFFFFF",
  
};
