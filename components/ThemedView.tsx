import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  borderLightColor?: string;
  borderDarkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  borderLightColor,
  borderDarkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const borderColor = useThemeColor(
    { light: borderLightColor, dark: borderDarkColor },
    "border"
  );

  return (
    <View style={[{ backgroundColor, borderColor }, style]} {...otherProps} />
  );
}
