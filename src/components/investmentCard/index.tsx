import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Collapsible from "react-native-collapsible";
import Ant from "@expo/vector-icons/AntDesign";
import Fea from "@expo/vector-icons/Feather";
import Maui from "@expo/vector-icons/MaterialCommunityIcons";
import Fa from "@expo/vector-icons/FontAwesome5";
import { TouchableHighlight } from "react-native-gesture-handler";
import { styles } from "./styles";

interface ivestmentType {
    amount: number;
    distance: number;
    fund: string;
    liquidityDays: number;
    position: number;
    return: number,
    riskProfile: string
    color: string;
}

interface InvestmentCardProps {
    item: ivestmentType,
}


export const InvestmentCard: React.FC<InvestmentCardProps> = ({ item }) => {
    const style = StyleSheet.create({ border: { borderLeftColor: item.color } })
    const cardStyle = StyleSheet.flatten([styles.InvestmentCard, style.border])
    const [isHiden, setIsHiden] = useState(true)
    return (
        <TouchableHighlight
            onPress={() => setIsHiden(!isHiden)}
            style={cardStyle}
            underlayColor="#0001"
        >
            <>
                <View style={styles.ct}>
                    <Text numberOfLines={2} style={styles.cardTitle}>{item.fund}</Text>
                    <Text style={styles.cardPrice}>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL' }).format(item.amount < 0 ? item.amount * -1 : item.amount)}
                    </Text>
                    <Collapsible collapsed={isHiden} >
                        <View style={styles.collapseContainer}>
                            <View style={styles.extraInfo}>
                                <Text style={styles.extraInfoText}>
                                    Rendimento: {item.return}%
                                </Text>
                            </View>
                            <View style={styles.extraInfo}>
                                <Text style={styles.extraInfoText}>
                                    Risco: {item.riskProfile}
                                </Text>
                            </View>
                            <View style={styles.extraInfo}>
                                <Text style={styles.extraInfoText}>
                                    Liquidez: {item.liquidityDays} dias
                                </Text>
                            </View>
                        </View>
                    </Collapsible>
                </View>
                <Text style={styles.cardPercent}>
                    {(item.position).toFixed(1)}%
                </Text>
            </>
        </TouchableHighlight>
    )
}