import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [state, changeState] = useState('This text will change!')

  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <Button title="Click Me!" onPress= {() => changeState('Text Changed!') }/>
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
});
