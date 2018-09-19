import React from "react";
import PropType from "prop-types";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


function Button({iconName, onPress}){
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
    )
}

Button.prototypes = {
    iconName: PropType.string.isRequired,
    onPress: PropType.func.isRequired
};

export default Button;
