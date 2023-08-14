import React, { useState } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [deneme1, deneme2] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
  }

  return (
    <View style = {styles.body}>
      <Text style = {styles.text}>
        Please write your name:
      </Text>
      <TextInput
       style = {styles.input}
       placeholder = 'e.g. Alperen'
       onChangeText = {(value) => SetName(value)}
      />
      {/*
      <Button 
        title = {submitted ? 'Clear' : 'Submit'}
        onPress = {onPressHandler}
        color = '#00f'
      />
      */}

      {/*
      <TouchableHighlight
        style = {styles.button}
        onPress = {onPressHandler}
        activeOpacity = {0.2}
        underlayColor = '#0ff'
      >
        <Text style = {styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight>
      */}

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

      {/*
      <TouchableOpacity
        style = {styles.button1}
      >
        <Text style = {styles.text}>
          :D
        </Text>
      </TouchableOpacity>
      */}

      {submitted ?
        <Text style = {styles.text}>
          Your name is: {name}
        </Text>
        :
        null
      }  
      </View>
  );
}; 

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text : {
    color:'#000000',
    fontSize: 20,
    margin: 10,
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
  },
  button1: {
    width: 150,
    backgroundColor: '#f0ff00',
    borderColor: '#00f',
    borderRadius: 4,
    alignItems: 'center',
  },
});

export default App;
