import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Button
        title='Go to Detail.. Again'
        onPress ={()=>navigation.push('Details')}
      />
      <Button
        title='Go to Home'
        onPress ={()=>navigation.navigate('Home')}
      />
      <Button
        title='Go to Back'
        onPress ={()=>navigation.goBack()}
      />

    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})