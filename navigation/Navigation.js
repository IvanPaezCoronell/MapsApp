import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import Account from '../screens/Account'
import Home from '../screens/Home'
import Maps from '../screens/Maps'


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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
                    name="account"
                    component= {Account}
                    options={{title: "Inicio de Sesión"}}
                />
                

            </Tab.Navigator>
        </NavigationContainer>
    )
}
