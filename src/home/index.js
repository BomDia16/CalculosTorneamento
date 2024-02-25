import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Image, TouchableOpacity } from 'react-native';
import { ModalVelocidade } from '../components/modal/velocidade/index';
import { ModalAvanco } from '../components/modal/avanco/index'
import { ModalTempoCorte } from '../components/modal/tempoCorte/index'

const Separator = () => <View style={styles.separator} />;

export function Home() {

    const [velocidadeVisible, setVelocidadeVisible] = useState(false);
    const [avancoVisible, setAvancoVisible] = useState(false);
    const [tempoCorteVisible, setTempoCorteVisible] = useState(false);

    function calcularVelocidade() {
        setVelocidadeVisible(true);
    }

    function calcularAvanco() {
      setAvancoVisible(true);
    }

    function calcularTempoCorte() {
      setTempoCorteVisible(true);
    }

    return (
        <View style={styles.container}>      
            <StatusBar style="auto" />
            
            <View style={styles.texto}>
                <Text>Cálculos de Torneamento!</Text>
                <Text>Um app que calcula automaticamente certos cálculos de torneamento.</Text>
            </View>
            
            <View>
              <Image
                source={require("../assets/usinagem-torneamentoduro1.jpg")}
                resizeMode='center'
              />
            </View>

            <Separator/>
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.button} onPress={calcularVelocidade}>
                      <Text style={styles.buttonText}>VELOCIDADE DE CORTE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={calcularAvanco}>
                      <Text style={styles.buttonText}>AVANÇO LINEAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={calcularTempoCorte}>
                      <Text style={styles.buttonText}>TEMPO DE CORTE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>RUGOSIDADE</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={velocidadeVisible} animationType='fade'>
                <ModalVelocidade handleClose={ () => setVelocidadeVisible(false) } />
            </Modal>

            <Modal visible={avancoVisible} animationType='fade'>
                <ModalAvanco handleClose={ () => setAvancoVisible(false) } />
            </Modal>

            <Modal visible={tempoCorteVisible} animationType='fade'>
                <ModalTempoCorte handleClose={ () => setTempoCorteVisible(false) } />
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
});
