import { StyleSheet, View, Text, Image } from 'react-native';

export default (props) =>{
  
  function animation(){
    setTimeout(()=>{
        props.navigation.navigate("login")
    },3000)
  }
  animation()

  return (

        <View style={styles.container}>
            <Image source={require('../../../assets/dist-icon.png')} />
            <Image style={styles.dist} source={require('../../../assets/DIST.png')} />
        </View>
  
    );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'whitesmoke',
      width:'100%',
  },dist:{
    marginTop:30
  }
});
