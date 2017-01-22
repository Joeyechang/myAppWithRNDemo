/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
  /**
   * 原文： https://reactnative.cn/docs/0.40/state.html#content
   * 实际开发中，我们一般不会在定时器函数（setInterval、setTimeout等）中来操作state。
   * 典型的场景是在接收到服务器返回的新数据，或者在用户输入数据之后。你也可以使用一些“状态容器”
   * 比如Redux来统一管理数据流（译注：但我们不建议新手过早去学习redux）。
   */

  import React, {
    Component,
  } from 'react';

  import {
    AppRegistry,
    Text,
    Image,
    ListView,
    StyleSheet,
    View,
  } from 'react-native';

  class Blink extends Component {
    constructor(props){
       super(props);
       this.state = {showText: true};

       setInterval(()=>{
         this.setState({showText: !this.state.showText });
       },2000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
          <Text>{display}</Text>
        );
    }
  }

class MySampleAppMovies extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}


AppRegistry.registerComponent('MySampleAppMovies', () => MySampleAppMovies);
