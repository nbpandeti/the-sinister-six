import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const {width,height}= Dimensions.get("window");

const styles = StyleSheet.create({
    titlepage: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
    },
    red: {
        color: 'red',
    },
    backgroundImage:{
        flex:1,
        resizeMode:'stretch', 
        minHeight:height
    },
    ImageIconStyle: {
        position:'absolute',
        margin: 5,
        left:35 ,
        height: '100%',
        width: 200,
        bottom:170,
        justifyContent: 'center',
    alignItems: 'center',
          resizeMode: 'stretch'
    },
    AppIconStyle: {
            padding: 10,
            margin: 5,
            height: 500,
            width: 1000,
            resizeMode: 'stretch',
            flexDirection: 'row'
    },
    WorldTitles: {
        maxWidth: (width*.65), 
        maxHeight: (height*.15),  
        position: 'absolute', 
        top:500, 
        right:100
    }
});