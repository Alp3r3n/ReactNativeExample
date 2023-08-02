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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  
  const [Items ,setItems] = useState([
    { key: 1, item: 'Item1' },
    { key: 2, item: 'Item2' },
    { key: 3, item: 'Item3' },
    { key: 4, item: 'Item4' },
    { key: 5, item: 'Item5' },
    { key: 6, item: 'Item6' },
    { key: 7, item: 'Item7' },
    { key: 8, item: 'Item8' },
    { key: 9, item: 'Item9' },
    { key: 10, item: 'Item10' },
    { key: 11, item: 'Item11' },
  ]);

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 69, item: 'Item 69'}]);
    setRefreshing(false);
  }

  return (
      <ScrollView
       style = {styles.body}
       refreshControl={
        <RefreshControl
          refreshing = { Refreshing }
          onRefresh= {onRefresh}
          colors = {['#ff00ff']}
        />
       }
       >
        {
          Items.map((item) => {
            return(
              <View style = {styles.item}>
                <Text style = {styles.text}>{item.item}</Text>
              </View>
            )
          })
        }
      </ScrollView>
  );
}; 

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item : {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  } ,
  text : {
    color:'#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10, 
    textTransform: 'uppercase',
  },
});

export default App;
