import React from "react";
import {
    Text,
    TouchableHighlight,
    TouchableHighlightProps
} from 'react-native';

interface ButtonProps extends TouchableHighlightProps {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    label: string;
}

export const Button: React.FC<ButtonProps> = ({ iconLeft, iconRight, label,...rest }) => {
    return (
        <TouchableHighlight style={styles.button} {...rest} underlayColor={`${theme.light.colors.primary}2`}>
            <>
                {iconLeft}
                <Text style={styles.buttonText}>
                    {label}
                </Text>
                {iconRight}
            </>
        </TouchableHighlight>
    )
}

import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  buttonContainer: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: theme.light.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    minWidth: 230,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '600'
  },
});
