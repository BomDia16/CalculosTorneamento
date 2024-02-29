import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
//import useStorage from "../../hooks/useStorage";
import { useState } from 'react';
import {ModalResultado} from '../tempoCorte/resultado'

const Separator = () => <View style={styles.separator} />;

export function ModalTempoCorte({handleClose}) {

    const [resultadoVisible, setResultadoVisible] = useState(false);

    //const { saveItem } = useStorage();
    const [comprimento, setComprimento] = useState("")
    const [avanco, setAvanco] = useState("")

    const [tempoCorte, setTempoCorte] = useState("")
    
    async function handleCalcular(){
        if (comprimento != "" && avanco != ""){
            value = (comprimento/avanco).toFixed(2)
            setTempoCorte(value)
            setResultadoVisible(true)
        } else {
            alert("Insira os valores pedidos corretamente.")
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Cálculo do Tempo de Corte</Text>
                    <Text>Valor de tc (Tempo de corte)</Text>
                    <Text>Decimais precisam ser no padrão americano (com ponto)</Text>
                </View>

                <View style={styles.formArea}>
                    <TextInput style={styles.input} 
                                placeholder='Comprimento usinado (mm)' 
                                type={'custom'}
                                keyboardType='numeric'
                                placeholderTextColor="#161616" 
                                value={comprimento}
                                onChangeText={ (value) => setComprimento(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Avanço Linear (mm/min)' 
                                type={'custom'}
                                keyboardType='numeric'
                                placeholderTextColor="#161616" 
                                value={avanco}
                                onChangeText={ (value) => setAvanco(value) }/>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCalcular}>
                        <Ionicons style={styles.buttonSaveText} size={25} color={'white'} name='reorder-two' />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal visible={resultadoVisible} animationType='fade'>
                <ModalResultado resultado={tempoCorte} handleClose={ () => {setResultadoVisible(false)} } />
            </Modal>    
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
        marginBottom: 10
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
