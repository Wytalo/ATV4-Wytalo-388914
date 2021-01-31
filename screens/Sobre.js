import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';

const Sobre = ({ navigation }) => {
    return (
        <Container >
            <Text style={styles.text}>Nome: Wytalo Bezerra de Lima</Text>
            <Text style={styles.text}>Email: wytalodelima@alu.ufc.br</Text>
            <Text style={styles.text}>Curso: Design Digital</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    }
})

export default Sobre;