import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';

const useStorage = () => {

    const [tableContas, setTableContas] = useState([]);

    useEffect(() => {
        getItem();
    }, [])

    // buscar itens salvos
    const getItem = async (key) => {
        try {
            const storedData = await AsyncStorage.getItem(key);
            console.log(storedData)
            return JSON.parse(storedData) || [];

        } catch (error) {
            console.log('Erro ao buscar', error)
            return [];
        }
    }

    // adicionar nova linha
    const addNewConta = async (newRow) => {
        const newId = tableContas.length + 1
        const newConta = [...tableContas, { id: newId, ...newRow}];
        setTableContas(newConta)
        //if(salvar){console.log('sim')}else{console.log('nao')}
    
        // salvar de verdade
        await saveItem(newConta)
    }

    // salvar item no storage
    const saveItem = async (key, value) => {
        try {
            let contas = await getItem(key);
            const newId = contas.length + 1
            const newConta = [...contas, { id: newId, ...value}];

            contas.push(newConta)
            await AsyncStorage.setItem(key, JSON.stringify(contas))
            
        } catch (error) {
            console.log('Erro ao salvar', error)
        }
    }

    // deletar item no storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);
            let myPasswords = passwords.filter( (password) => {
                return (password !== item)
            })
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
            
        } catch (error) {
            console.log('Erro ao remover', error)
        }
    }

    const clearall = async () => {
        try {
            await AsyncStorage.clear();
            console.log('Todos os itens do AsyncStorage foram removidos.');
          } catch (error) {
            console.error('Erro ao limpar o AsyncStorage:', error);
          }
    }

    return {
        getItem,
        saveItem,
        removeItem,
        addNewConta,
        clearall
    }
}

export default useStorage;