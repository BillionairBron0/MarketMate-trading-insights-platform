import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useState } from "react";
import NewsCard from "../../components/NewsCard";

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
      summary: "Apple Inc. exceeded analyst expectations with robust iPhone sales driving revenue growth. The company reported record quarterly revenue of $89.5 billion.",
      source: "MarketWatch",
      timestamp: "2 hours ago",
      sentiment: "bullish" as const,
      url: "https://marketwatch.com",
    },
    {
      title: "Tesla Stock Drops on Production Concerns",
      summary: "Tesla shares fell 3% in pre-market trading after reports of production delays at the Austin facility. Analysts remain cautiously optimistic.",
      source: "Reuters",
      timestamp: "4 hours ago",
      sentiment: "bearish" as const,
      url: "https://reuters.com",
    },
    {
      title: "NVIDIA AI Chip Demand Continues to Soar",
      summary: "Strong demand for AI chips pushes NVIDIA to new highs. The company's data center revenue grew 200% year-over-year, signaling continued AI boom.",
      source: "Bloomberg",
      timestamp: "6 hours ago",
      sentiment: "bullish" as const,
      url: "https://bloomberg.com",
    },
    {
      title: "Federal Reserve Signals Potential Rate Cuts",
      summary: "Fed officials hint at possible interest rate reductions in upcoming meetings, citing cooling inflation data and economic stability concerns.",
      source: "CNBC",
      timestamp: "8 hours ago",
      sentiment: "neutral" as const,
      url: "https://cnbc.com",
    },
    {
      title: "Microsoft Azure Growth Accelerates",
      summary: "Microsoft's cloud computing division shows accelerated growth with Azure revenue up 35% year-over-year, beating analyst expectations significantly.",
      source: "TechCrunch",
      timestamp: "10 hours ago",
      sentiment: "bullish" as const,
      url: "https://techcrunch.com",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.title}>Market News</Text>
        <Text style={styles.subtitle}>Real-time financial news with AI sentiment analysis</Text>

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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Market Sentiment</Text>
          <View style={styles.sentimentCard}>
            <View style={styles.sentimentRow}>
              <Text style={styles.sentimentLabel}>📈 Bullish: </Text>
              <Text style={styles.bullishText}>60%</Text>
            </View>
            <View style={styles.sentimentRow}>
              <Text style={styles.sentimentLabel}>📉 Bearish: </Text>
              <Text style={styles.bearishText}>25%</Text>
            </View>
            <View style={styles.sentimentRow}>
              <Text style={styles.sentimentLabel}>➖ Neutral: </Text>
              <Text style={styles.neutralText}>15%</Text>
            </View>
          </View>
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
  sentimentCard: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },
  sentimentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  sentimentLabel: {
    color: "#ffffff",
    fontSize: 14,
    flex: 1,
  },
  bullishText: {
    color: "#00ff88",
    fontSize: 16,
    fontWeight: "600",
  },
  bearishText: {
    color: "#ff4444",
    fontSize: 16,
    fontWeight: "600",
  },
  neutralText: {
    color: "#888888",
    fontSize: 16,
    fontWeight: "600",
  },
});