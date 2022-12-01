import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { getProfileData, logOut, uploadProfilePhoto, getProfilePhotoUploaded } from '../../services'
import { auth, storage } from '../../services/db'

import * as ImagePicker from 'expo-image-picker';

export default (props) =>{

  const [username,  setUsername]=useState('')
  const [userEmail, setUserEmail]=useState('')  

  const [image, setImage]=useState(null) 

  useEffect(()=>{

    const userId=auth.currentUser.uid
    getProfilePhotoUploaded(userId, setImage)
    
    getProfileData(setUsername, setUserEmail)
  
  }, [image])

  function pageInsertWorker(){
    props.navigation.navigate("insert_worker")
  }

  function pageListWorkers(){
    props.navigation.navigate("list_workers")
  }

  function pageLogin(){
    logOut(auth, props)
  }

  async function changeProfilePhoto(){
      uploadProfilePhoto(auth, storage, setImage, ImagePicker)
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

            <View style={styles.card}>
             
              <Pressable
                onPress={pageInsertWorker}
              >
                  <Image style={styles.cardWorker} source={require('../../../assets/card-worker.png')}  />
              </Pressable>
             
             <Pressable
               onPress={pageListWorkers} 
             >
              <Image style={styles.listWorker} 
                      source={require('../../../assets/workers-list-btn.png')}
                        />
             </Pressable>
             
             <Pressable
               onPress={pageLogin} 
             >
              <Image style={styles.btn_logout} 
                      source={require('../../../assets/btn-logout.png')}
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
      width:'100%',
      height: 750,
      alignItems: 'center',
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
      flex: 1,
  },clientPhoto:{
      height: 120,
      width:  120,
      marginLeft: 10,
      top: -10,
      borderRadius:100,
      borderStyle:'solid',
      borderColor: 'rgba(0,0,0,0.2)',
      borderWidth:5,
      position: 'absolute',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      backgroundColor: 'rgba(0,0,0,0.8)'
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
  },card:{
      flex: 4,
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
  },cardWorker:{
      marginBottom: 20,
  },btn_logout:{
      marginTop: 100,
      marginLeft: 300
  }
});
