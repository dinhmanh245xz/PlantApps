import { View, Text ,SafeAreaView,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Iconic from 'react-native-vector-icons/Ionicons'
import React from 'react'
import COLORS from '../../conts/colors';


const DetailsScreen = ({navigation,route}) => {
  const plant = route.params;
 
  return <SafeAreaView
   style={{flex:1,
    backgroundColor:COLORS.white}}
  >
        <View style={style.header}>
            <Iconic name='arrow-back-outline' size={28} onPress={()=>navigation.goBack()} />
            <Iconic name='cart-outline' size={30}/>
        </View>
        <View style={style.ImageContainer}>
          <Image source={plant.img} style={{resizeMode:'contain',flex:1}}/>
        </View>
        <View style={style.DetailtContent}>
            <View style={{
              marginLeft:20,
              flexDirection:'row',
              alignItems:'flex-end',}}>
                <View style={style.Line} /> 
                <Text style={{fontSize:18}}>Best Choice</Text> 
            </View>
            <View style={{marginLeft:20,
              marginTop:20,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              }}>
                <Text style={{fontSize:16}}>{plant.name}</Text>
                <View style={style.priceTag}>
                  <Text style={{fontWeight:'300',color:COLORS.white,fontSize:16}}>${plant.price}</Text>
                </View>
              </View>
              <View style={{paddingHorizontal:20,marginTop:10}}>
                <Text style={{fontSize:20,fontWeight:'300'}}>About</Text>
                <Text style={{marginTop:20, fontSize:15,fontWeight:'300',color:'grey'}}>{plant.about}</Text>
                <View style={{marginTop:20,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  }}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={style.borderBtn}>
                        <Text style={style.borderBtnText}>-</Text>
                      </View>
                      <Text style={{marginHorizontal:10,fontSize:20}}>1</Text>
                      <View style={style.borderBtn}>
                        <Text style={style.borderBtnText}>+</Text>
                      </View>
                    </View>
                    <View style={style.Buybtn}>
                      <TouchableOpacity>
                        <Text style={{fontSize:18,color:COLORS.white}}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </View>
        </View>
       </SafeAreaView>;
};

const style = StyleSheet.create ({
  header : {
    paddingHorizontal:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  ImageContainer : {
      flex:0.45,
      marginTop:10,
      justifyContent:'center',
      alignItems:'center',
   },
   DetailtContent : {
    flex:0.55,
    backgroundColor:COLORS.light,
    marginHorizontal:7,
    marginBottom:7,
    borderRadius:20,
    marginTop:30,
    paddingTop:30,
   },
   Line : {
    width:25,
    height:2,
    backgroundColor:COLORS.dark,
    marginBottom:5,
    marginRight:4,
   },
   priceTag : {
    backgroundColor:COLORS.green,
    width:80,
    height:40,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    justifyContent:'center',
    alignItems:'center',
   },
   borderBtn : {
     borderColor:'grey',
     borderWidth:1,
     borderRadius:5,
     width:40,
     height:30,
     justifyContent:'center',
     alignItems:'center',

   },
   borderBtnText : {
    fontSize:20,
    fontWeight:"400",
  },
  Buybtn : {
    width:150,
    height:50,
    backgroundColor:COLORS.green,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
  },
});
export default  DetailsScreen;
