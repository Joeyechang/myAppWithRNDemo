/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,} from 'react';
import { AppRegistry,Text,TextInput,View} from 'react-native';

class MySampleAppMovies extends Component {

  constructor(props){
    super(props);
    this.state = {text:''};
  }

  /*
  TextInput是一个允许用户输入文本的基础组件。它有一个名为onChangeText的属性，
  此属性接受一个函数，而此函数会在文本变化时被调用。另外还有一个名为onSubmitEditing的属性，
  会在文本被提交后（用户按下软键盘上的提交键）调用。
  假如我们要实现当用户输入时，实时将其以单词为单位翻译为另一种文字。
  我们假设这另一种文字来自某个吃货星球，只有一个单词： 🍕。所以"Hello there Bob"将会被翻译为"🍕🍕🍕"。
  */
  render() {
    return (
       <View style={{padding: 10}}>
         <TextInput
           style={{height: 40}}
           placeholder="Type here to translate!"
           onChangeText={(text) => this.setState({text})}
         />
         <Text style={{padding: 10, fontSize: 42}}>
           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
         </Text>
       </View>
    );
  }
}

AppRegistry.registerComponent('MySampleAppMovies', () => MySampleAppMovies);
