//import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Modal } from 'react-native'
//import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
//import useStorage from "../../hooks/useStorage";

export function Results() {

      return (
        <SafeAreaView style={{ flex:1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Resultados salvos</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.texto}>Para copiar um resultado apenas segure encima do desejado.</Text>

                <Pressable style={styles.containerTabela}>
                  <Text style={styles.text}>Conta</Text>
                  <Text style={styles.text}>Resultado</Text>
                </Pressable> 
            </View>
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
      backgroundColor: 'dodgerblue',
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
      justifyContent:'space-around',
      marginTop: 30,
    }
});