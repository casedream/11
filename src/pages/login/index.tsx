import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

let naName: string = 'tom'
interface IPerson {
  name: string,
  age: number
}
let tom: IPerson = {
  name: 'tom',
  age: 12
}

export default class Index extends React.Component {
  getData () {
    let u: undefined;
    let num: number = u
    console.log(naName, num, tom)
    console.log('改了b文件')
  }
  
  render () {
    return (
      <View>
        <Text>login</Text>
        <AtButton type='primary' onClick={this.getData}>loginBtn</AtButton>
      </View>
    )
  }
}
