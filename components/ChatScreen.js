import React from 'react'
import { TouchableWithoutFeedback, View, TouchableOpacity, Keyboard, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"
import { auth, db } from '../firebase'
import firebase from 'firebase/app'
import styles from "../styles/styles"

const ChatScreen = ({ navigation, route }) => {
    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState([]);

    const sendMessage = () => {
        Keyboard.dismiss();

        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        })

        setInput('');
    };

    React.useLayoutEffect(() => {
        const unsubscribe = db
            .collection('chats')
            .doc(route.params.id)
            .collection('messages').orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => setMessages(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))))

        return unsubscribe;
    }, [route])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chats",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <Avatar rounded
                        source={{
                            uri: messages[0]?.data.photoURL
                        }} />
                    <Text h5 style={styles.chat}>{route.params.chatName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigation.goBack} activeOpacity={0.5}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesome name="video-camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [navigation, messages]);

    return (
        <View>
            <SafeAreaView style={styles.safeView}>
                <StatusBar style="light"></StatusBar>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.chatContainer}
                    keyboardVerticalOffset={90}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <>
                            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
                                {messages.map(({ id, data }) => (
                                    data.email === auth.currentUser.email ? (
                                        <View key={id} style={styles.reciever}>
                                            <Avatar position="absolute" bottom={-15} right={-5} rounded size={30} source={{ uri: data.photoURL }}
                                                //WEB
                                                containerStyle={{
                                                    position: "absolute", bottom: -15, right: -5
                                                }}
                                            />
                                            <Text style={styles.recieverText}>{data.message}</Text>
                                        </View>
                                    ) : (
                                        <View key={id} style={styles.sender}>
                                            <Avatar position="absolute" bottom={-15} left={-5} rounded size={30} source={{ uri: data.photoURL }}
                                                //WEB
                                                containerStyle={{
                                                    position: "absolute", bottom: -15, left: -5
                                                }}
                                            />
                                            <Text style={styles.senderName}>{data.displayName}</Text>
                                            <Text style={styles.senderText}>{data.message}</Text>
                                        </View>
                                    )
                                ))}
                            </ScrollView>
                            <View style={styles.footer}>
                                <TextInput value={input} onSubmitEditing={sendMessage} onChangeText={(text) => setInput(text)} placeholder="Signal Message" style={styles.input} />
                                <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                                    <Ionicons name="send" size={24} color="#2B68E6" />
                                </TouchableOpacity>
                            </View>
                        </>
                    </TouchableWithoutFeedback>

                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default ChatScreen
