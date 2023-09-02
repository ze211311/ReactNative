import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const thirdpage = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>This is Third page of the app</Text>
      
      <Button
        title='Go to Back'
        onPress ={()=>navigation.goBack()}
      />
      <Button
        title='Go to Second page'
        onPress ={()=>navigation.navigate('Second')}
      />
      <Button
        title='Reset navigator to First page'
        onPress ={()=>navigation.navigate('First')}
      />
    </View>
  )
}

export default thirdpage

const styles = StyleSheet.create({})