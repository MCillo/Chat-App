import { useEffect, useState } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, Alert } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { collection, getDocs, addDoc, onSnapshot, query, where } from "firebase/firestore";
import { orderBy } from "lodash";

const ChatScreen = ({ route, navigation, db }) => {

  const { name, backgroundColor, userID } = route.params;
  const [messages, setMessages] = useState([]);



  useEffect(() => {
    navigation.setOptions({ title: name })

    const getMessagesQuery = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsubMessages = onSnapshot
    setMessages(newMessages)
  }
    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello " + name,
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    //   },
    //   {
    //     _id: 2,
    //     text: 'This is a system message!',
    //     createdAt: new Date(),
    //     system: true,
    //   },
    // ]);
  }, []);

const onSend = (newMessages) => {
  setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
}

const renderBubble = (props) => {
  return <Bubble
    {...props}
    wrapperStyle={{
      right: {
        backgroundColor: '#000'
      },
      left: {
        backgroundColor: '#fff'
      }
    }}
  />
}

return (
  <View style={{ flex: 1, backgroundColor: backgroundColor }}>
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
      }}
    />
    {Platform.OS === 'android' ? <KeyboardAvoidingView behavior='height' /> : null}
  </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ChatScreen;
