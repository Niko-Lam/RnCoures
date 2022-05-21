import { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import ListItem from './src/components/ListItem'
import GoalInput from './src/components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandle = () => setModalIsVisible(true)
  const endAddGoalHandle = () => setModalIsVisible(false)

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalhandler = (enterGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enterGoalText,
        id: Math.random().toString(),
      },
    ])
    endAddGoalHandle()
  }

  const cleanData = () => setCourseGoals([])

  const deleteGoalhandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id)
    })
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Button title="clean data" onPress={cleanData} color="#5F9EA0" />
        </View>
        <Button
          title="add a todo"
          color="#5F9EA0"
          onPress={startAddGoalHandle}
        />

        <GoalInput
          onAddGoal={addGoalhandler}
          visible={modalIsVisible}
          onCancle={endAddGoalHandle}
        ></GoalInput>

        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <ListItem
                id={item.id}
                item={item}
                deleteitem={deleteGoalhandler}
              ></ListItem>
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  goalContainer: {
    flex: 5,
    marginTop: 24,
    paddingBottom: 10,
  },
})
