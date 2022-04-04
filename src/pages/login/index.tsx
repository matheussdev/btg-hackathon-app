import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert,
    Keyboard,
    Platform,
    Modal,
    ActivityIndicator
} from 'react-native';
import Collapsible from "react-native-collapsible";
import { TextInputMask } from "react-native-masked-text";
import { Button } from "../../components/button";
import theme from "../../theme";

import { RadioButton } from "../../components/RadioButton";
import api from "../../services/api";


const organizations = [
    {
        organizationName: "Instituição Financeira 01",
        organizationId: "3fda1ef5-4b72-4557-bcbf-296780ba2c1f"
    },
    {
        organizationName: "Instituição Financeira 02",
        organizationId: "459b64e6-be78-4777-8b0b-f3b14e61ef31"
    },
    {
        organizationName: "Instituição Financeira 03",
        organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe"
    },
    {
        organizationName: "Instituição Financeira 04",
        organizationId: "a81729b5-ec71-4552-b4b1-26931c130154"
    },
    {
        organizationName: "Instituição Financeira 05",
        organizationId: "63d929c5-2a09-479e-806c-8cd073a029ab"
    },
    {
        organizationName: "Instituição Financeira 06",
        organizationId: "e7fc1280-4dd3-4977-bc24-c08ffea8baf5"
    },
    {
        organizationName: "Instituição Financeira 07",
        organizationId: "f4851ca0-7163-4d71-97a7-df1e999c047f"
    },
    {
        organizationName: "Instituição Financeira 08",
        organizationId: "3506654e-b794-4818-b2b1-12f2efb03d39"
    },
    {
        organizationName: "Instituição Financeira 09",
        organizationId: "d3d2b0d5-903a-4f9f-b793-c139490d5ca7"
    },
    {
        organizationName: "Instituição Financeira 10",
        organizationId: "ac2ab4c1-dc48-4958-b964-e46938817aaa"
    },
]

export const Login: React.FC = ({ navigation }) => {
    const [cpf, setCpf] = useState("")
    const [bank, setBank] = useState()
    const [isLoading, setIsLoading] = useState(false)
    async function handleLoading() {
        setIsLoading(true);
        await api.get(`/api/calculateCustomerPortfolio/${cpf}/${bank}`)
            .then((response) => {
                    navigation.navigate('InvestmentTips', { bank, cpf, data:response.data.portfolio })
            }).catch((error) => {
                // Your error is here!
                Alert.alert("Você não possui conta na instituição financeira selecionada.\n Verifique se seus dados estão preenchidos corretamente.")
                console.log(error)
            }).finally(()=>{
                setIsLoading(false)
            });

        // setTimeout(() => {
        //     navigation.navigate('InvestmentTips', { bank, cpf })
        // }
        //     , 5000)

    }
    return (
        <TouchableHighlight onPress={() => Platform.OS !== 'web' && Keyboard.dismiss()} style={styles.container} underlayColor={""}>
            <>
                <View style={styles.containerText}>
                    <Text style={styles.textInstructions}>Vamos utilizar seus dados do open finance{"\n"} para sugerir as melhores opções de investimento{"\n"} para o seu perfil</Text>
                </View>
                <View style={styles.card}>
                    <>
                        <Text style={styles.label}>Primeiro digite seu CPF:</Text>
                        <TextInputMask
                            placeholder="000.000.000-00"
                            type={'cpf'}
                            value={cpf}
                            onChangeText={text => {
                                if (text.length === 14) {
                                    Keyboard.dismiss()
                                } setCpf(text)
                            }}
                            style={styles.inputCpf}
                        /></>
                </View>
                <View style={styles.containerCollapse}>
                    <Collapsible collapsed={cpf.length < 14} duration={800} >
                        <View style={styles.containerText}>
                            <Text style={styles.textInstructions}>Agora precisamos que você{"\n"} escolha sua instituição finaceira</Text>
                        </View>
                        <View style={styles.card}>
                            <RadioButton onChange={(e) => setBank(e.organizationId)} data={organizations} />
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={isLoading}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                    setIsLoading(!isLoading);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <ActivityIndicator size="large" color="#0006" />
                                    </View>
                                </View>
                            </Modal>

                        </View>
                        {
                            bank && <View style={styles.containerButton}>
                                <Button label="Continuar" onPress={handleLoading} />
                            </View>
                        }
                    </Collapsible>
                </View>
            </>
        </TouchableHighlight >
    )
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0005'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    container: {
        flex: 1,
        paddingHorizontal: 14,
        // backgroundColor: '#fff'
    },
    containerButton: {
        paddingVertical: 30,
        paddingHorizontal: 50,
    },
    containerText: {
        marginVertical: 20
    },
    containerCollapse: {
        width: '100%',
    },

    label: {
        fontWeight: '600',
        fontSize: 16,
        color: theme.light.colors.primaryDark,
    },

    card: {
        backgroundColor: '#fff',
        elevation: 4,
        maxWidth: 700,
        width: '100%',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowColor: '#000',
        shadowRadius: 5,
        borderRadius: 7,
        padding: 14,

        marginHorizontal: 'auto',
    },
    inputCpf: {
        width: '100%',
        height: 30,
        fontWeight: '500',
        fontSize: 16,
        color: theme.light.colors.primary,
        marginTop: 7,
    },
    textInstructions: {
        fontWeight: '600',
        textAlign: "center",
        color: theme.light.colors.primaryDark
    }
})
