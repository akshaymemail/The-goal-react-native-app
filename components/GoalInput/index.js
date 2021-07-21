import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'

export default function GoalInput(props) {
  const [newGoal, setNewGoal] = useState('')
  return (
    <Modal animationType="slide" visible={props.isModal}>
      <View style={styles.row}>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter text here"
            value={newGoal}
            onChangeText={(text) => setNewGoal(text)}
          />
        </View>
        <View style={styles.btnRow}>
          <View style={styles.btn}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.btn}>
            <Button
              title="Add Now "
              onPress={() => {
                props.handleAddGoal(newGoal)
                setNewGoal('')
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'dodgerblue',
    width: '100%',
  },
  textCenter: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 50,
    margin: 10,
    width: '40%',
  },
  btnRow: {
    flexDirection: 'row',
  },
})
