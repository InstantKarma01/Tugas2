import { View, Text } from "react-native";
import { repoStyles } from "../../style/repoStyles";

const RepoItem = ({ name, description, language }) => {
  return (
    <View style={repoStyles.container}>
      <Text style={repoStyles.repoName}>{name}</Text>
      <Text style={repoStyles.repoDescription}>{description}</Text>
      <Text style={repoStyles.repoLanguage}>{language}</Text>
    </View>
  );
};

export default RepoItem;
