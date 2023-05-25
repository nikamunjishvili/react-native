import { View,Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./src/screens/AboutScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ContactScreen from "./src/screens/ContactScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{height:'100%'}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size}  />
            )
          }} />
          <Tab.Screen name="AboutScreen" component={AboutScreen} options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="heart" color={color} size={size} />
            )
          }}/>
          <Tab.Screen name="ContactScreen" component={ContactScreen} options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            )
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
