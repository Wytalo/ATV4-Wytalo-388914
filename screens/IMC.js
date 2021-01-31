import React, { useState } from 'react';
import Container from '../components/Container'
import Button from '../components/Button'
import Input from '../components/Input'

const IMC = ({ navigation }) => {
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    return (
        <Container>
            <Input
                placeholder="Digite o Peso"
                keyboardType="number-pad"
                onChangeText={value => setPeso(value)}
            />
            <Input
                placeholder="Digite a Altura"
                keyboardType="number-pad"
                onChangeText={value => setAltura(value)}
            />
            <Button
                title="OK"
                onPress={() => navigation.navigate('Resultado', { peso, altura })}
            />
        </Container>
    )
}

export default IMC;