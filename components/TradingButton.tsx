import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

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

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
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
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#666666",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryText: {
    color: "#ffffff",
  },
});