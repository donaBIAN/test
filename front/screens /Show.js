import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Api from '../Api/Api';
const Show = () => {
    const [Datas, setDatas] = useState([]);


    const Items = ({ item, onPress }) => (
        <TouchableOpacity   >
            <Text style={{ color: "black" }} >
                Medications Name:{item.Name}{"\n"}
                Medications unit:{item.Units}{"\n"}
                Medications dosage:{item.Dosage}{"\n"}
                Medications Notes:{item.Notes}{"\n"}
            </Text>
            <Button title='delete' onPress={onPress} />
        </TouchableOpacity>
    );


    const ShowItems = ({ item }) => {

        return (
            <Items
                item={item}
                onPress={() => { DeleteContact(item.id) }}

            />

        );
    }


    const DeleteContact = (id) => {

        Api.DeleteData(id)
            .then(res => {

                const content = Datas.filter(data => data.id != id)
                console.log("Datas____", setDatas(content))

            })
            .catch(error => { console.log(error) })
    }
    const loadingData = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        Api.ShowData(config).then(res => { console.log(res); setDatas(res.data.result) }).catch(err => { console.log(err) })
    }
    useEffect(() => {
        loadingData()

    }, [])

    return (
        <View style={styles.container}>

            <Text style={styles.headers}>Show All Medications</Text>
            <FlatList
                data={Datas}
                renderItem={ShowItems}
                keyExtractor={(index) => { index }}

            />


        </View>
    )
}

export default Show

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        padding: 40
    },
    headers: {
        fontSize: 20,

    }

})
