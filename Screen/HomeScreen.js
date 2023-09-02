import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({route, navigation}) => {
    const {itemID} = route.params;
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Text>Inital param : itemID - {itemID}</Text>
      <Button
        title='Go to Details'
        onPress={()=>(navigation.navigate('Details'))}
      />
      <Button
        title='Update Param'
        onPress = {()=>navigation.setParams({
            itemID: Math.floor(Math.random()*100)
        })}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})