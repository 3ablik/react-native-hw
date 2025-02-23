import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [imgs, setImgs] = useState([
    {
      name: "Понабирают всяких",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEOjCR1mr-ukriVfbG4HAZhqFGXqcy1Oaqw&s",
      id: "0",
    },
    {
      name: "AAA",
      src: "https://static.wixstatic.com/media/455684_06139bb8ae6e4e25a5c99adb99c7fd4a~mv2.png/v1/fill/w_560,h_346,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/455684_06139bb8ae6e4e25a5c99adb99c7fd4a~mv2.png",
      id: "1",
    },
    {
      name: "Бетмен",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4UvkBEJ3Cen3hxnvxLfhf5ifT4Uu0LPTBQ&s",
      id: "2",
    },
  ]);
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Images</Text>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="rgb(200, 200, 200)"
            onChangeText={setName}
            value={name}
          />
        </View>

        <View>
          <Text style={styles.label}>Src:</Text>
          <TextInput
            style={styles.input}
            placeholder="Src"
            placeholderTextColor="rgb(200, 200, 200)"
            onChangeText={setSrc}
            value={src}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setImgs([...imgs, { name, src, id: imgs.length.toString() }]);
          setLoading(true);
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {loading ? (
        <View>
          <Text style={styles.label}>Loading...</Text>
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView style={styles.imgInfo}>
          {imgs.map((img) => (
            <View key={img.id}>
              <ImageBackground
                source={{ uri: img.src }}
                style={styles.image}
                resizeMode="cover"
              >
                <Text style={styles.imgText}>{img.name}</Text>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#101012",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    color: "rgb(240, 240, 240)",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  label: {
    color: "rgb(240, 240, 240)",
    marginBottom: 5,
  },
  formContainer: {
    width: 300,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "rgb(60, 161, 255)",
  },
  imgInfo: {
    marginTop: 20,
  },
  imgText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
