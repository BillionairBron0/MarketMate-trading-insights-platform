
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSubscription } from '../contexts/SubscriptionContext';
import { useRouter } from 'expo-router';

interface ProFeatureProps {
  children: React.ReactNode;
  featureName: string;
}

const ProFeature: React.FC<ProFeatureProps> = ({ children, featureName }) => {
  const { isPro } = useSubscription();
  const router = useRouter();

  if (isPro) {
    return <>{children}</>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This feature ({featureName}) is available only for Pro users.</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/subscription')}>
        <Text style={styles.buttonText}>Upgrade to Pro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProFeature;
