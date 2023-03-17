import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import Api from '../Api/Api';
import React, { useState } from 'react';
const Sigin = ({ navigation }) => {
    const [userName, setuserName] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [err, seterr] = useState('');
    const [errout, seterrout] = useState('');

    const changName = (text) => {
        console.log("hieee", text);
        console.log(text)
        setuserName(text);

    }
    const changPwd = (text) => {
        console.log("llo", text)
        setPwd(text)
    }
    const changEmail = (text) => {
        console.log("llo", text)
        setEmail(text)
    }
    const goLogin = () => {
        navigation.navigate('HomeRouter')
    }
    const submitHandler = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",

            }
        }
        const data = {
            "userName": userName,
            "email": email,
            "password": pwd
        }
        Api.CreateUr(data, config).then(res => { console.log(res) }).catch(err => { console.log(err) })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sigin</Text>
            <TextInput placeholder="Enter the username" value={String(userName)} onChangeText={changName} />
            <TextInput placeholder="Enter the email" value={String(email)} onChangeText={changEmail} />
            <TextInput placeholder='Enter the valid password' numericvalue value={String(pwd)} onChangeText={changPwd} keyboardType="numeric" />
            <Button title='signin' onPress={submitHandler} />
            <Text>already have account? Go login </Text>
            <Button title='login' onPress={goLogin} />

        </View>
    )
}

export default Sigin

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }

})
