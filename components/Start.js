import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity, Alert } from "react-native";

// importing these for ability to sign in - in this case anonymously
import { getAuth, signInAnonymously } from 'firebase/auth';

const colors = ['rgb(9 11 8)', 'rgb(78, 93, 104)', 'rgb(153, 163, 177)', 'rgb(185 199 174)'];
const Start = ({ navigation }) => {
  // for getting user authorization
  const auth = getAuth();

  // for setting the users name and for setting user selected background color on Chat screen
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate('Chat', { userID: result.user.uid, name, color: selectedColor });
        Alert.alert('Signed in Successfully!');
      })
      .catch((error) => {
        Alert.alert('Unable to sign in at this time, please try again later!', error.message);
      });
  };

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
              <View style={styles.chooseColorContainer}>
                <Text style={styles.chooseColorText} >Choose Background Color:</Text>

                <View style={styles.colorChoicesContainer}>
                  {colors.map((color) => {
                    const fullColorButton = { ...styles.colorChoice, backgroundColor: color };
                    const borderOnly = {
                      ...styles.colorChoice, borderColor: color, borderWidth: 5
                    };

                    return color == selectedColor ? (
                      <TouchableOpacity
                        key={color}
                        onPress={() => {
                          setSelectedColor(color);
                        }}
                        style={fullColorButton}></TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        key={color}
                        onPress={() => {
                          setSelectedColor(color);
                        }}
                        style={borderOnly}></TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              <TouchableOpacity
                style={styles.chatButton}
                title='Start Chatting'
                onPress={signInUser}
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
    // fontWeight: 600,
    color: '#ffffff',
    alignItems: 'center'
  },
  controlsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '88%',
    height: '44%',
    padding: 5,
    backgroundColor: '#ffffff'
  },
  textInput: {
    textAlign: 'left',
    width: '88%',
    height: 50,
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    // fontWeight: 300,
    color: '#757083',
    opacity: 5
  },
  chooseColorContainer: {
    width: '88%',
    alignItems: 'flex-start'
  },
  chooseColorText: {
    // alignSelf: 'baseline',
    width: '88%',
    fontSize: 16,
    // fontWeight: 300,
    color: '#757083',
    opacity: 100
  },
  colorChoicesContainer: {
    // alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
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
    // fontWeight: 600,
    color: '#ffffff',
  }


});

export default Start;