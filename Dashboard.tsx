import React from 'react';
import {
SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const categories = [
  { label: 'Doctor', short: 'DR' },
  { label: 'Salon', short: 'SL' },
  { label: 'Lawyer', short: 'LW' },
  { label: 'Hotel', short: 'HT' },
  { label: 'Handyman', short: 'HM' },
  { label: 'Architect', short: 'AR' },
];

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f7fb" />

      <View style={styles.phoneFrame}>
        <View style={styles.topBar}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.statusIcons}>
            <View style={styles.signalGroup}>
              <View style={[styles.signalBar, { height: 7 }]} />
              <View style={[styles.signalBar, { height: 10 }]} />
              <View style={[styles.signalBar, { height: 13 }]} />
            </View>
            <View style={styles.battery}>
              <View style={styles.batteryFill} />
            </View>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.title}>Book Appointment</Text>
              <Text style={styles.subtitle}>with our best service provider</Text>
            </View>

            <View style={styles.notificationWrap}>
              <View style={styles.bell}>
                <View style={styles.bellTop} />
                <View style={styles.bellBody} />
                <View style={styles.bellDot} />
              </View>
              <View style={styles.notificationDot} />
            </View>
          </View>

          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>Q</Text>
            <TextInput
              placeholder="Search here for category.."
              placeholderTextColor="#9b9b9b"
              style={styles.searchInput}
            />
          </View>

          <View style={styles.grid}>
            {categories.map((item) => (
              <TouchableOpacity key={item.label} style={styles.card} activeOpacity={0.85}>
                <View style={styles.iconBox}>
                  <Text style={styles.iconText}>{item.short}</Text>
                </View>
                <Text style={styles.cardLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <View style={styles.navIcon} />
          </View>
          <View style={styles.homeButton}>
            <View style={styles.homeInner}>
              <Text style={styles.homeText}>H</Text>
            </View>
          </View>
          <View style={styles.navItem}>
            <View style={[styles.navIcon, styles.profileIcon]} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#dfe7f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  phoneFrame: {
    width: '100%',
    maxWidth: 390,
    flex: 1,
    backgroundColor: '#fbfbfb',
    borderRadius: 36,
    overflow: 'hidden',
    shadowColor: '#3d4d68',
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#101010',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalGroup: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  signalBar: {
    width: 3,
    backgroundColor: '#101010',
    borderRadius: 3,
    marginRight: 2,
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1.5,
    borderColor: '#101010',
    borderRadius: 3,
    justifyContent: 'center',
    paddingHorizontal: 2,
    marginLeft: 8,
  },
  batteryFill: {
    width: 14,
    height: 6,
    backgroundColor: '#101010',
    borderRadius: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 120,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 22,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202020',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
  },
  notificationWrap: {
    position: 'relative',
    paddingTop: 4,
    paddingRight: 8,
  },
  bell: {
    width: 24,
    height: 28,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bellTop: {
    width: 10,
    height: 6,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: '#4a4a4a',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  bellBody: {
    width: 22,
    height: 16,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: '#4a4a4a',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: -1,
  },
  bellDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4a4a4a',
    marginTop: -2,
  },
  notificationDot: {
    position: 'absolute',
    top: 3,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff4a57',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingHorizontal: 18,
    height: 56,
    marginBottom: 18,
    shadowColor: '#91a0b8',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  searchIcon: {
    fontSize: 18,
    color: '#4a4a4a',
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#202020',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47.8%',
    backgroundColor: '#ffffff',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 28,
    minHeight: 168,
    marginBottom: 14,
    shadowColor: '#91a0b8',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  iconBox: {
    width: 62,
    height: 62,
    borderWidth: 2,
    borderColor: '#2446d8',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    backgroundColor: '#eef2ff',
  },
  iconText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2446d8',
  },
  cardLabel: {
    fontSize: 17,
    color: '#202020',
    fontWeight: '500',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 84,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eef0f4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  navItem: {
    width: 42,
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#b7c0cf',
  },
  profileIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  homeButton: {
    width: 74,
    height: 74,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -34,
    shadowColor: '#1d5acb',
    shadowOpacity: 0.16,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  homeInner: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor: '#1d5acb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
  },
});