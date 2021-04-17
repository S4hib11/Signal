import React from 'react'
import styles from "../styles/styles"
import { View } from 'react-native'
import { db } from '../firebase'
import { Input, Icon, Button } from 'react-native-elements'

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = React.useState('');

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack();
        }).catch((error) => alert(error));
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "New Chat",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerBackButton: "Chats",
        });
    }, []);

    return (
        <View style={styles.addChatContainer}>
            <Input onSubmitEditing={createChat} placeholder="Enter a chat name" value={input} onChangeText={(text) => setInput(text)} leftIcon={
                <Icon name="wechat" type="antdesign" size={24} color="black" />
            } />
            <Button disabled={!input} onPress={createChat} title="Create new chat" />
        </View>
    )
}

export default AddChatScreen
