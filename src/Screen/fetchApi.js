import { View, Text,StyleSheet,Image,ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
// inport Url
import {albumPhotosUrl} from './data'
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

export default function fetchApi() {

    const [postData,setPostData] = useState([]);
   useEffect(() =>{
    FetchApiData();  
   },[]);

   const FetchApiData = async () => {
       try {
           const response = await axios.get(albumPhotosUrl);
          
           setPostData(response.data)
       } catch (er) {
           console.log(er);
       }
   };
  return (
    <View style={style.container}>
        <ScrollView>
       { postData.map((list,index)=> {
           return (
             
                     <View style={style.cardContainer}key={index.id}>
                        <Image source={{uri:'https://via.placeholder.com/600/92c952'}} style={style.cardImage} />
                        
                        <Text style={{textAlign:'center'}}>
                        accusamus beatae ad facilis cum similique qui sunt
                        </Text>
                     </View> 
           
           )
       })};
        </ScrollView>
    </View>
  )
}

const style = StyleSheet.create ({
    container : {
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
        
    },
    cardContainer : {

    },
    cardImage : {
        height:300,
        width:300,
        
        
    },
})

const obj = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
};