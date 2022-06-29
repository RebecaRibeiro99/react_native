import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categories from '../pages/Categories';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Hometab':
              iconName = 'home';

              break;

            case 'Pesquisa':
              iconName = 'search';
              break;

            case 'Favoritos':
              iconName = 'heart';
              break;
            case 'Carrinho':
              iconName = 'shopping-bag';
              break;
          }

          return <Icon name={iconName} size={35} color={color} />;
        },
        headerShown: false,
        // tabBarLabelStyle:{
        //   fontSize: 18
        // }
        tabBarShowLabel: false,
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        inactiveBackgroundColor: 'pink',
        activeBackgroundColor: 'pink',
      }}>
      <TabNavigation.Screen name="Hometab" component={Home} />
      <TabNavigation.Screen name="Pesquisa" component={Categories} />
      <TabNavigation.Screen name="Favoritos" component={Categories} />
      <TabNavigation.Screen name="Carrinho" component={Categories} />
    </TabNavigation.Navigator>
  );
};
const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen
        name="TabNavigationScreen"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'pink',
          },
        }}
        component={BottomTabNavigator}
      />
      <DrawerNavigation.Screen
        name="CategoriaDrawerScreen"
        options={{
          title: 'Categoria',
          headerStyle: {
            backgroundColor: 'pink',
          },
        }}
        component={Categories}
      />
    </DrawerNavigation.Navigator>
  );
};

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerShown:false,
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTintColor: 'black',
          }}
        />
        <StackNavigation.Screen
          name="Home"
          component={NavigationDrawer}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerShown:false,
            headerStyle: {
              backgroundColor: 'pink',
              
            },
            headerTintColor: 'black',
          }}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
