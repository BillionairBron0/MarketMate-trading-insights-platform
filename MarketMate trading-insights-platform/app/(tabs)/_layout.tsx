
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { Redirect } from 'expo-router';

export default function TabLayout() {
  const { isPro } = useSubscription();

  if (!isPro) {
    return <Redirect href="/subscription" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="trading"
        options={{
          title: 'Trading',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="exchange" color={color} />,
        }}
      />
      {isPro && (
        <Tabs.Screen
          name="portfolio"
          options={{
            title: 'Portfolio',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="pie-chart" color={color} />,
          }}
        />
      )}
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="newspaper-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="subscription"
        options={{
          title: 'Subscription',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,
        }}
      />
    </Tabs>
  );
}
