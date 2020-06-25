import * as React from 'react';
import { StyleSheet, View,Image, Text, SafeAreaView} from 'react-native';
import Colors from '../Config/Colors';
import Images from '../Config/Images';
import Carousel from 'react-native-snap-carousel';

export default class CardN extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            Images: Images.BACKG,
              title:"Item 1",
              text: "El prado",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index,Images}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Image style={{width:50, height:50, position: 'absolute'}}>{Images}</Image>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
        
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 50, paddingLeft:50,position: 'absolute', width: '100%', height: 350}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"stack"}
                  layoutCardOffset={`10`}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({ 
    
}); 
