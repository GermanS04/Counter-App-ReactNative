import React, { useState } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const App: () => Node = () => {
  const [number, setNumber] = useState(0)

  const onClickbutton = () => {
    setNumber(number + 1)
  }

  return (
    <View style = {styles.body}>
      <Text style = {styles.text}>You have pressed the button</Text>
      <Text style = {styles.text}>{number}</Text>
      <Text style = {styles.text}>times</Text>
      <Button title='Count' onPress={onClickbutton}> </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0f0ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'normal',
    margin: 5,
  },
});

export default App;
