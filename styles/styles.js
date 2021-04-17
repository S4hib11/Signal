import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addChatContainer: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    },
    chat: {
        color: "white",
        marginLeft: 10,
        fontWeight: "700"
    },
    safeView: {
        flex: 1,
        backgroundColor: "white"
    },
    chatContainer: {
        flex: 1
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15
    },
    input: {
        flex: 1,
        bottom: 0,
        height: 40,
        marginRight: 15,
        borderRadius: 30,
        color: "grey",
        padding: 10,
        backgroundColor: "#ECECEC",
    },
    reciever: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: "flex-end",
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: "80%",
        position: "relative"
    },
    recieverText: {
        color: "black",
        fontWeight: 500,
        marginLeft: 10,
    },
    sender: {
        padding: 15,
        backgroundColor: "#2B68E6",
        alignSelf: "flex-start",
        borderRadius: 20,
        margin: 15,
        marginBottom: 20,
        maxWidth: "80%",
        position: "relative"
    },
    senderText: {
        color: "white",
        fontWeight: 500,
        marginLeft: 10,
        marginBottom: 15
    },
    senderName: {
        left: 10,
        paddingRight: 10,
        fontSize: 10,
        color: "white"
    },
    scroll: {
        height: "100%"
    },
    loginContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    },
    registerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
});

export default styles;