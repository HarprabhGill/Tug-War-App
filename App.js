import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import React, {Component} from 'react';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      up: 0,
    };
    this.topclick = this.topclick.bind(this);
    this.bottomclick = this.bottomclick.bind(this);
  }

  topclick = () => {
    this.setState({up: this.state.up - 10});
  };

  bottomclick = () => {
    this.setState({up: this.state.up + 10});
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./assets/grass.jpg")} resizeMode="cover" style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={this.topclick}>
              <Image source={require("./assets/hand.png")} resizeMode='contain' style={{ height: 150, transform: [{ rotate: '180deg' }]}}/>
          </TouchableOpacity>

          <ImageBackground source={require("./assets/rope.png")} resizeMode='contain' style={styles.rope}>
            <Image source={require("./assets/ropeKnot.png")} resizeMode='contain' style={{top: this.state.up, height: 150, width:150}}/>
          </ImageBackground>

          <TouchableOpacity style={styles.button} onPress={this.bottomclick}>
              <Image source={require("./assets/hand.png")} resizeMode='contain' style={{ height: 150 }}/>
          </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
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
});
