import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Login from './screens /Login'
import Med from './screens /Med'
import Show from './screens /Show'
import Sigin from './screens /Sigin'
const Stack = createStackNavigator();


const Router = () => {


    return (

        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen component={Sigin} name='Sigin' />
            <Stack.Screen component={Login} name='HomeRouter' />
            <Stack.Screen options={{ headerLargeTitle: true }} component={Med} name='Med' />
            <Stack.Screen component={Show} name='Show' />


        </Stack.Navigator>






    )
}

export default Router
