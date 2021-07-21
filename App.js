import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
} from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [modal, setModal] = useState(false)
  const handleAddGoal = (newGoal) => {
    if (newGoal) {
      setGoals((preValue) => [
        { key: goals.length.toString(), value: newGoal },
        ...preValue,
      ])
      setModal(false)
    }
  }
  const handleDeleteGoal = (id) => {
    // todo
    setGoals(goals.filter((goal) => goal.key !== id))
  }
  const cancelModalHandler = () => {
    setModal(false)
  }
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.layout}>
        <Button title="Add new modal" onPress={() => setModal(!modal)} />
        <GoalInput
          handleAddGoal={handleAddGoal}
          isModal={modal}
          onCancel={cancelModalHandler}
        />
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.key}
              title={itemData.item.value}
              removeGoal={handleDeleteGoal}
            />
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  layout: {
    marginTop: 50,
    paddingVertical: 10,
  },

  headingText: {
    textAlign: 'center',
    fontSize: 50,
  },
  heading: {
    marginBottom: 50,
  },
})
