import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import NewsCard from "../../components/NewsCard";
import { Ionicons } from "@expo/vector-icons";

export default function NewsTab() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  // Mock news data
  const newsData = [
    {
      title: "Apple Reports Strong Q4 Earnings, iPhone Sales Surge",
      summary:
        "Apple Inc. exceeded analyst expectations with robust iPhone sales driving revenue growth. The company reported record quarterly revenue of $89.5 billion.",
      source: "MarketWatch",
      timestamp: "2 hours ago",
      sentiment: "bullish" as const,
      url: "https://marketwatch.com",
    },
    {
      title: "Tesla Stock Drops on Production Concerns",
      summary:
        "Tesla shares fell 3% in pre-market trading after reports of production delays at the Austin facility. Analysts remain cautiously optimistic.",
      source: "Reuters",
      timestamp: "4 hours ago",
      sentiment: "bearish" as const,
      url: "https://reuters.com",
    },
    {
      title: "NVIDIA AI Chip Demand Continues to Soar",
      summary:
        "Strong demand for AI chips pushes NVIDIA to new highs. The company\'s data center revenue grew 200% year-over-year, signaling continued AI boom.",
      source: "Bloomberg",
      timestamp: "6 hours ago",
      sentiment: "bullish" as const,
      url: "https://bloomberg.com",
    },
    {
      title: "Federal Reserve Signals Potential Rate Cuts",
      summary:
        "Fed officials hint at possible interest rate reductions in upcoming meetings, citing cooling inflation data and economic stability concerns.",
      source: "CNBC",
      timestamp: "8 hours ago",
      sentiment: "neutral" as const,
      url: "https://cnbc.com",
    },
    {
      title: "Microsoft Azure Growth Accelerates",
      summary:
        "Microsoft\'s cloud computing division shows accelerated growth with Azure revenue up 35% year-over-year, beating analyst expectations significantly.",
      source: "TechCrunch",
      timestamp: "10 hours ago",
      sentiment: "bullish" as const,
      url: "https://techcrunch.com",
    },
  ];

  const sentimentDistribution = {
    bullish: 60,
    bearish: 25,
    neutral: 15,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#ffffff"
          />
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>Market News</Text>
          <Text style={styles.subtitle}>
            AI-powered sentiment analysis for an edge in the market
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Market Sentiment</Text>
          <View style={styles.sentimentContainer}>
            <View style={styles.sentimentBar}>
              <View
                style={[
                  styles.sentimentSegment,
                  { flex: sentimentDistribution.bullish, backgroundColor: "#00ff88" },
                ]}
              />
              <View
                style={[
                  styles.sentimentSegment,
                  { flex: sentimentDistribution.bearish, backgroundColor: "#ff4444" },
                ]}
              />
              <View
                style={[
                  styles.sentimentSegment,
                  { flex: sentimentDistribution.neutral, backgroundColor: "#888888" },
                ]}
              />
            </View>
            <View style={styles.sentimentLabels}>
              <Text style={styles.sentimentLabel}>
                <Ionicons name="ellipse" size={10} color="#00ff88" /> Bullish: {sentimentDistribution.bullish}%
              </Text>
              <Text style={styles.sentimentLabel}>
                <Ionicons name="ellipse" size={10} color="#ff4444" /> Bearish: {sentimentDistribution.bearish}%
              </Text>
              <Text style={styles.sentimentLabel}>
                <Ionicons name="ellipse" size={10} color="#888888" /> Neutral: {sentimentDistribution.neutral}%
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest Headlines</Text>
          {newsData.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              summary={article.summary}
              source={article.source}
              timestamp={article.timestamp}
              sentiment={article.sentiment}
              url={article.url}
            />
          ))}
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 20,
  },
  sentimentContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    padding: 20,
  },
  sentimentBar: {
    flexDirection: "row",
    height: 12,
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 16,
  },
  sentimentSegment: {
    height: "100%",
  },
  sentimentLabels: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sentimentLabel: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
});
