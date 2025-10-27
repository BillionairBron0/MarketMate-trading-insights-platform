
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import SettingsCard from '../../components/SettingsCard';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { Link } from 'expo-router';

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
          subtitle={isPro ? 'Manage your subscription' : 'Access exclusive features & real-time data'}
          isPro={isPro}
          onPress={() => !isPro && setIsPro(true)}
        />
        <SettingsCard title="GoMode Access" subtitle="Advanced security features (Protected)" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trading</Text>
        <SettingsCard title="Broker Connections" subtitle="Connect to your broker worldwide" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Risk Management</Text>
        <SettingsCard
          title="Auto Refresh"
          subtitle="Automatically refresh market data"
          toggle={
            <Switch
              value={autoRefresh}
              onValueChange={setAutoRefresh}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={autoRefresh ? '#f5dd4b' : '#f4f3f4'}
            />
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <SettingsCard
          title="Notifications"
          subtitle="Price alerts and market updates"
          toggle={
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={notifications ? '#f5dd4b' : '#f4f3f4'}
            />
          }
        />
        <SettingsCard
          title="Dark Mode"
          subtitle="Professional dark interface"
          toggle={
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
            />
          }
        />
        <SettingsCard title="Data Source" subtitle="Configure market data providers" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <SettingsCard title="Help & Support" subtitle="Get in-touch with the platform" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <SettingsCard title="About" subtitle="App Version 1.0.0" />
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
