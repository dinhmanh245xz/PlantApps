import React, { useState } from 'react'
import { View, Text,TextInput,StyleSheet ,Dimensions,TouchableOpacity} from 'react-native'


export default function Login({navigation}) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const Submit=() => {
    navigation.navigate('profile', {
      userName : name,
      userEmail :email,
      userPassword : password,
    });
  };
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View>
      <Text style={{textAlign:'center',alignItems:'center'}}>Login</Text>
     <TextInput style={style.input} placeholder='user' placeholderTextColor={'#ccc'}
      value={name} onChangeText ={(text) => setName(text)} />
    
     <TextInput style={style.input} placeholder='Emal' placeholderTextColor={'#ccc'}
     value={email} onChangeText={(text) => setEmail(text)} />
     
     <TextInput style={style.input} placeholder='Password' placeholderTextColor={'#ccc'}
     value={password} onChangeText={(text) => setPassword(text)} />

     <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'lightblue'}}
     onPress={() => Submit()}>
       <Text>Submit</Text>
     </TouchableOpacity>
      </View>
    </View>
  )
};

const {width} = Dimensions.get('screen')
const style = StyleSheet.create ({
    input : {
        width :width-20,
        borderWidth:1,
        marginTop:10,
        padding:10,
        borderRadius:20,
    },
})