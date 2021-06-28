import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textCenter}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    backgroundColor: 'lightgray',
    padding: 10,
    marginHorizontal: 5,
  },
  textCenter: {
    textAlign: 'center',
  }
})
