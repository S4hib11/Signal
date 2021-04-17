import React from 'react'
import { View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from "react-native-elements";
import { auth } from '../firebase';
import styles from "../styles/styles"

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [imgUrl, setImgUrl] = React.useState('');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login"
        })
    }, [navigation]);

    const Register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imgUrl || "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                })
            })
            .catch((error) => alert(error.message))
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.registerContainer}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create a Signal Account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Fullname" type="text" value={name} onChangeText={(text) => setName(text)} autoFocus />
                <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" type="password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />
                <Input placeholder="Profile Picture URL" type="text" value={imgUrl} onChangeText={(text) => setImgUrl(text)} onSubmitEditing={Register} />
            </View>
            <Button raised containerStyle={styles.button} onPress={Register} title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
