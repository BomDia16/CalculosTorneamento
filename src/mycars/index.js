//import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Modal } from 'react-native'
//import { useIsFocused } from "@react-navigation/native";
//import { SafeAreaView } from "react-native-safe-area-context";
//import useStorage from "../../hooks/useStorage";

//import { CarroItem, ModalCarro } from "./components/carroItem";

export function Mycars() {

      return (
        <SafeAreaView style={{ flex:1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Meus carros</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.texto}>Para editar, só clique em cima do carro desejado.</Text>

                <Pressable style={styles.containerTabela}>
                  <Text style={styles.text}>Placa</Text>
                  <Text style={styles.text}>Marca</Text>
                  <Text style={styles.text}>Modelo</Text>
                  <Text style={styles.text}>Cor</Text>
                  <Text style={styles.text}>Delete</Text>
                </Pressable>

                
            </View>

            <Modal visible={modalVisible} animationType='fade'>
            </Modal>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    texto:{
      fontSize:20,
      fontWeight:'bold',
      color:'#000',
    },
  
    botoes: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    header:{
      backgroundColor: '#392de9',
      paddingTop:58,
      paddingBottom:14,
      paddingLeft:14,
      paddingRight:14,
    },
    title:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold',
    },
    content:{
        flex:1,
        paddingLeft:14,
        paddingRight:14,
    },
    text:{
      color:'#FFF',
    },
    containerTabela: {
      backgroundColor: "#0e0e0e",
      padding: 14,
      width:"100%",
      borderRadius:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop: 30,
    }
});