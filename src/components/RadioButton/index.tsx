import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import Fa from '@expo/vector-icons/FontAwesome'
interface datatype {
  organizationName: string
  organizationId: string
}

interface ButtonProps {
  data: datatype[];
  onChange?: (d:datatype)=>void;
  label?: string;
}

export const RadioButton: React.FC<ButtonProps> = ({
  data,
  label,
  onChange,
}) => {
  const [val, setVal] = useState("");
  function handleClick(d:datatype){
    onChange(d);
    setVal(d.organizationId)
  }
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.organizationId}
      renderItem={({ item }) => (
        <Pressable
          key={item.organizationName}
          onPress={() => handleClick(item)}
          style={val === item.organizationId ? styles.itemSe : styles.item}
        >
          <Fa name="bank" size={19} style={val === item.organizationId ? styles.itemSeIcon : styles.itemIcon} />
          <Text style={val === item.organizationId ? styles.itemSeText : styles.itemText}>
            {item.organizationName}
          </Text>
        </Pressable>
      )}
    />
  )
};

import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  itemSeIcon: {
    color: theme.light.colors.primary,
    opacity: 1,
  },
  itemIcon: {
    color: theme.light.colors.primary,
    opacity: 0.5,
  },
  item: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.light.colors.background,
    paddingHorizontal: 10,
    minWidth: 230,
    paddingVertical: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  itemSe: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.light.colors.primary,
    paddingHorizontal: 10,
    minWidth: 230,
    paddingVertical: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  itemSeText: {
    color: theme.light.colors.primary,
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "500",
    display: "flex",
    flex: 1,
  },
  itemText: {
    color: theme.light.colors.primary,
    fontSize: 14,
    opacity: 0.5,
    marginLeft: 5,
    fontWeight: "500",
    display: "flex",
    flex: 1,

  },
});
