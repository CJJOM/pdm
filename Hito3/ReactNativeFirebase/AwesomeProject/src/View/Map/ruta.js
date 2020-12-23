import React, {Component} from 'react';
import { Dimensions, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -17.376166;
const LONGITUDE = -66.158372;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyASo8V4ADKqXPT61LimwPy_c21KJsbqgcU';

class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        this.mapView = null;
    }

    onMapPress = (e) => {
        this.setState({
            coordinates: [
                ...this.state.coordinates,
                e.nativeEvent.coordinate,
            ],
        });
    }

    render(){
        const {params} = this.props.navigation.state;
        const latitudeDestino = params ? params.latitudeDestino : null;
        const longitudeDestino = params ? params.longitudeDestino : null;

    const origin = {latitude: -17.376166, longitude: -66.158372};
    const destination = {latitude: parseFloat(latitudeDestino), longitude: parseFloat(longitudeDestino)};

    const coordinates=[
        {
            latitude: -17.376166,
            longitude: -66.158372
        },
        {
            latitude: parseFloat(latitudeDestino),
            longitude: parseFloat(longitudeDestino),
        },
    ]

    return(
        <MapView
        initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
        >
        {coordinates.map((coordinate, index) =>
        <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(coordinates.length >= 2) && (
            <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            >
            </MapViewDirections>
        )}
    </MapView>
     );
    }
}

export default Example;