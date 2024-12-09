import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Alert, ImageBackground, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  const handleMissingData = (value) => {
    return value ? value : 'N/A';
  };

  const fetchUserProfile = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://67094eabaf1a3998baa1181b.mockapi.io/ApiLogin/${userId}`);
      const userData = await response.json();
      setUser(userData);
      setFormData({
        username: userData.username,
        email: userData.email,
        phone: userData.phone || '',
        address: userData.address || '',
        dob: userData.dob || '',
        bio: userData.bio || '',
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      Alert.alert('Error', 'Could not load your profile. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchUserProfile();
    }
  }, [userId, fetchUserProfile]);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSaveProfile = async () => {
    try {
      await fetch(`https://67094eabaf1a3998baa1181b.mockapi.io/ApiLogin/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setUser({ ...user, ...formData });
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
      Alert.alert('Error', 'Could not save profile. Please try again later.');
    }
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleGoBack = () => {
    navigation.navigate('HomeProductListing');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : user ? (
        <ImageBackground
          source={require('../../assets/image/illustration.png')}
          style={styles.background}
          imageStyle={styles.backgroundImage}
        >
          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Icon name="arrow-left" size={20} color="#000" style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.profileContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../../assets/image/iconprofile.png')} style={styles.profileImage} />
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.username}>{user.username}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>

            <View style={styles.infoSections}>
              <ProfileInfoRow
                label="Username"
                value={isEditing ? formData.username : user.username}
                onChange={(value) => handleChange('username', value)}
                editable={isEditing}
                iconName="user" // Icon for username
              />
              <ProfileInfoRow
                label="Email"
                value={isEditing ? formData.email : user.email}
                onChange={(value) => handleChange('email', value)}
                editable={isEditing}
                iconName="mail" // Icon for email
              />
              <ProfileInfoRow
                label="Phone"
                value={isEditing ? formData.phone : handleMissingData(user.phone)}
                onChange={(value) => handleChange('phone', value)}
                editable={isEditing}
                iconName="phone" // Icon for phone
              />
              <ProfileInfoRow
                label="Address"
                value={isEditing ? formData.address : handleMissingData(user.address)}
                onChange={(value) => handleChange('address', value)}
                editable={isEditing}
                iconName="home" // Icon for address
              />
              <ProfileInfoRow
                label="Date of Birth"
                value={isEditing ? formData.dob : handleMissingData(user.dob)}
                onChange={(value) => handleChange('dob', value)}
                editable={isEditing}
                iconName="calendar" // Icon for date of birth
              />
              <ProfileInfoRow
                label="Bio"
                value={isEditing ? formData.bio : handleMissingData(user.bio)}
                onChange={(value) => handleChange('bio', value)}
                editable={isEditing}
                iconName="edit" // Icon for bio
              />
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.editButton} onPress={isEditing ? handleSaveProfile : handleEditProfile}>
              <Icon name={isEditing ? 'save' : 'edit'} size={20} color="#fff" style={styles.icon} />
              <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Icon name="log-out" size={20} color="#fff" style={styles.icon} />
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </ScrollView>
  );
};

const ProfileInfoRow = ({ label, value, onChange, editable, iconName }) => (
  <View style={styles.infoRow}>
    <View style={styles.iconLabelWrapper}>
      {iconName && <Icon name={iconName} size={20} color="#333" style={styles.icon} />}
      <Text style={styles.infoLabel}>{label}:</Text>
    </View>
    {editable ? (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    ) : (
      <View style={styles.infoTextWrapper}>
        <Text style={styles.infoText}>{value}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    opacity: 0.4,
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  imageWrapper: {
    borderRadius: 70,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ddd',
    padding: 4,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  detailsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  username: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  infoSections: {
    width: '100%',
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  infoRow: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 18,
  },
  iconLabelWrapper: {
    flexDirection: 'row', // Aligns icon and label horizontally
    alignItems: 'center', // Centers them vertically
  },
  icon: {
    marginRight: 5, // Space between icon and label
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  infoTextWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
    width: '48%',
  },
  logoutButton: {
    backgroundColor: '#F44336',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  loading: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 10,
  },
});

export default Profile;
