import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content"></StatusBar>
      <Home />
    </Fragment>
  );
}
