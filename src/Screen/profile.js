import { View, Text } from 'react-native'
import React from 'react'

export default function profile({route,navigation}) {
  
  const {userName,userEmail,userPassword} = route.params;
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>User Name :{userName} </Text>
      <Text>User Email :{userEmail} </Text>
      <Text>User Password :{userPassword} </Text>
    
    </View>
  )
}