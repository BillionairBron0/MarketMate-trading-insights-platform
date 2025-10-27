import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import TradingButton from "../../components/TradingButton";
import { Ionicons } from "@expo/vector-icons";

export default function TradingTab() {
  const [orderType, setOrderType] = useState("market"); // market, limit, stop
  const [symbol, setSymbol] = useState("AAPL");
  const [quantity, setQuantity] = useState("100");
  const [limitPrice, setLimitPrice] = useState("185.50");
  const [stopPrice, setStopPrice] = useState("180.00");

  const handlePlaceOrder = (side: "buy" | "sell") => {
    const orderDetails = `Side: ${side.toUpperCase()}\nSymbol: ${symbol}\nQuantity: ${quantity}\nOrder Type: ${orderType.toUpperCase()}`;
    const priceDetails = orderType === "limit" ? `\nLimit Price: $${limitPrice}` : orderType === "stop" ? `\nStop Price: $${stopPrice}` : "";

    Alert.alert(
      `Confirm ${side.toUpperCase()} Order`,
      `${orderDetails}${priceDetails}`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Confirm", onPress: () => console.log(`${side} order placed`) },
      ]
    );
  };

  const renderOrderTypeFields = () => {
    if (orderType === "limit") {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Limit Price</Text>
          <TextInput
            style={styles.input}
            value={limitPrice}
            onChangeText={setLimitPrice}
            placeholder="Enter limit price"
            placeholderTextColor="#666666"
            keyboardType="numeric"
          />
        </View>
      );
    } else if (orderType === "stop") {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Stop Price</Text>
          <TextInput
            style={styles.input}
            value={stopPrice}
            onChangeText={setStopPrice}
            placeholder="Enter stop price"
            placeholderTextColor="#666666"
            keyboardType="numeric"
          />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Trade Terminal</Text>
          <Text style={styles.subtitle}>Execute trades with precision</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.orderTypeSelector}>
            <TouchableOpacity
              style={[
                styles.orderTypeButton,
                orderType === "market" && styles.orderTypeButtonActive,
              ]}
              onPress={() => setOrderType("market")}
            >
              <Text style={styles.orderTypeButtonText}>Market</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.orderTypeButton,
                orderType === "limit" && styles.orderTypeButtonActive,
              ]}
              onPress={() => setOrderType("limit")}
            >
              <Text style={styles.orderTypeButtonText}>Limit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.orderTypeButton,
                orderType === "stop" && styles.orderTypeButtonActive,
              ]}
              onPress={() => setOrderType("stop")}
            >
              <Text style={styles.orderTypeButtonText}>Stop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tradeForm}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Symbol</Text>
              <TextInput
                style={styles.input}
                value={symbol}
                onChangeText={setSymbol}
                placeholder="e.g., AAPL"
                placeholderTextColor="#666666"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Quantity</Text>
              <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={setQuantity}
                placeholder="e.g., 100"
                placeholderTextColor="#666666"
                keyboardType="numeric"
              />
            </View>

            {renderOrderTypeFields()}

            <View style={styles.estimatedCostContainer}>
              <Text style={styles.estimatedCostLabel}>Estimated Cost</Text>
              <Text style={styles.estimatedCostValue}>$18,550.00</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TradingButton
                title="BUY"
                variant="buy"
                onPress={() => handlePlaceOrder("buy")}
                style={{ flex: 1, marginRight: 8 }}
              />
              <TradingButton
                title="SELL"
                variant="sell"
                onPress={() => handlePlaceOrder("sell")}
                style={{ flex: 1, marginLeft: 8 }}
              />
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
  orderTypeSelector: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  orderTypeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  orderTypeButtonActive: {
    backgroundColor: "#00ff88",
  },
  orderTypeButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  tradeForm: {
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "#888888",
    fontSize: 12,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#0a0a0a",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    padding: 14,
    color: "#ffffff",
    fontSize: 16,
  },
  estimatedCostContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    padding: 12,
    backgroundColor: "#0a0a0a",
    borderRadius: 8,
  },
  estimatedCostLabel: {
    color: "#888888",
    fontSize: 14,
  },
  estimatedCostValue: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
