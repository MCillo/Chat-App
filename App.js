import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importing screens
import StartScreen from './components/Start';
import ChatScreen from './components/Chat';

// create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen
          name='Start'
          component={StartScreen}
        />
        <Stack.Screen
          name='ChatScreen'
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;