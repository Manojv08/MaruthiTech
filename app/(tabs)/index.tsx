import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Maruthi Tech</Text>
      <Text style={styles.sectionTitle}>About Us</Text>
      <Text style={styles.text}>
        Maruthi Tech specializes in high-quality stainless steel and mild steel fabrication.
        We provide customized solutions and exceptional craftsmanship to meet customer needs.
      </Text>
      <Text style={styles.sectionTitle}>Our Services</Text>
      <Text style={styles.text}>
        - Custom Fabrication{'\n'}
        - Machine Erection{'\n'}
        - Manufacturing (SS RO skid, SS tanks, and more)
      </Text>
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <Text style={styles.text}>
        Address: 131, Mettukuppam Rd, Anna Industrial Estate, Porur, Chennai, Tamil Nadu 600095{'\n'}
        Phone: +91 93828 83021 / 88077 78700 / 97910 57056{'\n'}
        Email: maruthitech2009@gmail.com
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },
});
