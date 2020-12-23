import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import CardN2 from './cardN2';

const { width, height } = Dimensions.get('window')
let flatList

function infiniteScroll(datalist) {
    const numberOfData = datalist.length
    let scrollValue = 0, scrolled = 0

    setInterval(function () {
        scrolled++
        if (scrolled < numberOfData)
            scrollValue = scrollValue + width

        else {
            scrollValue = 0
            scrolled = 0
        }

        this.flatList.scrollToOffset({ animated: true, offset: scrollValue })
    }, 5000)
}
const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [datalist, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
        infiniteScroll(datalist)
    })

    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    ref={(flatList) => { this.flatList = flatList }}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment='center'
                    scrollEventThrottle={16}
                    decelerationRate={'normal'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CardN2 item={item}></CardN2>
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                ></FlatList>

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, background: '#595959', margin: 8, borderRadius: 5 }}
                            ></Animated.View>
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
});

export default Carousel;