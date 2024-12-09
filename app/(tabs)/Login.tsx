import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';  // Import Feather icons

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('hoanghuytoi03@gmail.com');
  const [password, setPassword] = useState('123456');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    const newErrors = {};

    // Validate email and password
    if (!email) newErrors.email = 'Email is required.';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('https://67094eabaf1a3998baa1181b.mockapi.io/ApiLogin');
        const data = await response.json();

        const user = data.find(user => user.email === email && user.password === password);

        if (user) {
          Alert.alert('Login Successful', 'Welcome back!');
          navigation.navigate('Profile', { userId: user.id }); // Pass the userId to the Profile screen
        } else {
          Alert.alert('Invalid Credentials', 'The email or password you entered is incorrect.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        Alert.alert('Error', 'There was an error during the login process. Please try again later.');
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

        {/* Title */}
        <Text style={styles.title}>Login to your account</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Email Address"
            value={email}
            onChangeText={text => {
              setEmail(text);
              setErrors(prev => ({ ...prev, email: '' }));
            }}
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <View style={styles.passwordWrapper}>
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="Password"
              value={password}
              onChangeText={text => {
                setPassword(text);
                setErrors(prev => ({ ...prev, password: '' }));
              }}
              secureTextEntry={!showPassword}  // Toggle password visibility
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.showPasswordButton}>
              <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
            </Pressable>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        {/* Forgot Password */}
        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Social Media Login Buttons */}
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

        {/* Sign Up Link */}
        <Text style={styles.signUpText}>
          Don’t have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
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
  inputContainer: { marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12 },
  inputError: { borderColor: 'red' },
  errorText: { color: 'red', fontSize: 12, marginBottom: 8 },
  forgotPassword: { alignSelf: 'flex-end', color: 'gray', marginBottom: 20 },
  signInButton: { backgroundColor: 'red', paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  signInButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  socialIcon: { width: 40, height: 40, marginHorizontal: 10 },
  signUpText: { textAlign: 'center', color: 'gray', marginTop: 20 },
  linkText: { color: 'red', textDecorationLine: 'underline' },
  passwordWrapper: { position: 'relative' },
  showPasswordButton: { position: 'absolute', right: 10, top: 12 },
});

export default Login;
