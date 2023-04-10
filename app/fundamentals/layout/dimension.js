import React from 'react';
import {Dimensions, View} from "react-native";

const Dimension = () => {
    console.log(Dimensions.get('screen'))
    return (
        <View
            style={{
                backgroundColor: 'Green',
                width: '50%',
                height: 70
            }}
        >

        </View>
    );
};

export default Dimension;