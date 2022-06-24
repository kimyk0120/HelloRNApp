
// noinspection JSUnresolvedFunction

import React, {useState}  from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const numbers = [1, 2, 3];
  console.log(...numbers);

  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>Hello TO-DO List</Text>
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo}/>
          <TodoList todos={todos} />
        </View>
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
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});


export default App;
