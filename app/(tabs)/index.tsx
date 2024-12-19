import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}

function Library() {
  return (
    <View>
      <Text>This is the Library</Text>
    </View>
  );
}

function Liked() {
  return (
    <View>
      <Text>This is the Liked</Text>
    </View>
  );
}

function Suggested() {
  return (
    <View>
      <Text>This is the Suggested</Text>
    </View>
  );
}

export default ForYou;
