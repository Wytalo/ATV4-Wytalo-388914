import React, { useState } from 'react';

import Container from '../components/Container'
import Input from '../components/Input'
import Button from '../components/Button'

const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Container >
            <Input
                placeholder="Nome"
                onChangeText={value => setNome(value)}
            />
            <Input
                placeholder="Idade"
                keyboardType="number-pad"
                onChangeText={value => setIdade(value)}
            />
            <Input
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={value => setEmail(value)}
            />
            <Button
                title="OK"
                onPress={() => navigation.navigate('Perfil', { nome, idade, email })}
            />
        </Container>
    )
}

export default Cadastro;