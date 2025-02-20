import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native-web";

export default function BackgroundImageComponent() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/29676679/pexels-photo-29676679.jpeg",
        }}
        style={styles.back}
      >
        <Text styles={styles.text}>Hello World</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    width: "100%",
    height: 200,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
