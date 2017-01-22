/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,} from 'react';
import { AppRegistry,Text,Image,ListView,StyleSheet,View,} from 'react-native';

class MySampleAppMovies extends Component {
  render() {
    return (
      // 练习一、
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      //  <View style={{flex: 1}}>
      //    <View style={{flex: 2, backgroundColor: 'powderblue'}} />
      //    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //    <View style={{flex: 5, backgroundColor: 'steelblue'}} />
      //  </View>

      // 练习二、
      // 尝试把`flexDirection`的'row'改为`column`看看
      // 尝试把`justifyContent`的'space-between'改为`center`看看
      // 尝试把`flexDirection`改为`row`看看

      // alignItems:
      // 在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴
      // 垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
      // 子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？
      // 对应的这些可选项有：flex-start、center、flex-end以及stretch。
      // 注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
      // 以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。

       <View style={{
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'flex-start',
       }}>
         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
       </View>
    );
  }
}

AppRegistry.registerComponent('MySampleAppMovies', () => MySampleAppMovies);
