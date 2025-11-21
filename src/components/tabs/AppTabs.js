import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
// Stacks
import HomeStack from "../stacks/HomeStack";
import ListByBrandStack from "../stacks/ListByBrandStack";
import SearchStack from "../stacks/SearchStack";

const Tab = createMaterialTopTabNavigator();

const AppTabs = () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#ccc",
            tabBarStyle: { backgroundColor: "#2c3e50" },
            tabBarIndicatorStyle: { backgroundColor: "#fff" },
            safeAreaInsets: { top: 0, bottom: 0 }
      }}
        >
        </Tab.Navigator>
    </NavigationContainer>
);

export default AppTabs;