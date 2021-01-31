import React from 'react'
import { StyleSheet, View } from 'react-native'

const Container = ({ children }) => {
    return (
        <View style={styles.container}
        >
            {children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5",
        paddingHorizontal: 10,
    },
});