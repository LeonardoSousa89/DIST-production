import { StyleSheet, View, Image } from 'react-native';

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
