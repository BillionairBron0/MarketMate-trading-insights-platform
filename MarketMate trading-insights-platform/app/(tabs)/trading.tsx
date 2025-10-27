import { View, Text, StyleSheet, ScrollView, TextInput, Alert } from "react-native";
import { useState } from "react";
import TradingButton from "../../components/TradingButton";
import MarketCard from "../../components/MarketCard";

export default function TradingTab() {
  const [selectedSymbol, setSelectedSymbol] = useState("AAPL");
  const [quantity, setQuantity] = useState("100");
  const [price, setPrice] = useState("185.50");

  const handleBuy = () => {
    Alert.alert(
      "Buy Order",
      `Buy ${quantity} shares of ${selectedSymbol} at $${price}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Confirm", onPress: () => console.log("Buy order placed") },
      ]
    );
  };

  const handleSell = () => {
    Alert.alert(
      "Sell Order",
      `Sell ${quantity} shares of ${selectedSymbol} at $${price}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Confirm", onPress: () => console.log("Sell order placed") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Trading</Text>
        <Text style={styles.subtitle}>Execute trades with professional tools</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Trade</Text>
          
          <MarketCard
            symbol={selectedSymbol}
            price={price}
            change="+2.45"
            changePercent="1.34"
            volume="52.3M"
          />

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Symbol</Text>
            <TextInput
              style={styles.input}
              value={selectedSymbol}
              onChangeText={setSelectedSymbol}
              placeholder="Enter symbol"
              placeholderTextColor="#666666"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Quantity</Text>
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={setQuantity}
              placeholder="Enter quantity"
              placeholderTextColor="#666666"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              placeholder="Enter price"
              placeholderTextColor="#666666"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TradingButton
              title="BUY"
              variant="buy"
              onPress={handleBuy}
              style={styles.tradeButton}
            />
            <TradingButton
              title="SELL"
              variant="sell"
              onPress={handleSell}
              style={styles.tradeButton}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Risk Management</Text>
          <View style={styles.riskCard}>
            <Text style={styles.riskText}>💰 Portfolio Value: $125,430</Text>
            <Text style={styles.riskText}>📊 Day P&L: +$2,340 (+1.9%)</Text>
            <Text style={styles.riskText}>⚠️ Risk Level: Moderate</Text>
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
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#2a2a2a",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    padding: 12,
    color: "#ffffff",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  tradeButton: {
    flex: 0.48,
  },
  riskCard: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },
  riskText: {
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
});