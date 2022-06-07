import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';


const App = () =>{
  return(
   
    <NavigationContainer style={styles.container}>
      <Tabs/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create
({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#48234E"
  },

});

export default App;