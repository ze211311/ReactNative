import { View, Text } from 'react-native'
import React from 'react'

const getFullName = (Fn, Sn, Tn) => {
    return Fn + ' ' + Sn + ' ' + Tn;
}

const Cat = () => {
  return (
    <View>
      <Text>
        Hello, I am {getFullName('Lily', 'Louis', 'Luca')}!
      </Text>
    </View>
  )
}

export default Cat