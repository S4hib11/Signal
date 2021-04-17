import React from 'react'
import { KeyboardAvoidingView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image } from "react-native-elements";
import { auth } from '../firebase';
import styles from "../styles/styles"

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home');
            }
        });

        return unsubscribe;
    }, []);

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
            }}
                style={{ width: 200, height: 200 }} />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} autoFocus />
                <Input placeholder="Password" type="password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry onSubmitEditing={signIn} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} title="Register" type="outline" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
