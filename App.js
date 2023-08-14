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
      <Button 
        title = {submitted ? 'Clear' : 'Submit'}
        onPress = {onPressHandler}
        color = '#00f'
      />
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
});

export default App;
