import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

console.log(store)

export default class App extends React.Component {
  render() {
    return  (
      <Provider store={store}>
        <Timer/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




/*
timer scatch on redux store

isCounting: ture | false,
counerDuration: 1500
elapseTime: 0,
*/