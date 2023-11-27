import { useState } from 'react'
import { Text, Button } from 'react-native'
import { count } from '../signals'
// import { useSignal } from '@preact/signals-react'
// import { useAppContext } from '../context/AppContext'
// import { signal } from '@preact/signals-react'

// const Counter = ({count}) => {
const SignalCounter_1 = () => {
  // const count = useSignal(0)
  // const { contextCount, setContextCount } = useAppContext()
  // const [ localCount, setLocalCount ] = useState(0)

  console.log("SignalCounter_1 rendered")

  return (
    <>
    <Text>Signal Counter_1 value: {count}</Text>
    <Button
      onPress={() => {
        count.value = count.value + 1;
        // notice that you immidietly have access to updated value, no need for useEffect
        console.log("Button pressed, current value:", count.value);
      }}
      title="Press me"
      />
    </>
  )
}

export default SignalCounter_1;