import React from "react";
import {
    KeyboardAvoidingView,
    View,
    Text,
    TextInput
} from 'react-native';
import { styles } from "./styles";
export const Chat: React.FC = () => {

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled keyboardVerticalOffset={80}>
            <View style={styles.inner}>
                <View style={styles.messagesContainer}>
                    <Text>Chat</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

