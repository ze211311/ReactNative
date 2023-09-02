import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const secondpage = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>This is second page of the app</Text>
      
      <Button
        title='Go to Back'
        onPress ={()=>navigation.goBack()}
      />
      <Button
        title='Go to second page.. Again'
        onPress ={()=>navigation.push('Second')}
      />
      <Button
        title='Go to First page'
        onPress ={()=>navigation.navigate('First')}
      />
      <Button
        title='Go to Third page'
        onPress ={()=>navigation.navigate('Third')}
      />
    </View>
  )
}

export default secondpage

const styles = StyleSheet.create({})