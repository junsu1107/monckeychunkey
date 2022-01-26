import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedButtonIndex: '',
    };
  }

  playSound = async (soundChunk) => {
    console.log(soundChunk);
    var soundLink =
      'https://curriculum.whitehatjr.com/Visual+Project+Asset/PRO_VD/Phones/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressedButtonIndex
            ? [styles.chunkButton, { backgroundColor: 'white' }]
            : [styles.chunkButton, { backgroundColor: 'red' }]
        }
        onPress={() => {
          this.playSound(this.props.soundChunk);
          this.setState({ pressedButtonIndex: this.props.buttonIndex });
        }}>
        <Text
          style={
            this.props.buttonIndex === this.state.pressedButtonIndex
              ? [styles.displayText, { color: 'black' }]
              : [styles.displayText, { color: 'black' }]
          }>
          {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },

  chunkButton: {
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12.5,
    margin: 5,
    backgroundColor: 'red',
  },
});
