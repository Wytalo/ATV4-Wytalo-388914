import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import IMCCalc from './IMCCalc';

export default class IMCApp extends Component {

    constructor(props) {
        super(props)
        this.state = { altura: '', peso: '', alturaForm: '', pesoForm: '' };
    }

    calcAction = () => {
        const { alturaForm, pesoForm } = this.state
        this.setState({ altura: alturaForm, peso: pesoForm })
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.headerText}>IMC APP</Text>
                <TextInput style={styles.textInput}
                    placeholder="Digite o Peso"
                    keyboardType="number-pad"
                    onChangeText={pesoForm => this.setState({ pesoForm })}
                />
                <TextInput style={styles.textInput}
                    placeholder="Digite a Altura"
                    keyboardType="number-pad"
                    onChangeText={alturaForm => this.setState({ alturaForm })}
                />
                <View style={[styles.viewButton]}>
                    <Button
                        title="Calcular IMC"
                        onPress={() => this.calcAction()}
                    />
                </View>

                <IMCCalc peso={this.state.peso} altura={this.state.altura} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20,
        marginBottom: 5,
    },
    viewButton: {
        width: "93%",
        margin: 10,
        backgroundColor: "red"

    }
});
