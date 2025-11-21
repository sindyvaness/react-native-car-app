import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListByBrandScreen from "../screens/ListByBrandScreen";

const Stack = createNativeStackNavigator();

const ListByBrandStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name= 'ListByBrand'
            component={ListByBrandScreen}
            options={{ headerShown: false }}
        >
        </Stack.Screen>
    </Stack.Navigator>
);

export default ListByBrandStack;