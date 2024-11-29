import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { headerStyles } from "../../style/headerStyles";

const ProfileHeader = () => {
  const [profileImage, setProfileImage] = useState(null);

  // Gambar default dari folder lokal
  const defaultImage = require("../../assets/profile/Zenless_Zone_Zero_curved_box_logo.svg.png");

  // Fungsi untuk memilih gambar dari galeri
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Rasio 1:1 untuk avatar
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Perbarui state dengan URI gambar
    }
  };

  return (
    <View style={headerStyles.container}>
      {/* Gambar Profil */}
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={profileImage ? { uri: profileImage } : defaultImage}
          style={headerStyles.avatar}
        />
      </TouchableOpacity>
      {/* Informasi Profil */}
      <Text style={headerStyles.name}>ZZZ</Text>
      <Text style={headerStyles.username}>@ZZZ</Text>
      <Text style={headerStyles.bio}>
        This is the GitHub profile of ZZZ. Passionate about coding and
        open source and playing ZZZ.
      </Text>
      <View style={headerStyles.statsContainer}>
        <View style={headerStyles.statsItem}>
          <Text style={headerStyles.statsNumber}>42</Text>
          <Text style={headerStyles.statsLabel}>Repositories</Text>
        </View>
        <View style={headerStyles.statsItem}>
          <Text style={headerStyles.statsNumber}>1000</Text>
          <Text style={headerStyles.statsLabel}>Followers</Text>
        </View>
        <View style={headerStyles.statsItem}>
          <Text style={headerStyles.statsNumber}>50</Text>
          <Text style={headerStyles.statsLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
