import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categories from './pages/Categories';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';


const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName;

        switch (route.name) {
          case 'Home':
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
      tabBarShowLabel:false,
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      inactiveBackgroundColor: 'pink',
      activeBackgroundColor: 'pink'
    }}
    >
      <TabNavigation.Screen name="Home" component={Home} />
      <TabNavigation.Screen name="Pesquisa" component={Categories} />
      <TabNavigation.Screen name="Favoritos" component={Categories} />
      <TabNavigation.Screen name="Carrinho" component={Categories} />
    </TabNavigation.Navigator>
  );
};
const StackNavigation = createNativeStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen name="Login" component={Login} 
        options={{
            title:'Login',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'pink'},
                headerTintColor:'black'}
            }
            />
        <StackNavigation.Screen name="Home" component={BottomTabNavigator} 
        options={{
            title:'Home',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'pink'},
                headerTintColor:'black'}
            }
            />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
