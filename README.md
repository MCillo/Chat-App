# Chat App
This is a Chat App that was built using React Native, Expo, and Google Firestore Database. This app helped me learn and demonstrate my knowledge of Javascript mobile development. 
<p align='center'>
<img src='assets/Chat-App Homescreen.png' width='300' height='600'>

## Key Features
 1. A page where users can enter their name and choose a background color for the chat screen before joining the chat.
 2. A page displaying the conversation, as well as an input field and submit button
 3. The chat will provide users with two additional communication features: sending images and location data.
 4. Data gets stored online and offline

### Technical Requirements
1. The app will be written in React Native
2. The app will be developed using Expo
3. The app will be styled according to the given screen design.
4. Chat conversations will be stored in Google Firestore Database
5. The app will authenticate users anonymously via Google Firebase authentication.
6. Chat conversations will be stored locally.
7. The app will let users pick and send images from the phone’s image library.
8. The app will let users take pictures with the device’s camera app, and send them.
9. The app will store images in Firebase Cloud Storage.
10. The app will be able to read the user’s location data.
11. Location data will be sent via the chat in a map view.
12. The chat interface and functionality will be created using the Gifted Chat library.
13. The app’s codebase will contain comments.

### Technology Used
- React Native
  - React Native Gifted Chat Library
- Expo
- Android Studio 
- Google Firebase - for authentication and data storage
  - Google Firestore - for cloud-based database 

### Setting up the application environment
- Installing the Expo supported version of Node
  - `nvm install 16.19.0`
  - `nvm use 16.19.0`
-  Install Expo CLI
   -  `npm install -g - expo-cli`
- Install the Expo Go app from your Devices App store
- Create an Expo Account
  - https://expo.dev/signup
-  Clone this Chat-App Repository
   - https://github.com/MCillo/Chat-App.git
- Download Android Studio - https://developer.android.com/studio
  - Setup Android Emulator


### Setting up Google Firebase
- Sign up for a Google Firebase account https://firebase.google.com
- Add Firebase Connection to the project directory
  - `npm install firebase`
- Copy the Firebase SDK Setup and Configuration code from Project Overview -> Settings 
- Allow read and write access to the Database 
  - In Firestore Databse -> Rules
    - Change `allow read, write: if false;`
    - to `allow read, write: if true;`
    - Press Publish
  - In Storage -> Rules
    - Change `allow read, write: if false;`
    - to `allow read, write: if true;`
    - Press Publish

### Install Necessary Packages
```
npm install --save @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
npm install react-native-gifted-chat --save
npm install firebase@10.3.1 --save
expo install @react-native-async-storage/async-storage
expo install @react-native-community/netinfo
expo install expo-image-picker
expo install expo-location
expo install react-native-maps
```

### In Closing
I would like to thank my peers for their help with this project. If it were not for them helping me find and fix my code errors I would have a lot less hair and a lot more stress. I only hope that I can take what I've learned and maybe help someone else someday.

