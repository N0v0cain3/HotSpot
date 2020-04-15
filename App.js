import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Navbar from "./components/Navbar";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

function App() {
  const [state, changeState] = useState("Waiting")

  const getLocation = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION)

    if(status !== 'granted') {
      changeState("Provide Permission")
    }

    let options = {
      accuracy: Location.Accuracy.High,
      timeInterval: 5000
    }

    Location.watchPositionAsync(options, (data) => {
      changeState(JSON.stringify(data))
    })
  }

  useEffect(() => {
    getLocation()
  })

  return (
    <View style={styles.container}>
      <Navbar styles={styles.navbar}/>
      <Text>{state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '1%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  navbar: {
    width: '100%',
    paddingTop: '5%',
    marginBottom: '5%',
  }
});

export default App