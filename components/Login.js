import { StyleSheet, Text, View, TextInput, Button} from 'react-native' //Textinput for text box and button for submit button
import React from 'react'
import {useState} from 'react' //useState for store input

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const checkTextInput = () => {
        //Check for the Name Text Input
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        //check for the Email TextInput
        else if (!email.trim()) {
            alert('Please Enter Email');
            return;
        }
        else {
            alert('Success')
            return;
        }
    }
  return (
    <View style={styles.container}>
      <TextInput placeholder='User' style={styles.textInputStyle} value={name} onChangeText={(value)=>setName(value)}/>

      <TextInput placeholder='Email' style={styles.textInputStyle} value={email} onChangeText={(value)=>setEmail(value)}/>
      <Text>{'\n\n'}</Text>
      <Button title='Submit' onPress={checkTextInput}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 35
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    }
})