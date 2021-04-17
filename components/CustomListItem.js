import React from 'react'
import { ListItem, Avatar } from "react-native-elements";
import { db } from '../firebase';

const CustomListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages')
            .orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
                setChatMessages(snapshot.docs.map(doc => doc.data()))
            });

        return unsubscribe;
    }, []);

    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id}>
            <Avatar
                rounded
                source={{
                    uri: chatMessages?.[0]?.photoURL ||
                        "https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 800 }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem
