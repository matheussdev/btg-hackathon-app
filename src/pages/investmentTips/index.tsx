import React from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Button,
    Alert
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import Feather from '@expo/vector-icons/Feather';
import FontAwsome from '@expo/vector-icons/MaterialIcons';
import theme from "../../theme";
import { InvestmentCard } from "../../components/investmentCard";

export const InvestmentTips: React.FC = () => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>

                <View style={styles.iconContainer}>
                    <Feather name="check-circle" size={60} color="#00C389" />
                </View>
                <Text style={styles.headerTitle}>Análise concluída!</Text>
                <Text style={styles.headerDescription}>Ao analisar seus dados através do open finance separamos alguns investimentos que podem ser interessantes para o seu perfil.</Text>
            </View>
            <View style={styles.InvestmentList}>
                <InvestmentCard item={{name: "Fundos de investimentos", value: 69180.10, percent: 30, color:"#001E62"}} />
                <InvestmentCard item={{name: "Renda Fixa", value: 69180.10, percent: 20, color:"#195AB4"}} />
                <InvestmentCard item={{name: "Renda variável", value: 69180.10, percent:15, color:"#195AB4"}} />
                <InvestmentCard item={{name: "COE", value: 69180.10, percent: 10, color:"#418FDE"}} />
                <InvestmentCard item={{name: "Previdência", value: 69180.10, percent: 10, color:"#5C88DA"}} />
                <InvestmentCard item={{name: "Derivativos", value: 69180.10, percent: 15, color:"#B8CCEA"}} />
            </View>
            <View style={{padding: 30, alignItems: "center", justifyContent: "center"}}>
                <FontAwsome.Button
                    name="attach-money"
                    onPress={() => Alert.alert("Redirecionando para btg investimentos...")}
                    backgroundColor={theme.light.colors.primary}
                    paddingHorizontal={30}
                    paddingVertical={16}
                    size={20}
                    >
                        Iniciar investimentos
                    </FontAwsome.Button>
            </View>
        </ScrollView>
    )
}

