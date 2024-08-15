/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "hsl(216, 92%, 52%)";
const tintColorDark = "rgb(22, 163, 74)";

export const Colors = {
  light: {
    text: "hsl(20, 14.3%, 4.1%)",
    background: "hsl(0, 0%, 100%)",
    border: "hsl(20, 5.9%, 90%)",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "hsl(60, 9.1%, 97.8%)",
    background: "hsl(20, 14.3%, 4.1%)",
    border: "hsl(12, 6.5%, 15.1%)",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
