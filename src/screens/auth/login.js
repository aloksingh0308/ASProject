import React, { useState } from 'react'
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux'
import { set_auth, set_userInfo } from '../../redux/actions';
import { vh, vw, normalize } from '../../utils/dimensions';
export default function Login({ navigation }) {
    const state = useSelector(state => state)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAccepted, setAccepted] = useState(false)
    const dispatch = useDispatch()
    console.log(state)
    const login = async () => {
        if (email && password) {
            try {
                await auth().signInWithEmailAndPassword(email, password);
                auth().onAuthStateChanged((user) => {
                    console.log(user)
                    dispatch(set_auth(true))
                    dispatch(set_userInfo(user))
                    navigation.navigate('DrawerNavigation', { screen: 'Dashboard' })
                })
            } catch (error) {
                alert(error);
            }
        } else {
            alert('enter valid details')
        }

    }

    const createUser = async () => {
        if (email && password) {
            try {
                await auth().createUserWithEmailAndPassword(email, password);
                alert('Created successfully, please login')
            } catch (error) {
                alert(error);
            }
        } else {
            alert('enter valid details')
        }

    };

    const passwordValidation = (text) => {
        let reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return reg.test(text);
    }

    const emailValidation = (text) => {
        let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return reg.test(text);
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
            <View style={{ width: vw(375), height: vh(300), justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: normalize(24), color: '#444' }} >Welcome to App</Text>
            </View>
            <View style={{ width: vw(375), justifyContent: 'flex-start' }} >
                <TextInput placeholder={"Email"}
                    placeholderTextColor="#AFAFAF"
                    onChangeText={(val) => emailValidation(val) ? setEmail(val) : undefined}
                    returnKeyType='next'
                    autoCapitalize="none"
                    keyboardType="email-address"
                    maxLength={30}
                    style={styles.emailTextInput}
                >
                </TextInput>
            </View>
            <TextInput
                placeholder={"Password"}
                placeholderTextColor="#AFAFAF"
                userInterfaceStyle="automatic"
                onChangeText={(val) => passwordValidation(val) ? setPassword(val) : undefined}
                maxLength={16}
                autoCapitalize="none"
                returnKeyType='next'
                secureTextEntry={true}
                style={{ ...styles.emailTextInput, marginTop: vh(30) }}
            >
            </TextInput>
            <View style={{ width: vw(375), height: vh(180), paddingHorizontal: vw(20), marginTop: vh(30) }} >
                <View style={{
                    flexDirection: 'row'
                }} >
                    <TouchableOpacity
                        onPress={() => setAccepted(!isAccepted)}
                        style={{ width: vw(20), height: vw(20), borderWidth: 1, borderRadius: vw(20 / 2), backgroundColor: isAccepted ? '#1E2943' : '#fff' }} />
                    <Text style={{ paddingHorizontal: vw(10) }} >Accept the terms and conditions</Text>
                </View>
                <TouchableOpacity
                    disabled={!isAccepted}
                    style={{ ...styles.ButtonView }}
                    onPress={() => login()} >
                    <Text style={{ ...styles.ButtonText, opacity: isAccepted ? 1 : 0.4 }} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.ButtonView, backgroundColor: '#fff' }}
                    onPress={() => createUser()} >
                    <Text style={{ ...styles.ButtonText, color: '#1E2943' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


    emailTextInput: {
        alignSelf: 'center',
        paddingLeft: 20,

        fontSize: normalize(14),
        height: vh(50),
        width: vw(340),
        borderRadius: 5,
        borderWidth: 1
    },
    ButtonView: {
        backgroundColor: "#1E2943",
        height: Platform.OS === 'ios' ? vh(48) : vh(55),
        width: vw(340),
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(20)
    },

    ButtonText: {
        color: '#fff',
        fontSize: normalize(20),
        fontWeight: '600',
        textAlign: 'center',
    },
});

