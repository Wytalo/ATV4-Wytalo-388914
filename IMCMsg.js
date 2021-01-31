import React from 'react';
import { StyleSheet, Text, } from 'react-native';

export default function IMCCalc({ imc }) {
    const isNormal = () => (imc >= 18.5 && imc <= 24.99)

    const getMsgText = () => {
        if (imc < 17)
            return 'Muito abaixo do peso'
        if (imc <= 18.49)
            return 'Abaixo do peso'
        if (imc <= 24.99)
            return 'Peso normal'
        if (imc <= 29.99)
            return 'Acima do peso'
        if (imc <= 34.99)
            return 'Obesidade I'
        if (imc <= 39.99)
            return 'Obesidade II (severa)'
        return 'Obesidade III (mórbida)'
    }

    return (
        <Text style={[styles.text, isNormal() ? styles.normal : styles.notNormal]}>
            {getMsgText()}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    normal: {
        color: 'blue'
    },
    notNormal: {
        color: 'red'
    }
});
