import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import userReducers from './reducers/user';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(combineReducers({ userReducers }));

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <Login />
      </View>
    </Provider>
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
