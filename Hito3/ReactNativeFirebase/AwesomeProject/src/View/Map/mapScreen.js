import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, Image} from 'react-native';
import MapView, { Marker, ProviderPropType, Callout, navigation, navigate } from 'react-native-maps';
import Ruta from '../Map/ruta';

const { width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -17.376166;
const LONGITUDE = -66.158372;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapScreen extends React.Component {

constructor(props){
  super(props);

  this.state = {
    region:{
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    },
    markers1: [
    {
      title: 'My ubication',
      coordinates: {
        latitude: -17.376166,
        longitude: -66.158372
      },
    },
    {
      title: 'Museo Convento Santa Teresa',
      coordinates: {
        latitude: -17.389902,
        longitude: -66.158073
      },
    },
    {
      title: 'Cristo de la concordia',
      coordinates: {
        latitude: -17.384375,
        longitude: -66.134986
      },
    },
    {
      title: 'Teleférico',
      coordinates: {
        latitude: -17.384908,
        longitude: -66.135648
      },
    },
    {
      title: 'Casona de Mayorazgo',
      coordinates: {
        latitude: -17.365292,
        longitude: -66.174670
      },
    },
    {
      title: 'Plaza de las banderas',
      coordinates: {
        latitude: -17.382326,
        longitude: -66.159798
      },
    },
    {
      title: 'Paseo El Prado',
      coordinates: {
        latitude: -17.384803,
        longitude: -66.158071
      },
    },
    ],
    markers2: [
    {
      title: 'KANSAS GRILL & BAR',
      coordinates: {
        latitude: -17.375870,
        longitude: -66.157903
      }
    },
    {
      title: 'Chickens Kingdom',
      coordinates: {
        latitude: -17.378761,
        longitude: -66.159263
      }
    },
    {
      title: 'Las Islas',
      coordinates: {
        latitude: -17.367023,
        longitude: -66.157333
      }
    },
    {
      title: 'Choko Burguer',
      coordinates: {
        latitude: -17.367055,
        longitude: -66.157486
      }
    },
    {
      title: 'La casa de la Jiba',
      coordinates: {
        latitude: -17.365479,
        longitude: -66.159503
      }
    },
  ],
  markers3: [
    {
    title: 'Hotel VIAGGIATORE',
      coordinates: {
        latitude: -17.377996,
        longitude: -66.155596
      }
    },
    {
      title: 'Hotel Aranjuez',
        coordinates: {
          latitude: -17.373901,
          longitude: -66.154380
        }
    },
    {
      title: 'Selenza Apart Hotel',
        coordinates: {
          latitude: -17.375153,
          longitude: -66.156587
        }
    },
    {
      title: 'Gran Hotel Cochabamba',
        coordinates: {
          latitude: -17.378060,
          longitude: -66.152189
        }
    },
    {
      title: 'Hotel Boutique Casamanga',
        coordinates: {
          latitude: -17.376732,
          longitude: -66.163374
        }
    },
    {
      title: 'Hotel Camino Plaza',
        coordinates: {
          latitude: -17.368497,
          longitude: -66.163433
        }
    },
  ],
  }
}



  render(){
    return(
      <View style={styles.container}>
        <MapView
        provider = {this.props.provider}
        style={styles.map}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        initialRegion={this.state.region}
        showsUserLocation={true}
        followsUserLocation={true}
        >
          {this.state.markers1.map(marker =>(
            <Marker
            image={require('../../../assets/map-pin.png')}
            coordinate={marker.coordinates}
            //title={marker.title}
            // onPress={() => 
            // this.props.navigation.navigate('Ruta', {
            //     latitudeDestino: parseFloat(marker.coordinates.latitude),
            //     longitudeDestino: parseFloat(marker.coordinates.longitude),
            // })
            // }
            > 
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>{marker.title}</Text>
                
                <Image
                  style={styles.image}
                  source={require('../../../assets/logo.png')}></Image>
              </View>
              <View style={styles.arrowBorder}></View>
              <View style={styles.arrow}></View>
            </View>
          </Callout>              
            </Marker>
          ))}

          {this.state.markers2.map(marker =>(
            <Marker
            image={require('../../../assets/pizza.png')}
            coordinate={marker.coordinates}
            //title={marker.title}
            // onPress={() => 
            // this.props.navigation.navigate('Ruta', {
            //     latitudeDestino: parseFloat(marker.coordinates.latitude),
            //     longitudeDestino: parseFloat(marker.coordinates.longitude),
            // })
            // }
            > 
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>{marker.title}</Text>
                
                <Image
                  style={styles.image}
                  source={require('../../../assets/KANSAS.jpg')}></Image>
              </View>
              <View style={styles.arrowBorder}></View>
              <View style={styles.arrow}></View>
            </View>
          </Callout>              
            </Marker>
          ))}

          {this.state.markers3.map(marker =>(
            <Marker
            image={require('../../../assets/bed.png')}
            coordinate={marker.coordinates}
            //title={marker.title}
            // onPress={() => 
            // this.props.navigation.navigate('Ruta', {
            //     latitudeDestino: parseFloat(marker.coordinates.latitude),
            //     longitudeDestino: parseFloat(marker.coordinates.longitude),
            // })
            // }
            > 
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>{marker.title}</Text>
                
                <Image
                  style={styles.image}
                  source={require('../../../assets/logo.png')}></Image>
              </View>
              <View style={styles.arrowBorder}></View>
              <View style={styles.arrow}></View>
            </View>
          </Callout>              
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

MapScreen.propTypes = {
  provider: ProviderPropType,
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40
  },
  map: {
    height: '100%',
    width: '100%'
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  //Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  //character name
  name: {
    fontSize: 12,
    marginBottom: 5,
  },
  // character image
  image: {
    width: 120,
    height: 80,
  },
});

export default MapScreen;