import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Navbar from "./components/Navbar"

function App() {
  return (
    <View style={styles.container}>
      <Navbar styles={styles.navbar}/>
      <Text>Hello from App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '1%',
    paddingLeft: '5%',
  },
  navbar: {
    width: '100%',
    paddingTop: '5%',
    marginBottom: '5%',
  }
});

export default App