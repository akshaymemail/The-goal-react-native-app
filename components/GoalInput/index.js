import React, {useState} from 'react'
import { View,StyleSheet, TextInput, Button } from 'react-native'

export default function GoalInput(props) {
  const [newGoal, setNewGoal] = useState('')
  return (
    <View style={styles.row}>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter text here"
          value={newGoal}
          onChangeText={(text) => setNewGoal(text)}
        />
      </View>
      <View>
        <Button title="Add Now " onPress={(e) => {
            props.handleAddGoal(newGoal)
            setNewGoal('')
        }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'dodgerblue',
  },
  textCenter: {
    textAlign: 'center',
  },
})
