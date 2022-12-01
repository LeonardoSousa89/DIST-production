import { TextInput,Button } from '@react-native-material/core';
import { StyleSheet, View, Text, Image } from 'react-native';


import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default (props) =>{



  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/dist-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor: 'whitesmoke',
    width:'100%',
  },text:{
      color:'black',
  }
});
