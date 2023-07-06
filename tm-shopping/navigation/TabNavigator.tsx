import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BasketScreen from "../screens/BasketScreen";
import HomeIcon from "../components/common/Icons/HomeIcon";
import BasketIcon from "../components/common/Icons/BasketIcon";
import ContactScreen from "../screens/ContactScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

export type TabNavigatorParamsList = {
  HomeStack: undefined;
  BasketStack: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();
const Stack = createNativeStackNavigator();

export type StacksParamsList = {
  HomeScreen: undefined;
  BasketScreen: undefined;
  ContactScreen: undefined;
  CheckoutScreen: undefined;
  ProductsScreen: { category: string };
  ProductDetailsScreen: {};
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const BasketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasketScreen" component={BasketScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="BasketStack"
        component={BasketStack}
        options={{
          tabBarIcon: BasketIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
