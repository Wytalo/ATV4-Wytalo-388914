import React from 'react';
import Container from '../components/Container'
import Button from '../components/Button'

const Home = ({ navigation }) => {
    return (
        <Container >
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            />
            <Button
                title="IMC"
                onPress={() => navigation.navigate('IMC')}
            />
            <Button
                title="Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />
        </Container>
    )
}

export default Home;