import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TouchableOpacity, ImageBackground, Animated } from 'react-native';
export default function App() {

  const topclick = () => {
    console.log('On click works')
  };

  const bottomclick = () => {
    console.log('On click works')
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/grass.jpg")} resizeMode="cover" style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={topclick}>
            <Image source={require("./assets/hand.png")} resizeMode='contain' style={{ height: 150, transform: [{ rotate: '180deg' }]}}/>
        </TouchableOpacity>

        <ImageBackground source={require("./assets/rope.png")} resizeMode='contain' style={styles.rope}>
          <Image source={require("./assets/ropeKnot.png")} resizeMode='contain' style={styles.knot}/>
        </ImageBackground>

        <TouchableOpacity style={styles.button} onPress={bottomclick}>
            <Image source={require("./assets/hand.png")} resizeMode='contain' style={{ height: 150 }}/>
        </TouchableOpacity>

      </ImageBackground>
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

  rope: {
    height: 500,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },

  knot: {
    height: 150, 
    width: 150, 
  },

});
