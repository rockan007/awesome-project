import React, {
    Component
} from 'react';
import {
    Text, TextInput,
    View,
} from 'react-native';
import { style } from '../styles/style'
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { IsShowingText: true }
        setInterval(() => {
            this.setState(previousState => {
                return { IsShowingText: !previousState.IsShowingText }
            })
        }, 1000)
    }
    render() {
        let display = this.state.IsShowingText ? this.props.text : '';
        return (<Text style={[style.bigBlue, style.red]}>{display}</Text>
        )
    }
}
export default class StudyScreen extends Component {
    static navigationOptions = {
        title: '学习'
    }
    constructor(props) {
        super(props);
        this.state = { text: '' }
    }
    render() {
        return <View style={{ padding: 10 }}>
            <TextInput style={{ height: 40 }}
                placeholder="输入要翻译的文字"
                onChangeText={(text) => { this.setState({ text }) }} />
            <Text>{this.state.text}</Text>
        </View>
    }
}