import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Container from '../components/Container'
import Button from '../components/Button'

const Resultado = ({ route, navigation }) => {

    const { peso, altura } = route.params
    let imc = peso / (altura * altura)

    const isNormal = () => (imc >= 18.5 && imc <= 24.99)

    const getMessage = () => {
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

    const getValue = () => {
        if (!peso || !altura)
            return 'Valor de peso ou altura inválido'
        return `Seu IMC é: ${imc.toFixed(2)}`
    }
    return (
        <Container >
            <Text style={styles.text}>
                {getValue()}
            </Text>
            {
                peso && altura
                    ?

                    <Text style={[styles.text, isNormal() ? styles.normal : styles.notNormal]}>
                        {getMessage()}
                    </Text>
                    : null
            }
            <Button
                title="HOME"
                onPress={() => navigation.navigate('Home')}
            />
        </Container>
    )
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
    },
});

export default Resultado;