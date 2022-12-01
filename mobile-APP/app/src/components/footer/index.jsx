import { TextInput,Button } from '@react-native-material/core';
import { StyleSheet, View, Text, Image } from 'react-native';

import { FacebookSocialButton, GoogleSocialButton } from "react-native-social-buttons";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect } from 'react';

export default (props) =>{

  useEffect(()=>{},[])
  
  return (
    <>
        <View style={styles.container}>
            
            <GoogleSocialButton 
                onPress={props.method} 
              />

        </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor: 'whitesmoke',
        width:'100%',
        marginBottom:20
  },text:{
        color:'black',
  },face:{
        marginRight:20,
  }
});
