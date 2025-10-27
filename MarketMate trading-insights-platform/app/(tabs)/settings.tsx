
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SettingsCard from '../../components/SettingsCard';
import { useSubscription } from '../../contexts/SubscriptionContext';

export default function SettingsScreen() {
  const { isPro, setIsPro } = useSubscription();
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <SettingsCard
          title="Premium Subscription"
          description={isPro ? 'Manage your subscription' : 'Access exclusive features & real-time data'}
          onPress={() => !isPro && setIsPro(true)}
          icon="star"
          rightElement="text"
          rightText={isPro ? "PRO" : "Upgrade"}
        />
        <SettingsCard title="GoMode Access" description="Advanced security features (Protected)" icon="shield-checkmark" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trading</Text>
        <SettingsCard title="Broker Connections" description="Connect to your broker worldwide" icon="swap-horizontal" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Risk Management</Text>
        <SettingsCard
          title="Auto Refresh"
          description="Automatically refresh market data"
          icon="refresh-circle"
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
        <SettingsCard title="Data Source" description="Configure market data providers" icon="analytics" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <SettingsCard title="Help & Support" description="Get in-touch with the platform" icon="help-buoy" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <SettingsCard title="About" description="App Version 1.0.0" icon="information-circle" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});
