import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useState } from "react";
import SettingsCard from "../../components/SettingsCard";
import TradingButton from "../../components/TradingButton";

export default function SettingsTab() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const handleSubscription = () => {
    Alert.alert(
      "Premium Subscription",
      "Upgrade to Premium for $19.99/month to unlock advanced features, real-time data, and professional trading tools.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Subscribe", onPress: () => console.log("Subscription initiated") },
      ]
    );
  };

  const handleGodMode = () => {
    Alert.alert(
      "GodMode Access",
      "GodMode requires special authentication. Please contact support for access.",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Customize your trading experience</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingsCard
            title="Premium Subscription"
            description="$19.99/month - Advanced features & real-time data"
            icon="diamond"
            onPress={handleSubscription}
          />
          <SettingsCard
            title="GodMode Access"
            description="Advanced security features (Restricted)"
            icon="shield-checkmark"
            onPress={handleGodMode}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trading</Text>
          <SettingsCard
            title="Broker Connections"
            description="Connect to any broker worldwide"
            icon="link"
            onPress={() => console.log("Broker settings")}
          />
          <SettingsCard
            title="Risk Management"
            description="Set position limits and stop losses"
            icon="shield"
            onPress={() => console.log("Risk settings")}
          />
          <SettingsCard
            title="Auto Refresh"
            description="Automatically refresh market data"
            icon="refresh"
            rightElement="switch"
            switchValue={autoRefresh}
            onSwitchChange={setAutoRefresh}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <SettingsCard
            title="Notifications"
            description="Price alerts and market updates"
            icon="notifications"
            rightElement="switch"
            switchValue={notifications}
            onSwitchChange={setNotifications}
          />
          <SettingsCard
            title="Dark Mode"
            description="Professional dark interface"
            icon="moon"
            rightElement="switch"
            switchValue={darkMode}
            onSwitchChange={setDarkMode}
          />
          <SettingsCard
            title="Data Sources"
            description="Configure market data providers"
            icon="server"
            onPress={() => console.log("Data sources")}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <SettingsCard
            title="Help & Support"
            description="Get help with the platform"
            icon="help-circle"
            onPress={() => console.log("Help")}
          />
          <SettingsCard
            title="About"
            description="Version 1.0.0 - © 2024 Omni Corp"
            icon="information-circle"
            onPress={() => console.log("About")}
          />
        </View>

        <View style={styles.upgradeSection}>
          <TradingButton
            title="Upgrade to Premium - $19.99/month"
            variant="primary"
            onPress={handleSubscription}
          />
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
  upgradeSection: {
    marginTop: 16,
    marginBottom: 32,
  },
});