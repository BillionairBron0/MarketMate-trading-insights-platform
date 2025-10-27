
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useSubscription } from '../../contexts/SubscriptionContext';

export default function SettingsScreen() {
  const { isPro } = useSubscription();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.subscriptionContainer}>
        <Text style={styles.subscriptionText}>
          {isPro ? 'You are a Pro user' : 'You are a Free user'}
        </Text>
        {!isPro && (
          <Link href="/subscription" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Upgrade to Pro</Text>
            </TouchableOpacity>
          </Link>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subscriptionContainer: {
    alignItems: 'center',
  },
  subscriptionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
