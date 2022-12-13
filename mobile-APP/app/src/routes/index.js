import { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo"

import Toast from 'react-native-toast-message';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, View } from 'react-native'

import _dist from '../pages/animation-dist-page'
import Login  from '../pages/login'
import signUp from '../pages/signUp'
import admin from '../pages/admin'
import insert_worker from '../pages/insert-worker'
import list_workers from '../pages/list-worker'

const Stack=createNativeStackNavigator()

export default (props)=>{
    
    const [connState, setConnState]=useState(0)

    useEffect(() => {
        NetInfo.fetch().then(state => {
          setConnState(state)
        })
    
        const unsubscribe=NetInfo.addEventListener(state => {
          setConnState(state)
        })
    
        return () => {
          unsubscribe();
        }
  
    }, [])
    
    const showToast = () => {
       Toast.show({
            type: 'info',
            text1:'verify your connection',
       })
    }

    const conn=() => {
        connState.isConnected !== true ? showToast() : '' 
    }
    
    conn()

    return(
        <View style={styles.container}>

            <NavigationContainer>
                <Stack.Navigator initialRouteName='dist'
                                    screenOptions={{headerShown: false}}>
                    <Stack.Screen name='dist'           component={_dist} />
                    <Stack.Screen name='login'          component={Login} />
                    <Stack.Screen name='signUp'         options={{headerShown: true, title:""}} component={signUp} />
                    <Stack.Screen name='admin'          component={admin} />
                    <Stack.Screen name='insert_worker'  component={insert_worker} />
                    <Stack.Screen name='list_workers'   component={list_workers} />
                </Stack.Navigator>
            </NavigationContainer>

            <Toast />

         </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    }
})

