import { View, Text,TextInput,StyleSheet ,Dimensions} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <Text>Email</Text>
     <TextInput style={style.input} placeholder='Email' />
    </View>
  )
};

const {width} = Dimensions.get('screen')
const style = StyleSheet.create ({
    input : {
        width :width-20,
    },
})