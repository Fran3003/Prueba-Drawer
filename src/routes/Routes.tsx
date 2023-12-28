import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import Home from "../views/Home";
import Setting from "../views/Settings";
import Perfil from "../views/Perfil";
import Calendario from "../views/Calendario";
import Camada from "../views/Camada";
import Publicaciones from "../views/Publicaciones";
import About from "../views/About";
import NextGame from "../views/NextGame";
import Evento from "../views/Evento";
import Posts from "../views/Posts";
import Newsletter from "../views/Newsletter";
import Noticias from "../views/Noticias";

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
        name="Calendario"
        component={Calendario}
        options={routesScreenDefaultOptions}
      />
      <Tab.Screen
        name="Camada"
        component={Camada}
        options={routesScreenDefaultOptions}
      />
      <Tab.Screen
        name="Publicaciones"
        component={Publicaciones}
        options={routesScreenDefaultOptions}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={routesScreenDefaultOptions}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MyTabs" component={MyTabs} />
        <Drawer.Screen name="Next Game" component={NextGame} />
        <Drawer.Screen name="Evento" component={Evento} />
        <Drawer.Screen name="Posts" component={Posts} />
        <Drawer.Screen name="Newsletter" component={Newsletter} />
        <Drawer.Screen name="Noticias" component={Noticias} />
        <Drawer.Screen name="Settings" component={Setting} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;