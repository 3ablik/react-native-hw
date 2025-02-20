import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function AppGallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://images.pexels.com/photos/30605290/pexels-photo-30605290.jpeg",
      name: "Image 1",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/30605290/pexels-photo-30605290.jpeg",
      name: "Image 2",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/30605290/pexels-photo-30605290.jpeg",
      name: "Image 3",
    },
  ]);
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        placeholder="Enter Name"
        value={imageName}
        onChangeText={setImageName}
      />
      <TextInput
        placeholder="Enter Url"
        onPress={() => {}}
        disabled={loading}
      />
      <Button title="Add Image" value={imageUrl} onChangeText={setImageUrl} />
      <ScrollView>
        {images.map((img) => (
          <TouchableOpacity key={img.id}>
            <ImageBackground
              source={{ uri: img.src }}
              style={{
                height: 150,
                justifyContent: "flex-end",
                width: 300,
                marginBottom: 10,
              }}
              resizeMode="cover"
            >
              <View style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: 5 }}>
                <Text style={{ color: "white" }}>{img.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
