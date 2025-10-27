
import React, { createContext, useState, useEffect, useContext } from 'react';
import Purchases from 'react-native-purchases';

const SubscriptionContext = createContext();

export const useSubscription = () => useContext(SubscriptionContext);

export const SubscriptionProvider = ({ children }) => {
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const configurePurchases = async () => {
      try {
        await Purchases.configure({ apiKey: "your_public_revenuecat_api_key" });
        const customerInfo = await Purchases.getCustomerInfo();
        updateSubscriptionStatus(customerInfo);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    configurePurchases();

    const customerInfoUpdateListener = Purchases.addCustomerInfoUpdateListener((customerInfo) => {
      updateSubscriptionStatus(customerInfo);
    });

    return () => {
      customerInfoUpdateListener.remove();
    };
  }, []);

  const updateSubscriptionStatus = (customerInfo) => {
    setIsPro(customerInfo.entitlements.active?.pro !== undefined);
  };

  const value = { isPro, loading, updateSubscriptionStatus };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
