import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import abqart from './../../assets/AbqPublicArt1.json'
import MapView, {Marker} from 'react-native-maps'

const MapScreen = ({navigation}) => {
    const data = abqart.features;
    const initRegion = {
        latitude: 35.0824099,
        longitude: -106.6764794,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
  return (
    <SafeAreaView>
      <MapView style={styles.mapContainer} initialRegion={initRegion}>
        {
            data.map((item, index)=>{
                const id = item.attributes['OBJECTID'];
                const title = item.attributes['TITLE'];
                const artist = item.attributes['ARTIST'];
                const lat = item.attributes['Y'];
                const lon = item.attributes['X'];

                if(lat != null || lon != null){
                    return(
                        <Marker key={id} coordinate={{latitude:lat, longitude:lon}} title={title} description={artist} onCalloutPress={()=>navigation.push('MapDetail', {item: item})} />
                    )
                }
            })
        }
      </MapView>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    mapContainer:{
        width: "100%",
        height: "100%"
    }
})