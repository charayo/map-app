import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {MaterialIcons} from '@expo/vector-icons'


const MenuScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appLogoContainer}>
        <Text style={{color:'black'}}>App Logo or Title </Text>
      </View>
      <View style={styles.menuContainer}>
    <TouchableOpacity onPress={()=>navigation.navigate('Map')}>
    <View style={styles.iconContainer}>
        <MaterialIcons name="map" size={60} color="black" />
        <Text style={styles.text}>MAP</Text>
    </View>
    </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    appLogoContainer:{
        flex:1,
        marginTop:100,
        marginBottom:50
    },
    menuContainer:{
        flex:3,
        padding:100,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent:'space-evenly',
        justifyContent: 'flex-start',
    },
    iconContainer:{
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    text:{
        color: 'black',
        paddingTop: 5
    }
})