import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function settings() {
  return (
    <View style = {styles.container}>
      <Text>Under construction</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
})