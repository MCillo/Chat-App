import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity } from "react-native";

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/BackgroundImage.png')} style={styles.backgroundImage}>
        <View style={{ flex: 1 }}>
          <View style={styles.mainContainer}>
            <Text style={styles.appTitle}>Welcome to Chat App!</Text>

            <View style={styles.controlsContainer}>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder='Your Name?'
              />

              <Text style={styles.chooseColorText} >Choose Background Color:</Text>
              <View style={styles.chooseColorContainer}>
                {["#090C08", "#474056", "#8A95A5", "#B9C6AE"].map(
                  (color, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.colorChoice,
                        { backgroundColor: color },
                        selectedColor === color && styles.selectedColor,
                      ]}
                      onPress={() => setSelectedColor(color)}
                    />
                  )
                )}
              </View>

              <TouchableOpacity
                style={styles.chatButton}
                title='Start Chatting'
                onPress={() => navigation.navigate('ChatScreen', { name: name, backgroundColor: selectedColor })}
              >
                <Text style={styles.chatButtonText}>Start Chatting</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '44%'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appTitle: {
    width: '88%',
    fontSize: 45,
    fontWeight: 600,
    color: '#ffffff',
    alignItems: 'center'
  },
  controlsContainer: {
    alignItems: 'center',
    width: '88%',
    padding: 5,
    backgroundColor: '#ffffff'
  },
  textInput: {
    textAlign: 'center',
    width: '88%',
    height: 50,
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 300,
    color: '#757083',
    opacity: 5
  },
  chooseColorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  chooseColorText: {
    fontSize: 16,
    fontWeight: 300,
    color: '#757083',
    opacity: 100
  },
  colorChoice: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  chatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '88%',
    height: 50,
    backgroundColor: '#757083',
    borderWidth: 1,
    padding: 5
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#ffffff',
  }


});

export default StartScreen;
