import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Pressable } from 'react-native';
//import useStorage from "../../hooks/useStorage";
import * as Clipboard from 'expo-clipboard';

export function ModalResultado({handleClose, resultado}) {

    async function copy() {
        Clipboard.setStringAsync(resultado)
        alert('Valor copiado com sucesso!')
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Cálculo de Avanço por Rotação</Text>
                    <Text>Valor de fl (Avanço por Rotação)</Text>
                    <Text>Para copiar segure encima do resultado</Text>
                </View>

                <View style={styles.input}>
                    <Pressable onLongPress={copy}>
                        <Text>{resultado} mm/rot</Text>
                    </ Pressable>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
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