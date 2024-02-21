import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Image, TouchableOpacity } from 'react-native';
//import { ModalCar } from '../../components/modal';

const Separator = () => <View style={styles.separator} />;

export function Home() {

    const [modalVisible, setModalVisible] = useState(false);

    function createCar() {
        setModalVisible(true);
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
                <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>VELOCIDADE DE CORTE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>AVANÇO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>TEMPO DE CORTE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>RUGOSIDADE</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalVisible} animationType='fade'>
                
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
