import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SettingsCardProps {
  title: string;
  description?: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  rightElement?: "arrow" | "switch" | "text";
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  rightText?: string;
}

export default function SettingsCard({
  title,
  description,
  icon,
  onPress,
  rightElement = "arrow",
  switchValue = false,
  onSwitchChange,
  rightText,
}: SettingsCardProps) {
  const renderRightElement = () => {
    switch (rightElement) {
      case "switch":
        return (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            trackColor={{ false: "#333333", true: "#00ff88" }}
            thumbColor={switchValue ? "#ffffff" : "#666666"}
          />
        );
      case "text":
        return <Text style={styles.rightText}>{rightText}</Text>;
      default:
        return <Ionicons name="chevron-forward" size={20} color="#666666" />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={20} color="#00ff88" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {description && (
            <Text style={styles.description}>{description}</Text>
          )}
        </View>
      </View>
      <View style={styles.rightContainer}>
        {renderRightElement()}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00ff88" + "20",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    color: "#888888",
    fontSize: 14,
    marginTop: 2,
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  rightText: {
    color: "#666666",
    fontSize: 14,
  },
});