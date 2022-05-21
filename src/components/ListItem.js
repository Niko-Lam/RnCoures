import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function ListItem(props) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: '#ffffff' }}
        onPress={props.deleteitem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listItemText}>{props.item.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    fontSize: 16,
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#008B8B',
  },
  listItemText: {
    color: 'white',
    padding: 8,
  },
  //ios :反饋
  pressedItem: {},
})
