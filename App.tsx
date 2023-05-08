import { View, Text,SafeAreaView ,ScrollView} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import SideCards from './components/SideCards'
import FancyCards from './components/FancyCards'



const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      {/* <Text>App</Text> */}
      <FlatCards/>
      <SideCards/>
      <FancyCards></FancyCards>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App
