import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text
}from 'react-native';
import Index from '../index'
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);
const reducer=combineReducers(reducers);
const store=createStoreWithMiddleware(reducer);
const initState=(state='init')=>{
  return state;
}
const store=createStore(initState);
export default class App extends Component{
  render(){
    return(
      <Provider>
        <Index store={store}/>
      </Provider>
    );
  }
}
