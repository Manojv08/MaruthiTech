import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

// Carousel data
const carouselItems = [
  require('@/assets/images/image1.jpeg'),
  require('@/assets/images/image2.jpeg'),
  require('@/assets/images/image3.jpeg'),
  require('@/assets/images/image4.jpeg'),
  require('@/assets/images/image5.jpeg')
];

export default function Home() {

  return (
    <ImageBackground
      source={require('@/assets/images/background.jpeg')} // Background image
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Top Half */}
        <View style={styles.topHalf}>
          <Text style={styles.title}>Welcome to MaruthiTech!</Text>
          <Text style={styles.subtitle}>Innovate. Inspire. Achieve.</Text>

          <Carousel
            width={screenWidth * 0.8}
            height={200}
            autoPlay={true}
            data={carouselItems}
            scrollAnimationDuration={2000}
            renderItem={({ item }) => (
              <Image source={item} style={styles.carouselImage} />
            )}
          />
        </View>

        {/* Bottom Half */}
        <View style={styles.bottomHalf}>
          <ScrollView>
            <Text style={styles.sectionTitle}>Our Address</Text>
            <Text style={styles.text}>
              131, Mettukuppam Rd, Anna Industrial Estate, Porur, Chennai, Tamil Nadu 600095{'\n'}
              Phone: +91 93828 83021 / 88077 78700 / 97910 57056{'\n'}
              Email: maruthitech2009@gmail.com
            </Text>

            <Text style={styles.sectionTitle}>Our Services</Text>
            <Text style={styles.text}>
              - Custom Fabrication{'\n'}
              - Machine Erection{'\n'}
              - Manufacturing (SS RO skid, SS tanks, and more)
            </Text>

            <Text style={styles.sectionTitle}>Our Mission</Text>
            <Text style={styles.text}>
              Maruthi Tech specializes in high-quality stainless steel and mild steel fabrication.
              We provide customized solutions and exceptional craftsmanship to meet customer needs.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topHalf: {
    flex: 1, // Takes half the screen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bottomHalf: {
    flex: 1, // Takes the other half
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#f8f8f8',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  carouselItem: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },
});
