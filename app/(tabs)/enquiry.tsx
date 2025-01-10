import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EnquiryScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const handleSubmit = () => {
    if (!name || !phone || !email || !details) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    Alert.alert('Success', 'Your enquiry has been submitted!');
    setName('');
    setPhone('');
    setEmail('');
    setDetails('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enquiry Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        keyboardType="phone-pad"
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Details"
        value={details}
        multiline
        numberOfLines={4}
        onChangeText={setDetails}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default EnquiryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
