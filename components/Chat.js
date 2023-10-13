import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const ChatScreen = ({ route, navigation }) => {

  const { name, backgroundColor } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>Hello, This is the Chat Screen!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 400
  }
});

export default ChatScreen;
