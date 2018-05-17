import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo';
import DigitalClock from './DigitalClock';

export default class App extends React.Component {
  state = {
    minute: 0,
    second: 0,
    mili: 0,
  };

  _handleStart = () => {
    this.setState((prevState) => {
      if (prevState.mili < 1000) {
        return {mili: prevState.mili + 100};
      } else if (prevState.mili >= 1000) {
        return {mili: prevState.mili - 1000, second: prevState.second + 1};
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Stopwatch</Text>
        <View>
          <DigitalClock
            handleStart={this._handleStart}
            minute={this.state.minute}
            second={this.state.second}
            mili={this.state.mili}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  timerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 56,
  },
  containerClock: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTap: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
