import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Collapsible from "react-native-collapsible";
import Ant from "@expo/vector-icons/AntDesign";
import Fea from "@expo/vector-icons/Feather";
import Maui from "@expo/vector-icons/MaterialCommunityIcons";
import Fa from "@expo/vector-icons/FontAwesome5";
import { TouchableHighlight } from "react-native-gesture-handler";
import { styles } from "./styles";

interface ivestmentType { name: string, value: number, percent: number, color: string }

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
                <View>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardPrice}>R$ {item.value}</Text>
                    <Collapsible collapsed={isHiden} >
                        <View style={styles.collapseContainer}>
                            <View style={styles.extraInfo}>
                                <Ant name="linechart" color={"#00C389"} size={18}/>
                                <Text style={styles.extraInfoText}>
                                    Rendimento: 10%
                                </Text>
                            </View>
                            <View style={styles.extraInfo}>
                                <Fea name="alert-triangle" color={"#FFC845"} size={18}/>
                                <Text style={styles.extraInfoText}>
                                    Risco: Baixo
                                </Text>
                            </View>
                            <View style={styles.extraInfo}>
                                <Fa name="hand-holding-usd" color={"#F55F73"} size={18}/>
                                <Text style={styles.extraInfoText}>
                                    Liquidez: Diária
                                </Text>
                            </View>
                        </View>
                    </Collapsible>
                </View>
                <Text style={styles.cardPercent}>
                    {item.percent}%
                </Text>
            </>
        </TouchableHighlight>
    )
}