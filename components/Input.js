import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ placeholder, onChangeText, keyboardType }) => {
    return (
        <TextInput style={styles.textInput}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={value => onChangeText(value)}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    textInput: {
        height: 45,
        borderRadius: 5,
        width: "100%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20,
        marginBottom: 5,
    },
});