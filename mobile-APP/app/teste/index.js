import { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { signUp, facebookAuthProvider } from '../src/services'
import { auth } from '../src/services/db'

import { TextInput,Button } from '@react-native-material/core';
import { ScrollView } from 'react-native'

export default (props)=>{

    useEffect(()=>{},[])
        

    function createUser(){
        signUp('Mendes Sousa' ,auth, 'email@teste.com', '123456')
    }

    // function createFacebookUser(){
    //     facebookAuthProvider()
    // }

    return(
            <ScrollView  style={styles.container}>
                <View style={styles.subConntainer}>
                    <Text>teste area</Text>

                    <Button variant="outlined"
                            title="create user" 
                            color='#2196f3'
                            onPress={createUser} />

                    {/* <Button variant="outlined"
                            title="create facebook user" 
                            color='#2196f3'
                            onPress={createFacebookUser}/> */}

                </View>
            </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        width:'100%',
    },subConntainer:{
        //deve setar altura e largura, a altura deve ser maior que a altura da tela.
        //em meu caso 800 (deve ser valor numerico) como o utilizado aqui
        width:'100%',
        height:800, //aqui designa a altura do scroll (caso necessite mais, aumente)
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    }
})