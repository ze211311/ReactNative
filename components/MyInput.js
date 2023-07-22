import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import {useState} from 'react'

const MyInput = () => {
    const [text, setText] = useState(' ')
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter Text' //Placeholder
                style={styles.textInputStyle} //Style
                Value={text} //Initial Value
                onChangeText={(value)=>{setText(value)}} //Input Value
            />
            <Text>
                {'\n\n'}You typed: {text}
            </Text>
            <Button
                title='Reset'
                onPress={()=>setText('Hello')}
            />
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    }
})