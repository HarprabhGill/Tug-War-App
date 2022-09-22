import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("./assets/hand.png")} resizeMode='contain' style={{ height: 150, transform: [{ rotate: '180deg' }]}}/>
      </TouchableOpacity>

      <Image source={require("./assets/rope.png")} resizeMode='contain' style={{ height: 500, width: 400 }}/>
      

      <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me 2")}}>
          <Image source={require("./assets/hand.png")} resizeMode='contain' style={{ height: 150 }}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
  },

  button: {

  },
});
