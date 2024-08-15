import { Image, StyleSheet, Platform, SafeAreaView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import OutageCard from "@/components/OutageCard";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

export default function HomeScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          {/* <ParallaxScrollView
       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
       headerImage={
         <Image
           source={require("@/assets/images/partial-react-logo.png")}
           style={styles.reactLogo}
         />
       }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome arbxz!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>  */}
          <ThemedView style={styles.stepContainer}>
            <OutageCard />
            <OutageCard />
            <OutageCard />
            <OutageCard />
          </ThemedView>
        </Animated.ScrollView>
      </SafeAreaView>
      {/* </ParallaxScrollView> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    flex: 1,
    padding: 32,
    gap: 32,
    overflow: "hidden",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
