import { ScrollView, View, StyleSheet } from "react-native";
import NavBar from "../../components/navBar";
import ProfileHeader from "../../components/profileHeader";
import RepoItem from "../../components/repoItem";

const ProfileScreen = () => {
  const repositories = [
    { id: 1, name: "React Native", description: "A framework for building native apps.", language: "JavaScript" },
    { id: 2, name: "Octokit", description: "GitHub API toolkit.", language: "TypeScript" },
    { id: 3, name: "GitHub Docs", description: "Documentation for GitHub.", language: "Markdown" },
  ];

  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView>
        <ProfileHeader />
        {repositories.map((repo) => (
          <RepoItem
            key={repo.id}
            name={repo.name}
            description={repo.description}
            language={repo.language}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
