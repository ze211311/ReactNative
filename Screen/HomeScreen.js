import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import DetailsScreen from './DetailsScreen'


const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={()=>(navigation.navigate('Details'))}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})