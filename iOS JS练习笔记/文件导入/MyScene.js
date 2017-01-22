/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { View, Text } from 'react-native';

// 注意组件声明前面的export default关键字。
// 它的意思是导出(export)当前组件，以允许其他组件引入(import)
// 和使用当前组件，就像下面这样（下面的代码你可以写在index.ios.js或是index.android.js中）：
 export default class MyScene extends Component {
   static defaultProps = {
     title: 'MyScene'
   };

   render() {
     return (
       <View>
         <Text>Hi! My name is {this.props.title}.</Text>
       </View>
     )
   }
 }
