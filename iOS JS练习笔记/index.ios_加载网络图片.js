/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  */

  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   */

  import React, {
    Component,
  } from 'react';

  import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  class MySampleAppMovies extends Component {
    render() {
         let pic = {
           uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
         };
         return (
           <Image source={pic} style={styles.images} />
         );
    }
  }
  var styles = StyleSheet.create({
    images: {
      marginTop: 60,
      marginLeft: 60,
      width: 193,
      height: 110,
    },
  });

AppRegistry.registerComponent('MySampleAppMovies', () => MySampleAppMovies);
