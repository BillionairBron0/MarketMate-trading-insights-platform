import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface NewsCardProps {
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  sentiment?: "bullish" | "bearish" | "neutral";
  url?: string;
}

export default function NewsCard({
  title,
  summary,
  source,
  timestamp,
  sentiment = "neutral",
  url,
}: NewsCardProps) {
  const getSentimentConfig = () => {
    switch (sentiment) {
      case "bullish":
        return {
          color: "#00ff88",
          icon: "trending-up",
          gradient: ["#00331a", "#0a0a0a"],
        };
      case "bearish":
        return {
          color: "#ff4444",
          icon: "trending-down",
          gradient: ["#330000", "#0a0a0a"],
        };
      default:
        return {
          color: "#888888",
          icon: "remove",
          gradient: ["#2a2a2a", "#1a1a1a"],
        };
    }
  };

  const sentimentConfig = getSentimentConfig();

  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <LinearGradient colors={sentimentConfig.gradient} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.sourceContainer}>
            <Text style={styles.source}>{source}</Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
          </View>
          <View
            style={[
              styles.sentimentBadge,
              { backgroundColor: sentimentConfig.color + "30" },
            ]}
          >
            <Ionicons
              name={sentimentConfig.icon as any}
              size={14}
              color={sentimentConfig.color}
            />
            <Text style={[styles.sentimentText, { color: sentimentConfig.color }]}>
              {sentiment.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.summary} numberOfLines={3}>
          {summary}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sourceContainer: {
    flex: 1,
  },
  source: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  timestamp: {
    color: "#888888",
    fontSize: 12,
    marginTop: 2,
  },
  sentimentBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  sentimentText: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 6,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    marginBottom: 8,
  },
  summary: {
    color: "#cccccc",
    fontSize: 14,
    lineHeight: 20,
  },
});
