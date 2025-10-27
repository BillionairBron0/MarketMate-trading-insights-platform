import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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
  const gradientColors = isPositive
    ? ["#00331a", "#0a0a0a"]
    : ["#330000", "#0a0a0a"];

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={gradientColors} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.symbol}>{symbol}</Text>
          <Ionicons
            name={isPositive ? "trending-up" : "trending-down"}
            size={20}
            color={changeColor}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <View style={[styles.changeBadge, { backgroundColor: changeColor }]}>
            <Text style={styles.changePercent}>{changePercent}%</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Change</Text>
            <Text style={[styles.detailValue, { color: changeColor }]}>
              {change}
            </Text>
          </View>
          {volume && (
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Volume</Text>
              <Text style={styles.detailValue}>{volume}</Text>
            </View>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  symbol: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  price: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "700",
    marginRight: 12,
  },
  changeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  changePercent: {
    color: "#0a0a0a",
    fontSize: 14,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingTop: 12,
  },
  detailItem: {
    alignItems: "flex-start",
  },
  detailLabel: {
    color: "#888888",
    fontSize: 12,
    marginBottom: 4,
  },
  detailValue: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
});
