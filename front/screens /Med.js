import { StyleSheet, Text, View, Dimensions, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import Api from '../Api/Api';
const Med = ({ navigation }) => {
    const [Dname, setDname] = useState('');
    const [Dunit, setDunit] = useState(0);
    const [Dosage, setDosage] = useState(0);
    const [Notes, setNotes] = useState('');
    const [err, setError] = useState('');
    const changeDosageName = (text) => {
        console.log(text)

        setDname(text)
    }
    const changeDosageUnit = (text) => {
        console.log(text)
        let dosageunit = parseFloat(text, 3);
        if (dosageunit != null && dosageunit > 0) {
            setDunit(dosageunit)
        }

    }
    const changeDosage = (text) => {
        console.log(text)
        let dosage = parseFloat(text, 3);

        setDosage(dosage)
    }
    const changeNotes = (text) => {
        console.log(text)
        setNotes(text)
    }
    const submitHandler = () => {
        if (Dunit != null && Dunit > 0 && Dosage != null && Dosage > 0 && Dname != null) {
            setError('')
            const config = {
                headers: {
                    "Content-Type": "application/json",

                }
            }
            const data = {
                "Dname": Dname,
                "Dunit": Dunit,
                "Dosage": Dosage,
                "Note": Notes
            }
            Api.InsertMed(data, config)
                .then(res => {
                    //console.log("response", res.data.success)
                    if (res.data.result != "") {
                        console.log("sunceess", res.data)

                    } else {

                    }
                })
                .catch(err => {
                    console.log(err)

                })
        } else {
            setError('input error')
        }
    }
    const goNext = () => {
        navigation.navigate('Show')
    }

    return (
        <View>
            <View style={styles.Dosconstainer}>
                <Text style={styles.header}>Insert Dosage</Text>
                <Text>Dosage Name</Text>
                <TextInput placeholder="Enter the dosage name" onChangeText={changeDosageName} />
                <Text>Dosage units</Text>
                <TextInput placeholder="Enter the dosage unit" onChangeText={changeDosageUnit} keyboardType="numeric" />
                <Text>Dosage </Text>
                <TextInput placeholder="Enter the dosage " onChangeText={changeDosage} keyboardType="numeric" />
                <Text>Notes</Text>
                <TextInput placeholder="Enter the notes" onChangeText={changeNotes} />
                <Button title='submit Dosage' onPress={submitHandler} />
                <Text>{err}</Text>
                <Text></Text>
                <Button title='show all medications' onPress={goNext} />
            </View>

        </View>
    )
}

export default Med

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    Dosconstainer: {
        height: Dimensions.get('window').height,
        justifyContent: "center",
        alignItems: 'center',


    },

})
