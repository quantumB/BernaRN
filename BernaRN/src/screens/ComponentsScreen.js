import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
  return (<View style={styles.viewStyle}>
    <Text>Hey Berna</Text>
    <Text>Keep Calm </Text>
    <Text>&</Text>
    <Text>React Native ⚛️</Text>
  </View>);
};


const styles = StyleSheet.create({
  textStyle: {
     fontSize: 30
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ComponentsScreen;
