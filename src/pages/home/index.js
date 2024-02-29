import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Image, TouchableOpacity } from 'react-native';
import { ModalRotacao } from '../../components/modal/rotacao/index';
import { ModalAvanco } from '../../components/modal/avanco/index'
import { ModalTempoCorte } from '../../components/modal/tempoCorte/index'
import { ModalAvancoPRotacao } from '../../components/modal/avancoPRotacao';

const Separator = () => <View style={styles.separator} />;

export function Home() {

    const [rotacaoVisible, setRotacaoVisible] = useState(false);
    const [avancoVisible, setAvancoVisible] = useState(false);
    const [tempoCorteVisible, setTempoCorteVisible] = useState(false);
    const [avancoPRotacaoVisible, setAvancoPRotacaoVisible] = useState(false);

    function calcularRotacao() {
        setRotacaoVisible(true);
    }

    function calcularAvanco() {
      setAvancoVisible(true);
    }

    function calcularTempoCorte() {
      setTempoCorteVisible(true);
    }

    function calcularAvancoPRotacao() {
      setAvancoPRotacaoVisible(true);
    }

    return (
        <View style={styles.container}>      
            <StatusBar style="auto" />
            
            <View style={styles.texto}>
                <Text style={styles.title}>Cálculos para Operação de Torneamento!</Text>
                <Text style={styles.descricao}>Este app tem como objetivo auxiliar o técnico de processos no melhor aproveitamento dos recursos, garantindo
                   a qualidade do produto no menor tempo possível.</Text>
            </View>
            
            <View>
              <Image
                source={require("../../assets/usinagem-torneamentoduro1.jpg")}
                resizeMode='center'
              />
            </View>

            <Separator/>
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.button} onPress={calcularAvancoPRotacao}>
                      <Text style={styles.buttonText}>AVANÇO POR ROTAÇÂO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={calcularRotacao}>
                      <Text style={styles.buttonText}>ROTAÇÂO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={calcularAvanco}>
                      <Text style={styles.buttonText}>AVANÇO LINEAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={calcularTempoCorte}>
                      <Text style={styles.buttonText}>TEMPO DE CORTE</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={rotacaoVisible} animationType='fade'>
                <ModalRotacao handleClose={ () => setRotacaoVisible(false) } />
            </Modal>

            <Modal visible={avancoVisible} animationType='fade'>
                <ModalAvanco handleClose={ () => setAvancoVisible(false) } />
            </Modal>

            <Modal visible={tempoCorteVisible} animationType='fade'>
                <ModalTempoCorte handleClose={ () => setTempoCorteVisible(false) } />
            </Modal>

            <Modal visible={avancoPRotacaoVisible} animationType='fade'>
                <ModalAvancoPRotacao handleClose={ () => setAvancoPRotacaoVisible(false) } />
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  botoes: {
    alignItems: 'center',
    alignContent: 'space-around'
  },

  buttonText:{
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  button:{
    backgroundColor: 'dodgerblue',
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginBottom: 15,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000',
    marginBottom:24,
  },
  descricao:{
    fontSize:16
  }
});
