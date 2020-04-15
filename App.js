import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

function App() {
  const [state, changeState] = useState({
    carrier: ""
  })

  useEffect(() => {
    NetInfo.fetch().then(info => {
      changeState({carrier: info.details.carrier})
    })
  })

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Your carrier is: {state.carrier}</Text>
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
  textStyle: {
    fontSize: 20,
  }
});

export default App