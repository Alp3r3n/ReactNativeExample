import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
  ToastAndroid,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MashButton from './CustomButton';
import Header from './Header';

const App = () => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [deneme1, deneme2] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    }
    else {
      SetshowWarning(true);
    }
  }

  return (
    <ImageBackground 
      style = {styles.body}
      source = {{uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png'}}  
    >
      <Header/>
      <Modal
        visible = {showWarning}
        transparent
        onRequestClose={() => SetshowWarning(false)}
        animationType='fade'
        hardwareAccelerated
      >
      <View style = {styles.centered_view}>
        <View style = {styles.warning_modal}>
          <View style = {styles.warning_title}>
            <Text style = {styles.text}>WARNING!</Text>
          </View>
            <View style = {styles.warning_body}>
              <Text style = {styles.text}>The name must be longer than 3 characters</Text>
            </View>
            <Pressable
              onPress={() => SetshowWarning(false)}
              style = {styles.warning_button}
              android_ripple={{color:'#fff'}}
            >
              <Text style = {styles.text}>OK</Text>
            </Pressable>
        </View>
      </View>
      </Modal>
      <Text style = {styles.text}>
        Please write your name:
      </Text>
      <TextInput
       style = {styles.input}
       placeholder = 'e.g. Alperen'
       onChangeText = {(value) => SetName(value)}
      />

    {/*  
      <Pressable 
        onPress = {onPressHandler}
        style = {({ pressed }) => [
          {backgroundColor: pressed ? '#0ff' : '#00ff00'},
          styles.button
        ]}
      >
        <Text style = {styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
    */}

      <MashButton
        onPressFunction = {onPressHandler}
        title = {submitted ? 'Clear' : 'Submit'}
        color = {'#00ff00'}
      />

      <MashButton
        onPressFunction = {() => { }}
        title = {'Test'}
        color = {'#ff00ff'}
        style = {{margin:10}}
      />  

      {submitted ?
        <View style = {styles.body}>
          <Text style = {styles.text}>
            You are registered as {name}
          </Text>
          <Image
            style = {styles.image}
            source = {require('../assets/done.png')} 
            resizeMode = 'stretch'
          />
        </View>
          :
          <Image
            style = {styles.image}
            source = {require('../assets/error.png')} 
            resizeMode = 'stretch'
          />
      }  
      </ImageBackground>
  );
}; 

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color:'#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1, 
    borderColor: '#555', 
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#000',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  
});

export default App;
