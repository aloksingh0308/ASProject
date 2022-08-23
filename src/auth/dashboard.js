import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux'
import pkg from '../../package.json'
import { set_auth } from '../redux/actions';
export default function Dashboard({ navigation }) {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(state, pkg.version)
    const logout = async () => {
        dispatch(set_auth(false))
        await auth().signOut()
        dispatch(set_auth(false))
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <Text>Hi! User</Text>
            <TouchableOpacity onPress={() => logout()} >
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
