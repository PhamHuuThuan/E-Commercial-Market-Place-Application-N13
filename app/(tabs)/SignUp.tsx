import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Import Feather icons

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = async () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("https://67094eabaf1a3998baa1181b.mockapi.io/ApiLogin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password })
        });
        const result = await response.json();
        Alert.alert("Success", "Registration successful!");
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert("Error", "Failed to register. Please try again later.");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Back Button */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/image/left-chevron.png')} style={styles.backButton} />
          </Pressable>
        </View>

        {/* Title and Subtitle */}
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>
          Enter your user information below or continue with one of your social accounts
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            placeholder="Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setErrors((prev) => ({ ...prev, name: '' }));
            }}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors((prev) => ({ ...prev, email: '' }));
            }}
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors((prev) => ({ ...prev, password: '' }));
              }}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIconContainer}
            >
              <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Privacy Policy */}
        <Text style={styles.privacyText}>
          By clicking Sign up, you accept our <Text style={styles.linkText}>Privacy Policy</Text> & <Text style={styles.linkText}>Terms of Service</Text>
        </Text>

        {/* Social Media Login Buttons */}
        <Text style={styles.orText}>Or select</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Image source={require('../../assets/image/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/image/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/image/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        {/* Sign In Link */}
        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { padding: 20 },
  header: { marginTop: 20 },
  backButton: { width: 24, height: 24 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  subtitle: { fontSize: 14, textAlign: 'center', color: 'gray', marginBottom: 20 },
  inputContainer: { marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12 },
  inputError: { borderColor: 'red' },
  errorText: { color: 'red', fontSize: 12, marginBottom: 8 },
  signUpButton: { backgroundColor: 'red', paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginBottom: 15 },
  signUpButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  privacyText: { fontSize: 12, textAlign: 'center', color: 'gray', marginBottom: 20 },
  linkText: { color: 'red', textDecorationLine: 'underline' },
  orText: { textAlign: 'center', color: 'gray', marginVertical: 10 },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  socialIcon: { width: 40, height: 40, marginHorizontal: 10 },
  signInText: { textAlign: 'center', color: 'gray', marginTop: 20 },
  passwordContainer: { position: 'relative' },
  eyeIconContainer: { position: 'absolute', right: 12, top: 12 },
});

export default SignUp;
