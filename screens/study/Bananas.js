import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            url: 'https://github.com/rockan007/photos/blob/master/react-native/Bananavarieties.jpg?raw=true'
        }
        return (<Image source={pic} style={{ width: 193, height: 110 }}></Image>)
    }
}