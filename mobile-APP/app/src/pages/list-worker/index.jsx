import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, 
         Touchable, TouchableOpacity, FlatList } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { 
        logOut, 
        insertWorker, 
        getProfileData, 
        getProfilePhotoUploaded, 
        uploadProfilePhoto, 
        pagination, 
        getWorkersData,
        getWorkersLastPage
        
} from '../../services'

import { auth, db, storage } from '../../services/db'

import { API_URL } from '../../../.env.json'

import * as ImagePicker from 'expo-image-picker';

export default (props) =>{

    
    const [username, setUsername]=useState('')
    const [userEmail, setUserEmail]=useState('')  

    const [image, setImage]=useState(null) 

    const [data, setData]=useState([])   
    const [page, setPage]=useState(0) 
    const [lastPage, setLastPage]=useState(false) 
    
    useEffect(()=>{
        
        const userId=auth.currentUser.uid
        getProfilePhotoUploaded(userId, setImage)

        getProfileData(setUsername, setUserEmail)

        getWorkersData(setData, page)
        
        getWorkersLastPage(setLastPage, page)
       
    },[image, page, lastPage])

    
    function back(){
        props.navigation.navigate("admin")
    }
    
    function previewBtn(){
        setPage(page-1)
        pagination(setData, page)
        
        if(page === 0 || page < 0){
            setPage(0)
        }

        pagination(setData, page)
    }

    function nextBtn(){
        setPage(page+1)
        pagination(setData, page)
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
                             {  image ? 
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
  
              <View style={styles.listWorker}>
                  
                <View>

                    { 
                       
                       data.length === 0? 
                       (<Text style={styles.name}>no workers to show</Text>) 
                       
                       : 
                       
                       ( data.map(e=>{

                            return(
                                <View key={e.workerId}>
                                    <Text style={styles.name}>{e.workerName}</Text>
                                </View>
                            )
                
                        }))

                    }
                </View>

                <View style={styles.pagination}>
                
                   {
                    page<=0 ? 
                        (
                            data.length === 0 ? 
                            (<Text></Text>) 
                            
                            : 
                            
                            (<Pressable
                                >
                                    <Image style={styles.preview} source={require('../../../assets/disable.png')} />
                                </Pressable>
                            )
                        
                        ) 
                        
                    :

                        ( 
                            <Pressable
                                onPress={previewBtn}
                            >
                                <Image style={styles.preview} source={require('../../../assets/preview.png')} />
                            </Pressable>
                        )
                   }
                

                   {
                    lastPage === true || data.length<10 ? 
                        (   <Text></Text>   )
                        
                        : 
                        
                        (
                            <Pressable
                                onPress={nextBtn}
                            >
                                <Image style={styles.next} source={require('../../../assets/next.png')} />
                            </Pressable>
                        )

                   }

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
        maxHeight: 1000,
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
        // marginRight:'20%'
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
    },listWorker:{
        flex: 5,
        // backgroundColor: 'red',
        padding: 20,
        justifyContent:'space-evenly',
        width:'90%',
        marginTop:50,
    },field:{
        borderRadius:'12'
    },name:{
        backgroundColor: 'white',
        borderStyle:'solid',
        borderColor: 'rgba(0,0,0,0.5)',
        borderWidth:0.5,
        fontSize: 20,
        color:'rgba(0,0,0,0.5)' ,
        padding: 5,
    },pagination:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },preview:{
        marginTop: 40,
        marginBottom: 40
    },next:{
        marginTop: 40,
        marginBottom: 40
    }
  });
  