import { View, Text } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'

export default function profile() {
  
  const route = useRoute();
  console.log(route);

  const {userName,userEmail,userPassword} = route.params;
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>User Name :{userName} </Text>
      <Text>User Email :{userEmail} </Text>
      <Text>User Password :{userPassword} </Text>
    
    </View>
  )
}