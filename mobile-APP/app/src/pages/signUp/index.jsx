import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

import Header from '../../components/header';

import { signUp } from '../../services'
import { auth } from '../../services/db'

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default (props) =>{
  
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  useEffect(()=>{},[name, email, password])

  return (
    <ScrollView>
      <View style={styles.container}>
        
        <Header />  
        <Image source={require('../../../assets/SignUp.png')} />

        <View style={styles.internalContainer}>

            <TextInput placeholder='name'
                       color='#2196f3'
                       value={name}
                       onChangeText={(e)=>{setName(e)}}
            /> 

            <TextInput placeholder='email'
                       color='#2196f3'
                       value={email}
                       onChangeText={(e)=>{setEmail(e)}}
            /> 

            <TextInput placeholder='password'
                       color='#2196f3'
                       secureTextEntry
                       value={password}
                       onChangeText={(e)=>{setPassword(e)}}
            /> 


            <Button style={styles.btn}
                    title="send" 
                    color='#2976E6'
                    trailing={props => <Icon name="send" {...props} />} 
                    onPress={()=>signUp(name, auth, email, password, props)}
            />

        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor: 'whitesmoke',
      width:'100%',
      height:700,
  },text:{
      color:'white',
  },internalContainer:{
      width:'80%',
      height:'40%',
  },btn:{
      marginTop:'5%',
      height:50,
      justifyContent:'center'
  },footerText:{
      width:'100%',
      textAlign:'center',
      marginTop:15,
      color:'#2976E6',
  },textMessage:{
      width:'100%',
      marginTop:'5%',
      height:100,
      alignItems:'center',
      backgroundColor: 'whitesmoke',
      marginBottom:30,
  },message:{
      fontWeight:'bold',
      fontSize:15,
      marginBottom:10,
  },messageWith:{
      fontSize:20,
      fontWeight:'bold',
  },footer:{
      alignItems:'center',
      width:'100%',
      height:150,
      backgroundColor:'whitesmoke',
      marginTop:85,
  },arrow:{
      backgroundColor:'whitesmoke',
      justifyContent:'flex-end',
      width:'100%',
      height:'10%',
  },arrIcon:{
      marginLeft:20,
      width:'10%',
  },internButton:{
      width:100,
      marginLeft:20,
      color:'whitesmoke'
  }
});
