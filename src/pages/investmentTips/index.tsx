import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Alert,
} from 'react-native';
import { styles } from "./styles";

import Feather from '@expo/vector-icons/Feather';
import FontAwsome from '@expo/vector-icons/MaterialIcons';
import theme from "../../theme";
import { InvestmentCard } from "../../components/investmentCard";
import { Button } from "../../components/button";

// const wallet = [
//     {
//         'fund': 'ARX MACRO FIC FIM', 
//         'position': 22.970585407783545,
//         'liquidity': 1,
//         'risk': 'Moderado',
//         'annualReturn': 12.45
//     },
//     {
//         'fund': 'COMPASS ESG CREDIT SELECTION FIC FIRF CP LP',
//         'position': 22.970585407783545,
//         'liquidity': 1,
//         'risk': 'Moderado',
//         'annualReturn': 7.62
//     },
//     {
//         'fund': 'TESOURO IPCA CURTO RF', 
//         'position': 18.0196097281443,
//         'liquidity': 1,
//         'risk': 'Baixo',
//         'annualReturn': 0.0867
//     },
//     {
//         'fund': 'BTG PACTUAL YIELD FIRF REFERENCIADO DI CP',
//         'position': 18.0196097281443,
//         'liquidity': 0,
//         'risk': 'Baixo',
//         'annualReturn': 6.99
//     },
//     {
//         'fund': 'BTG PACTUAL OURO FIM', 
//         'position': 18.0196097281443,
//         'liquidity': 8,
//         'risk': 'Moderado',
//         'annualReturn': 19.15
//     },
// ]

const colorList = [
    "#001E62",
    "#195AB4",
    "#418FDE",
    "#5C88DA",
    "#B8CCEA",

]
export const InvestmentTips: React.FC = ({route}) => {
    const [wallet, setWallet] = useState(route.params.data)
    useEffect(()=>{
        console.log(route.params.data)
    }, [])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>

                <View style={styles.iconContainer}>
                    <Feather name="check-circle" size={60} color={theme.light.colors.primary} />
                </View>
                <Text style={styles.headerTitle}>Análise concluída!</Text>
                <Text style={styles.headerDescription}>Ao analisar seus dados através do open finance separamos um portfólio de investimentos que pode ser interessante para o seu perfil.</Text>
            </View>
            <View style={styles.InvestmentList}>
                {
                    wallet.map((i, key) => <InvestmentCard key={key} item={{ ...i, color: colorList[(colorList.length + key) % colorList.length] }} />)
                }
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    label="Iniciar investimentos"
                    iconLeft={<FontAwsome name="attach-money" size={20} color="white" />}
                    onPress={() => Alert.alert("Redirecionando para btg investimentos...")}
                />
            </View>
        </ScrollView>
    )
}

