import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create the navigator
const Stack = createNativeStackNavigator();

// initializing the app and importing firestore for storing the chat messages
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// importing screens
import StartScreen from './components/Start';
import ChatScreen from './components/Chat';

// logbox for ignoring warning alerts
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from']);


const App = () => {
  // Chat-App firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtUJG-F_rSjX871Xkpni5Kd7dR5Udggqs",
    authDomain: "chatapp-3d111.firebaseapp.com",
    projectId: "chatapp-3d111",
    storageBucket: "chatapp-3d111.appspot.com",
    messagingSenderId: "166674648514",
    appId: "1:166674648514:web:d4ab1aa37cdecfda541a5b",
    measurementId: "G-Y3P3V592J2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen
          name='Start'
          component={StartScreen}
        />
        <Stack.Screen
          name='ChatScreen'
        >
          {props => <ChatScreen db={db}{...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;