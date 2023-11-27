import { View, Text } from 'react-native'
import React from 'react'
import { useAppContext } from '../context/AppContext'


const Message = () => {
  console.log("Message rendered")
  var randomColor = `#${(Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6,'0'))}`;

  const { contextMessage } = useAppContext()

  return (
    <View>
      <Text style={{color: randomColor, fontSize: 24, fontWeight: 'bold'}}>{contextMessage}</Text>
    </View>
  )
}
export default Message