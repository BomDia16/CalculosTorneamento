import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';

const useStorage = () => {

    const [tableContas, setTableContas] = useState([]);

    useEffect(() => {
        getItem();
    }, [])

    // buscar itens salvos
    const getItem = async () => {
        try {
            const storedData = await AsyncStorage.getItem('tableContas');
            if(storedData) {
                setTableContas(JSON.parse(storedData))
            }

        } catch (error) {
            console.log('Erro ao buscar', error)
            return [];
        }
    }

    // adicionar nova linha
    const addNewConta = async (newRow) => {
        const newId = tableContas.leght + 1
        const newConta = [...tableContas, { id: newId, ...newRow}];
        setTableContas(newConta)

        // salvar de verdade
        await saveItem(newConta)
    }

    // salvar item no storage
    const saveItem = async (data) => {
        try {
            await AsyncStorage.setItem('tableContas', JSON.stringify(data))
            
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

    return {
        getItem,
        saveItem,
        removeItem,
        addNewConta
    }
}

export default useStorage;