import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'


export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  fun () {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
      return a;
    }
  }
  login () {
    console.log('login')
    Taro.navigateTo({
      url: '/pages/login/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary' onClick={this.login()}>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' onClick={this.login}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}
