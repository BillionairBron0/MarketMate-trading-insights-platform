import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MarketCardProps {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  volume?: string;
  onPress?: () => void;
}

export default function MarketCard({
  symbol,
  price,
  change,
  changePercent,
  volume,
  onPress,
}: MarketCardProps) {
  const isPositive = !change.startsWith("-");
  const changeColor = isPositive ? "#00ff88" : "#ff4444";

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Ionicons 
          name={isPositive ? "trending-up" : "trending-down"} 
          size={16} 
          color={changeColor} 
        />
      </View>
      
      <Text style={styles.price}>${price}</Text>
      
      <View style={styles.changeContainer}>
        <Text style={[styles.change, { color: changeColor }]}>
          {change}
        </Text>
        <Text style={[styles.changePercent, { color: changeColor }]}>
          ({changePercent}%)
        </Text>
      </View>
      
      {volume && (
        <Text style={styles.volume}>Vol: {volume}</Text>
      )}
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  symbol: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  change: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  changePercent: {
    fontSize: 14,
  },
  volume: {
    color: "#888888",
    fontSize: 12,
    marginTop: 4,
  },
});