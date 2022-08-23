import React from 'react'
import { FlatList, SafeAreaView,Text } from 'react-native'

const drawerData = [
    {
        id: "0",
        title: "Dashboard"
    }
]

export default function CustomDrawer() {

    const renderItem = ({ item }) => {
        return (
            <Text>{item.title}</Text>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}  >
            <FlatList
                data={drawerData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
