import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import MarketCard from "../../components/MarketCard";
import { Ionicons } from "@expo/vector-icons";

export default function AnalyticsTab() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => setRefreshing(false), 2000);
  };

  // Mock market data
  const marketData = [
    {
      symbol: "AAPL",
      price: "185.50",
      change: "+2.45",
      changePercent: "1.34",
      volume: "52.3M",
    },
    {
      symbol: "TSLA",
      price: "242.18",
      change: "-5.23",
      changePercent: "-2.11",
      volume: "89.1M",
    },
    {
      symbol: "NVDA",
      price: "875.30",
      change: "+12.45",
      changePercent: "1.44",
      volume: "45.2M",
    },
    {
      symbol: "MSFT",
      price: "378.85",
      change: "+1.25",
      changePercent: "0.33",
      volume: "28.9M",
    },
    {
      symbol: "GOOGL",
      price: "142.65",
      change: "-0.85",
      changePercent: "-0.59",
      volume: "31.4M",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#ffffff"
          />
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>MarketMate</Text>
          <Text style={styles.subtitle}>Your Trading Insights Platform</Text>
        </View>

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
          <Text style={styles.sectionTitle}>Portfolio Overview</Text>
          <View style={styles.portfolioCard}>
            <View style={styles.portfolioHeader}>
              <Text style={styles.portfolioValue}>$12,450.78</Text>
              <Text style={styles.portfolioChange}>
                <Ionicons name="caret-up" size={16} color="#00ff88" /> $250.30
                (2.05%)
              </Text>
            </View>
            <View style={styles.portfolioActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Withdraw</Text>
              </TouchableOpacity>
            </View>
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
  },
  header: {
    padding: 24,
    backgroundColor: "#1a1a1a",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#888888",
    textAlign: "center",
    marginTop: 4,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 20,
  },
  portfolioCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    padding: 20,
  },
  portfolioHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  portfolioValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
  portfolioChange: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00ff88",
  },
  portfolioActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    backgroundColor: "#2a2a2a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
