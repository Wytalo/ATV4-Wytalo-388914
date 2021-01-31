import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IMCMsg from './IMCMsg'

export default function IMCCalc({ peso, altura }) {

    let imc = peso / (altura * altura)

    return (
        peso > 0 && altura > 0
            ? <View style={styles.container}>
                <Text style={styles.text}>
                    {`Seu IMC é ${imc.toFixed(2)}`}
                </Text>
                <IMCMsg imc={imc} />
            </View>
            : null
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
