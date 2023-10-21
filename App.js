import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// importing screens
import Start from './components/Start';
import Chat from './components/Chat';

import { useNetInfo } from '@react-native-community/netinfo'
import { useEffect } from 'react';

// initializing the app and importing firestore for storing the chat messages
import { getFirestore, disableNetwork, enableNetwork } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create the navigator
const Stack = createNativeStackNavigator();

// logbox for ignoring warning alerts
import { LogBox, Alert } from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from', 'You are initializing Firebase Auth for']);

const App = () => {

  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection Lost!');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  // Chat-App firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtUJG-F_rSjX871Xkpni5Kd7dR5Udggqs",
    authDomain: "chatapp-3d111.firebaseapp.com",
    projectId: "chatapp-3d111",
    storageBucket: "chatapp-3d111.appspot.com",
    messagingSenderId: "166674648514",
    appId: "1:166674648514:web:d4ab1aa37cdecfda541a5b",
    // measurementId: "G-Y3P3V592J2"
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
          component={Start}
        />
        <Stack.Screen
          name='Chat'
        >
          {props => <Chat isConnected={connectionStatus.isConnected} db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;