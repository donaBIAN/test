
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, TextInput, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Api from '../Api/Api';

// create a component

const Login = ({ navigation }) => {

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
    const isValidForm = (email, pwd) => {

        if (pwd.length < 1) return 'Password is too short!';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return 'ivalid email'

        return true;
    };
    const submitHandler = () => {
        const res = isValidForm(email, pwd)
        console.log(isValidForm(email, pwd) === true)
        if (res === true) {
            const config = {
                headers: {
                    "Content-Type": "application/json",

                }
            }
            const data = {
                "name": userName,
                "email": email,
                "password": pwd
            }
            Api.Sign(data, config)
                .then(res => {
                    //console.log("response", res.data.success)
                    if (res.data.result != "") {
                        console.log("sunceess", res.data.result)
                        navigation.navigate('Med')
                    } else {
                        seterr("not valid email and password")
                    }
                })
                .catch(err => {
                    console.log(err)
                    seterr("not valid email and password" + err)
                })
        } else {
            seterrout("the input format is wrong")
        }


    }



    return (
        <View style={styles.container}>

            <View style={styles.picContainer}>

                <Image style={styles.picStyle} resizeMode='contain' source={require('../imges/img-40a2a141-5aed-40e8-bce9-f5793c6aa202.jpeg')} />

            </View>
            <View style={styles.Login}>
                <TextInput placeholder="Enter the username" value={String(userName)} onChangeText={changName} />
                <TextInput placeholder="Enter the email" value={String(email)} onChangeText={changEmail} />
                <TextInput placeholder='Enter the valid password' numericvalue value={String(pwd)} onChangeText={changPwd} keyboardType="numeric" />
                <Button title='Login' onPress={submitHandler} />
            </View>
            <View style={styles.err}>
                <Text >{err}</Text>
                <Text >{errout}</Text>
            </View>




        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    picStyle: {
        width: 300,
        height: 400
    },
    picContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        marginTop: 30,
        height: Dimensions.get('window').height / 2
    },
    Login: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height / 10
    },
    err: {

        justifyContent: 'flex-end',
        alignItems: "center",
        paddingTop: 50

    },
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Login;
