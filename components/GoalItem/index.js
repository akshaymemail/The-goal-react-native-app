import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function GoalItem(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.listItem} onPress={e => props.removeGoal(props.id)} >
      <Text style={styles.textCenter}>{props.title}</Text>
    </TouchableOpacity>
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
  },
})
