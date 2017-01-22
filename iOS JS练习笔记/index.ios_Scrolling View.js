/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class myNativeDemos extends Component {
  render() {
    return (
      <ScrollView >
      <Text style={{fontSize:36}}>Scrolling View Demo</Text>
         <Image style={styles.image} source={require('./images/1.jpg')} />
         <Image style={styles.image} source={require('./images/2.jpg')} />
         <Image style={styles.image} source={require('./images/3.jpg')} />
         <Image style={styles.image} source={require('./images/4.jpg')} />
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image:{

    width:375,
    height:200,
    justifyContent: 'center',
  },
});
// ScrollView适合用来显示数量不多的滚动元素。放置在ScollView中
// 的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外。如
// 果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的ListView组件。
AppRegistry.registerComponent('myNativeDemos', () => myNativeDemos);
