import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon'

import Account from '../screens/account/Account'
import Home from '../screens/Home'
import Maps from '../screens/Maps'
import Login from '../screens/account/Login'


const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions =(route, color) => {
        let iconName
        switch (route.name) {
            case "home":
                iconName= "home-circle"
                
                break;
            case "maps":
                iconName= "google-maps"
                
                break;
            case "login":
                iconName= "account"
                    
                break;
         
        }
        return (
            <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator

            initialRouteName="home"
            screenOptions={({route }) => ({
                tabBarIcon: ({color }) => screenOptions(route, color)
            })}
                
            >
                <Tab.Screen 
                    name="home"
                    component= {Home}
                    options={{title: "Home"}}
                />
                <Tab.Screen 
                    name="maps"
                    component= {Maps}
                    options={{title: "Mapa"}}
                />
                 <Tab.Screen 
                    name="login"
                    component= {Login}
                    options={{title: "Inicio de Sesión"}}
                />
                

            </Tab.Navigator>
        </NavigationContainer>
    )
}
