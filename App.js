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
    {  name: 'Item 1' },
    {  name: 'Item 2' },
    {  name: 'Item 3' },
    {  name: 'Item 4' },
    {  name: 'Item 5' },
    {  name: 'Item 6' },
    {  name: 'Item 7' },
    {  name: 'Item 8' },
    {  name: 'Item 9' },
    {  name: 'Item 10' },
    {  name: 'Item 11' },
    {  name: 'Item 12' },
    {  name: 'Item 13' },
  ]);
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]

// Sayfa yenileme fonksiyonlarını çalıştırır.

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'Item 69'}]);
    setRefreshing(false);
  }

// Üstteki fonksiyon birden fazla kez dönüyor ve sayfa yenilemesini kontrol ediyor ayrıca içerisine item69 u ekliyor.

  return (
    <FlatList
    keyExtractor={(item,index) => index.toString()}
    data = {Items}
    renderItem={({item}) => (
      <View style = {styles.item}>
        <Text style = {styles.text}>{item.name}</Text>
      </View>
    )}
    refreshControl={
      <RefreshControl
        refreshing = { Refreshing }
        onRefresh= {onRefresh}
        colors = {['#ff000f']}
      />
     }
    />
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
  },
});

export default App;
