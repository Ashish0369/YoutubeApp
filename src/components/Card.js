import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import{MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Card = (props)=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
        >
        <View style={{marginBottom:10}}
        >
            <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
                width:"100%",
                height:200
            }}
            />
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
            <MaterialIcons name="account-circle" size={40} color="#212121"/>
                <View
                style={{
                    marginLeft:10
                }}
                >
                <Text style={{
                    fontSize:20,
                    width:Dimensions.get("screen").width -50
                }}
                ellipsizeMode="tail"
                numberOfLines={1}
                >{props.title}</Text>
                <Text>{props.channel}</Text>
                </View>
                </View>
        </View>
        </TouchableOpacity>
    )

}

export default Card