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
    fund: string,
    position: number,
    liquidity: number,
    risk: string,
    annualReturn: number
    color:string;
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
                    <Text style={styles.cardPrice}>R$ 2000,00</Text>
                    <Collapsible collapsed={isHiden} >
                        <View style={styles.collapseContainer}>
                            <View style={styles.extraInfo}>
                                <Text style={styles.extraInfoText}>
                                    Rendimento: {item.annualReturn}%
                                </Text>
                            </View>
                            <View style={styles.extraInfo}>
                                <Text style={styles.extraInfoText}>
                                    Risco: {item.risk}
                                </Text>
                            </View>
                            <View style={styles.extraInfo}>
                                <Text style={styles.extraInfoText}>
                                    Liquidez: {item.liquidity} dias
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