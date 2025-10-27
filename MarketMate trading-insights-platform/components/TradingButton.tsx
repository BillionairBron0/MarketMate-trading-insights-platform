import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  Animated,
} from "react-native";
import { useRef } from "react";

interface TradingButtonProps {
  title: string;
  onPress: () => void;
  variant?: "buy" | "sell" | "primary" | "secondary";
  style?: ViewStyle;
  disabled?: boolean;
}

export default function TradingButton({
  title,
  onPress,
  variant = "primary",
  style,
  disabled = false,
}: TradingButtonProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const getButtonStyle = () => {
    switch (variant) {
      case "buy":
        return [styles.button, styles.buyButton, style];
      case "sell":
        return [styles.button, styles.sellButton, style];
      case "secondary":
        return [styles.button, styles.secondaryButton, style];
      default:
        return [styles.button, styles.primaryButton, style];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "secondary":
        return [styles.text, styles.secondaryText];
      default:
        return styles.text;
    }
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={[getButtonStyle(), disabled && styles.disabled]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <Text style={getTextStyle()}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 56,
  },
  primaryButton: {
    backgroundColor: "#00ff88",
  },
  buyButton: {
    backgroundColor: "#00ff88",
  },
  sellButton: {
    backgroundColor: "#ff4444",
  },
  secondaryButton: {
    backgroundColor: "#2a2a2a",
    borderWidth: 1,
    borderColor: "#333333",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: "#0a0a0a",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#ffffff",
  },
});
