import { View, Text, StyleSheet } from "react-native";
import { navStyles } from "../../style/navStyles";

const NavBar = () => {
  return (
    <View style={navStyles.container}>
      <Text style={navStyles.title}>GitHub Profile Kayaknya</Text>
    </View>
  );
};

export default NavBar;
