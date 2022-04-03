import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface ivestmentType { name: string, value: number, percent: number, color: string }

interface InvestmentCardProps {
    item: ivestmentType
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({item}) => {
    return <View style={{ ...styles.InvestmentCard, borderLeftColor: item.color }}>
        <View>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>R$ {item.value}</Text>
        </View>
        <Text style={styles.cardPercent}>
            {item.percent}%
        </Text>
    </View>
}