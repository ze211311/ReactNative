import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from 'react'
import {useState} from 'react'

const Form = () => {
    const [name, setName] = useState('Taylor')
    const [age, setAge] = useState(42)
    const increment = ()=> {
        setAge(a => a+1)
    }
  return (
    <View style={styles.container}>
      <TextInput placeholder={name} style={styles.textInputStyle} value={name} onChangeText={(value)=>setName(value)}/>
      <Text>{'\n\n'}</Text>
      <Button title='INCREMENT AGE' onPress={()=>setAge(age+1)}/>
      <Text>{'\n\n'}Hello, {name}. You are {age}</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    textInputStyle:{
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    }
})