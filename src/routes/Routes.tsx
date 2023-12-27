import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import Home from "../views/Home";
import Setting from "../views/Settings";
import Perfil from "../views/Perfil";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

const routesScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
  headerTitleStyle: {
    color: "white",
  },
};

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={routesScreenDefaultOptions}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={routesScreenDefaultOptions}
      />
      {/* Agrega más pestañas según sea necesario */}
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MyTabs" component={MyTabs} />
        <Drawer.Screen name="Settings" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;