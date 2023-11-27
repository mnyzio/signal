import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'


const StateCounter = () => {
  const [stateCount, setStateCount ] = useState(0)

  console.log("StateCounter Rendered")
  return (
    <View>
      <Text>State Counter value: {stateCount}</Text>
        <Button onPress={()=>setStateCount(stateCount + 1)} title="Press me" /> 
    </View>
  )
}

export default StateCounter