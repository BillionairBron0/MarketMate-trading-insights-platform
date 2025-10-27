import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useState } from "react";
import MarketCard from "../../components/MarketCard";

export default function AnalyticsTab() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => setRefreshing(false), 2000);
  };

  // Mock market data
  const marketData = [
    { symbol: "AAPL", price: "185.50", change: "+2.45", changePercent: "1.34", volume: "52.3M" },
    { symbol: "TSLA", price: "242.18", change: "-5.23", changePercent: "-2.11", volume: "89.1M" },
    { symbol: "NVDA", price: "875.30", change: "+12.45", changePercent: "1.44", volume: "45.2M" },
    { symbol: "MSFT", price: "378.85", change: "+1.25", changePercent: "0.33", volume: "28.9M" },
    { symbol: "GOOGL", price: "142.65", change: "-0.85", changePercent: "-0.59", volume: "31.4M" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.title}>Market Analytics</Text>
        <Text style={styles.subtitle}>Real-time market data & analysis</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Movers</Text>
          {marketData.map((stock, index) => (
            <MarketCard
              key={index}
              symbol={stock.symbol}
              price={stock.price}
              change={stock.change}
              changePercent={stock.changePercent}
              volume={stock.volume}
              onPress={() => console.log(`Selected ${stock.symbol}`)}
            />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Market Summary</Text>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryText}>
              📈 Markets are showing mixed signals with tech leading gains
            </Text>
            <Text style={styles.summaryText}>
              🔥 High volume detected in TSLA and NVDA
            </Text>
            <Text style={styles.summaryText}>
              ⚠️ Watch for resistance at key levels
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#888888",
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },
  summaryText: {
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
});