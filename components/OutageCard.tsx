import React from "react";
import { StyleSheet, View } from "react-native";

import { Zap } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";

const OutageCard = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

  return (
    <ThemedView style={styles.card}>
      <ThemedView
        borderDarkColor={color}
        borderLightColor={color}
        style={styles.iconWrapper}>
        <Zap size={56} absoluteStrokeWidth color={color} />
      </ThemedView>
      <ThemedText style={styles.text}>POINTE AUX SABLES</ThemedText>
      <ThemedText style={styles.subtext}>
        Le vendredi 16 août 2024 de 12:00:00 à 17:00:00
      </ThemedText>
      <View style={styles.collapsibleWrapper}>
        <Collapsible title="Localities and streets">
          <ThemedText type="defaultSemiBold">
            Streets affected by outage:{" "}
          </ThemedText>

          <ThemedText>
            Cent Gaulettes Road, Camp Bombay Road, Riverside Road et les ruelles
            avoisinantes
          </ThemedText>

          <ExternalLink href="https://zap-webapp.vercel.app">
            <ThemedText type="link">View more online</ThemedText>
          </ExternalLink>
        </Collapsible>
      </View>
    </ThemedView>
  );
};

export default OutageCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    padding: 32,
    borderRadius: 8,
    borderWidth: 1,
  },
  collapsibleWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    gap: 16,
  },
  iconWrapper: {
    padding: 16,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 30,
  },
  subtext: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 18,
  },
});
