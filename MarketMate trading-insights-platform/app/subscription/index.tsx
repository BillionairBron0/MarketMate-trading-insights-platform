
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Purchases from 'react-native-purchases';
import { useSubscription } from '../../contexts/SubscriptionContext';

export default function SubscriptionScreen() {
  const { updateSubscriptionStatus } = useSubscription();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOfferings = async () => {
      try {
        const offerings = await Purchases.getOfferings();
        if (offerings.current) {
          setPackages(offerings.current.availablePackages);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getOfferings();
  }, []);

  const purchasePackage = async (pack) => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(pack);
      updateSubscriptionStatus(customerInfo);
    } catch (e) {
      if (!e.userCancelled) {
        console.error(e);
      }
    }
  };

  const restorePurchases = async () => {
    try {
      const customerInfo = await Purchases.restorePurchases();
      updateSubscriptionStatus(customerInfo);
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <ActivityIndicator style={styles.container} size="large" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MarketMate Pro</Text>
      {packages.map((pack) => (
        <TouchableOpacity key={pack.identifier} onPress={() => purchasePackage(pack)} style={styles.button}>
          <Text style={styles.buttonText}>{`Unlock Pro (${pack.product.priceString})`}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={restorePurchases} style={styles.button}>
        <Text style={styles.buttonText}>Restore Purchases</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
