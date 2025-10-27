import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  const getSentimentColor = () => {
    switch (sentiment) {
      case "bullish":
        return "#00ff88";
      case "bearish":
        return "#ff4444";
      default:
        return "#888888";
    }
  };

  const getSentimentIcon = () => {
    switch (sentiment) {
      case "bullish":
        return "trending-up";
      case "bearish":
        return "trending-down";
      default:
        return "remove";
    }
  };

  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.header}>
        <View style={styles.sourceContainer}>
          <Text style={styles.source}>{source}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
        <View style={[styles.sentimentBadge, { backgroundColor: getSentimentColor() + "20" }]}>
          <Ionicons
            name={getSentimentIcon()}
            size={12}
            color={getSentimentColor()}
          />
          <Text style={[styles.sentimentText, { color: getSentimentColor() }]}>
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

      <View style={styles.footer}>
        <Ionicons name="open-outline" size={14} color="#666666" />
        <Text style={styles.readMore}>Read more</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333333",
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
    color: "#00ff88",
    fontSize: 12,
    fontWeight: "600",
  },
  timestamp: {
    color: "#666666",
    fontSize: 11,
    marginTop: 2,
  },
  sentimentBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  sentimentText: {
    fontSize: 10,
    fontWeight: "600",
    marginLeft: 4,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    marginBottom: 8,
  },
  summary: {
    color: "#cccccc",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  readMore: {
    color: "#666666",
    fontSize: 12,
    marginLeft: 4,
  },
});