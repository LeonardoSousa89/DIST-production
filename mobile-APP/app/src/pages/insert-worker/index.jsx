import { TextInput,Button } from '@react-native-material/core';

import { useEffect, useState } from 'react';

import { StyleSheet, 
         View, 
         Text, 
         Image, 
         ScrollView
         } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { insertWorker, getProfileData, getProfilePhotoUploaded } from '../../services'
import { auth } from '../../services/db'

export default (props) =>{
 
  const [username, setUsername]=useState('')
  const [userEmail, setUserEmail]=useState('')   

  const [image, setImage]=useState(null) 

  const [workerName, setWorkerName]=useState(null)
  const [workerEmail, setWorkerEmail]=useState(null)
  const [workerPost, setWorkerPost]=useState(null)
  const [workerAddress, setWorkerAddress]=useState(null)
  const [workerPhoneNumber, setWorkerPhoneNumber]=useState(null)
  const [workerAge, setWorkerAge]=useState(null)

  useEffect(()=>{

    const userId=auth.currentUser.uid
    getProfilePhotoUploaded(userId, setImage)

    getProfileData(setUsername, setUserEmail)

  },[image])

  function back(){
        props.navigation.navigate("admin")
  }

  function navigate(){
        props.navigation.navigate("list_workers")
  }
  
  function saveWorker(){
        let userId=auth.currentUser.uid
        insertWorker(workerName,workerEmail,workerPost,
                     workerAddress,workerPhoneNumber,workerAge,userId,navigate)
  }
  
  function changeProfilePhoto(){
    alert("Change your profile photo in admin page only")
  }

  return (

        <ScrollView>
          
          <View style={styles.container}>
           
          <View style={styles.internalHeader}> 
              
              <View style={styles.logoContainer}>
                  <Image style={styles.logoIcon} source={require('../../../assets/dist-icon.png')} />
              </View>
            
              <View style={styles.profileContainer}> 
                  
                <View style={styles.profilePhotoContainer}>
                    <View style={styles.clientPhoto} > 
                      <Pressable
                        onPress={changeProfilePhoto}
                      >
                          { image ? 
                            (<Image style={{height: 120, width: 120}} source={{uri: image}} />) 
                            : 
                            (<Image source={require('../../../assets/camera.png')} /> )
                          }
                      </Pressable>
                    </View>
                  </View>
                  
                  <View style={styles.userData}>
                    <Text style={styles.textName}>{username}</Text>
                    <Text style={styles.textEmail}>{userEmail}</Text>
                  </View>
              </View>

            </View>

            <View style={styles.formWorker}>
                
                <View style={styles.formArea}>
                    
                    <TextInput style={styles.field} 
                        placeholder='Name'
                        color='#2196f3'
                        value={workerName}
                        onChangeText={(e)=>{setWorkerName(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Email'
                        color='#2196f3'
                        value={workerEmail}
                        onChangeText={(e)=>{setWorkerEmail(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Post'
                        color='#2196f3'
                        value={workerPost}
                        onChangeText={(e)=>{setWorkerPost(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Address'
                        color='#2196f3'
                        value={workerAddress}
                        onChangeText={(e)=>{setWorkerAddress(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Phone number'
                        color='#2196f3'
                        value={workerPhoneNumber}
                        onChangeText={(e)=>{setWorkerPhoneNumber(e)}}
                    /> 

                    <TextInput style={styles.field} 
                        placeholder='Age'
                        color='#2196f3'
                        value={workerAge}
                        onChangeText={(e)=>{setWorkerAge(e)}}
                    /> 

                    <Button style={styles.btn}
                        title="save" 
                        color='#2976E6'
                        trailing={props => <Icon name="content-save" {...props} />} 
                        onPress={saveWorker}
                    />

                </View>

                <Pressable
                  onPress={back} 
                >
                    <Image style={styles.btn_back} 
                        source={require('../../../assets/Arrow.png')}
                    />
                </Pressable>
            </View>

          </View>

        </ScrollView>
  
    );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: 'whitesmoke',
      alignItems: 'center',
      justifyContent:'center',
      width:'100%',
      height: 950,
  },internalHeader:{
      width:'100%',
      flex: 3,
  },logoContainer:{
      flexDirection:'row',
      padding: 20,
      justifyContent:'space-evenly',
  },logoIcon:{
      height:100,
      width: 100,
      marginTop:30,
  },logoText:{
      marginTop:40,
  },profileContainer:{
      backgroundColor:'#2976E61A',
      flex:1,
      flexDirection: 'row'
  },profilePhotoContainer:{
      flex: 1
  },clientPhoto:{
      height: 120,
      width:  120,
      marginLeft: 10,
      top: -10,
      borderRadius: 100,
      borderStyle:'solid',
      borderColor: 'rgba(0,0,0,0.2)',
      borderWidth:5,
      position: 'absolute',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      backgroundColor: 'rgba(0,0,0,0.8)',
  },userData:{
      flex: 2,
      alignItems: 'center',
  },textName:{
      marginTop: 40,
      fontSize: 25,
      marginBottom: 5,
      fontWeight: 'bold'
  },textEmail:{
      fontSize: 14,
      fontWeight: 'bold'
  },formWorker:{
      flex: 5,
      padding: 20,
      justifyContent:'space-between',
      width:'90%',
      marginTop:50,
  },formArea:{
      height:400,
  },field:{
      marginBottom: 5
  },btn:{
      height: 50,
      justifyContent:'center',
  },btn_back:{
      top: -40
  }
});
