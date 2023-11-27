import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAppContext } from '../context/AppContext'


const ContextCounter = () => {
  const { contextCount, setContextCount } = useAppContext()

  console.log("ContextCounter Rendered")
  return (
    <View>
      <Text>Context Counter value: {contextCount}</Text>
        <Button onPress={()=>setContextCount(contextCount + 1)} title="Press me" /> 
    </View>
  )
}

export default ContextCounter