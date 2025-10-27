
import React, { createContext, useState, useEffect, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import Purchases, { CustomerInfo } from 'react-native-purchases';

// Define the shape of the context value
interface SubscriptionContextType {
  isPro: boolean;
  setIsPro: Dispatch<SetStateAction<boolean>>; // Allow direct setting of isPro
  loading: boolean;
}

// Create the context with an initial undefined value
const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

// Custom hook to use the subscription context
export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    // This error will be thrown if the hook is used outside of the provider
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

// Define the props for the provider component
interface SubscriptionProviderProps {
  children: ReactNode;
}

export const SubscriptionProvider = ({ children }: SubscriptionProviderProps) => {
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const configureAndFetch = async () => {
      try {
        // It's important to use your actual RevenueCat API key
        await Purchases.configure({ apiKey: "your_public_revenuecat_api_key" });
        const customerInfo = await Purchases.getCustomerInfo();
        updateSubscriptionStatus(customerInfo);
      } catch (e) {
        console.error("Failed to configure RevenueCat Purchases:", e);
      } finally {
        setLoading(false);
      }
    };

    configureAndFetch();

    // Define the listener function
    const customerInfoUpdateListener = (customerInfo: CustomerInfo) => {
      updateSubscriptionStatus(customerInfo);
    };

    // Add the listener
    Purchases.addCustomerInfoUpdateListener(customerInfoUpdateListener);

    // Cleanup function to remove the listener on component unmount
    return () => {
      Purchases.removeCustomerInfoUpdateListener(customerInfoUpdateListener);
    };
  }, []);

  const updateSubscriptionStatus = (customerInfo: CustomerInfo) => {
    // Check if the 'pro' entitlement is active
    const proEntitlement = customerInfo.entitlements.active?.pro;
    setIsPro(proEntitlement !== undefined);
  };

  // The value provided to the context consumers
  const value: SubscriptionContextType = { isPro, setIsPro, loading };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
