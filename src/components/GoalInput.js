import { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native'

export default function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState('')

  const textInputhandler = (textEnter) => {
    setEnterGoalText(textEnter)
  }

  const addGoalHandle = () => {
    if (!enterGoalText.trim()) return
    props.onAddGoal(enterGoalText)
    setEnterGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your To Do List"
          onChangeText={textInputhandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="add goal" onPress={addGoalHandle} color="#008B8B" />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color="#5F9EA0" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#B0E0E6',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  textInput: {
    borderRadius: 16,
    backgroundColor: '#E1FFFF',
    borderColor: '#B0E0E6',
    color: '#5F9EA0',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
})
