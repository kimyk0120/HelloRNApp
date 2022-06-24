
// noinspection JSUnresolvedFunction

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>Hello TO-DO List</Text>
      </SafeAreaView>
  );
};

const backgroundColor = '#797ff6'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  appTitle:{
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: backgroundColor,
  }
});


export default App;
