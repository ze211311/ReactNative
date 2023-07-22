import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {useState} from 'react'

const IncrementCounter = () => {
    const [age, setAge] = useState(23)

    const increment = ()=> {
            setAge(a => a+1)
    }
    const decrement = ()=> {
        setAge(a => a-1)
    }
  return (
    <View>
      <Text>Your age : {age}</Text>
      <Text>{'\n\n'}</Text>
      <Button title='+3' onPress={()=>{for (let i=1;i<=3;i++){increment()}}}/>
      {/* <Button title='+3' onPress={()=>{increment()increment()increment()}}/> */}
      <Text>{'\n'}</Text>
      <Button title='-1' onPress={decrement}/>
    </View>
  )
}

export default IncrementCounter

const styles = StyleSheet.create({
    container: {
        fle:1,
        justifyContent: 'center',
        alignItems: 'Center'
    }
})