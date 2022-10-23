import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MapDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const id = item.attributes["OBJECTID"];
  const title = item.attributes["TITLE"];
  const artist = item.attributes["ARTIST"];
  const year = item.attributes["YEAR"];
  const type = item.attributes["TYPE"];
  const image = item.attributes["JPG_URL"];
  const address = item.attributes["ADDRESS"];
  const loc = item.attributes["LOCATION"];

  //change title
  navigation.setOptions({
    title: title,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />

      <View style={styles.caption}>
        <Text style={styles.heading}>{title}</Text>
        <Text>
          {artist}, {year}
        </Text>
        <Text>{type}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Location:</Text>
        <Text>{address}</Text>
        <Text>{loc}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MapDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  img: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    resizeMode: "contain",
  },
  caption: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
  },
});
