import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        color="red"
        onPress={() => navigation.navigate("AboutScreen")}
        title="Go to Component Demo"
      />
      <Button
        onPress={() => navigation.navigate("ContactScreen")}
        title="Go to Contact Screen"
      />
      <Button
        color="grey"
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to Image Screen"
      />
    </View>
  );
};

export default HomeScreen;
