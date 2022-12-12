import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import { auth } from '../../services/db'; 
import { signInWithEmailAndPass, conn } from '../../services';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Header from '../../components/header';

export default (props) =>{
  
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  useEffect(()=>{},[email, password])

  return (
    <ScrollView>
      <View style={styles.container}>
        
        <Header />  
        <Image source={require('../../../assets/Login.png')} />

        <View style={styles.internalContainer}>

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
                    title="login" 
                    color='#2976E6'
                    trailing={props => <Icon name="send" {...props} />} 
                    onPress={()=>signInWithEmailAndPass(auth, email, password, props)}
            />
          
          <View style={styles.textMessage}>
              <Text style={styles.link}
                    onPress={()=>props.navigation.navigate("signUp")
            }>do you haven't account? 
            
              <Text style={styles.blue}> Create</Text>
            </Text>

          </View>

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
      height:650,
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
      height:60,
      alignItems:'center',
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
      backgroundColor:'whitesmoke'
  },blue:{
      color:'#2976E6',
  },link:{
      fontWeight:'bold',
  }
});
