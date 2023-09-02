import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const firstpage = ({route, navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>This is First page of the app</Text>
      <Button
        title='Go to Second Page'
        onPress={()=>(navigation.navigate('Second'))}
      />
    </View>
  )
}

export default firstpage

const styles = StyleSheet.create({})