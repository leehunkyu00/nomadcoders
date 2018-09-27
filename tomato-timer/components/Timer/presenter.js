import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button";
import { black } from 'ansi-colors';

class Timer extends Component {

    componentWithReceiveProps(nextProps) {
        const currentProps = this.props;

        console.log(`the current props are : ${currentProps} and the new ones are ${nextProps}`);

    }
    render() {
        console.log(this.props);
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer,
            addSecond
        } = this.props;

        return(
            <View style={styles.container}> 
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}> 
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName="play-circle" onPress={startTimer} />
                    )}
                    {isPlaying && (
                    <Button iconName="stop-circle" onPress={restartTimer}/>
                    )}
                </View>
            </View>
        )
    }
}
// https://expo.github.io/vector-icons

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:"#CE0B24"
    },
    upper: {
        flex:2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default Timer;