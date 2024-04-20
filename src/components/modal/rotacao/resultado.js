import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../../hooks/useStorage";
import { useState } from 'react';

export function ModalResultado({handleClose, resultado}) {

    const { saveItem, clearall } = useStorage()

    async function copy() {
        Clipboard.setStringAsync(resultado)
        alert('Valor copiado com sucesso!')
    }
    
    async function saveRotacao() {
        const newConta = {tipoConta: 'Rotação', valor: resultado}
        await saveItem('@resultados', newConta)
    }

    async function clear() {
        clearall()
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Cálculo da Rotação</Text>
                    <Text>Valor de n (Rotação do eixo principal)</Text>
                    <Text>Para copiar segure encima do resultado</Text>
                </View>

                <View style={styles.input}>
                    <Pressable onLongPress={copy}>
                        <Text>{resultado} rpm</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={saveRotacao}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    content:{
        backgroundColor: '#FFF',
        width: '85%',
        paddingBottom: 24,
        paddingTop:24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8,
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
        marginBottom:24,
    },
    input:{
        backgroundColor: 'aliceblue',
        width: '90%',
        padding:14,
        borderRadius: 8,
        borderColor: 'black',
        marginBottom: 10,
        marginTop: 10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        color:'#FFF',
        textAlign:'center',
    },
    buttonArea:{
        flexDirection:'row',
        width:'90%',
        marginTop:8,
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        flex:1,
        alignItems:'center',
        marginBottom:14,
        marginTop:14,
        padding:8,
    },
    buttonSave:{
        backgroundColor: 'dodgerblue',
        borderRadius:8,
    },
    buttonSaveText:{
        color:'#FFF',
        fontWeight:'bold',
    },
    titleArea:{
        alignItems: 'center'
    },
    formArea:{
        width:'90%',
        marginTop:8,
        alignItems:'center',
        justifyContent:'space-between'
    },
});