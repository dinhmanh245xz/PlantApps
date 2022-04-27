import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
    function moveScreen (ScreenName){
        navigation.navigate(ScreenName)

    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <View>
       <TouchableOpacity
       onPress={()=> moveScreen("Screen1")}
       >
           <Text>Screen 1</Text>
       </TouchableOpacity>
       <TouchableOpacity
        onPress={()=> moveScreen("Screen2")}
       >
           <Text>Screen 2</Text>
       </TouchableOpacity>
   </View>
  </View>
  )
}