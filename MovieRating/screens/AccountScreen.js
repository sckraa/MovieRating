import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../images/account-image.jpg")} style={styles.imageBackground}></ImageBackground>
      <View style={styles.loginContainer}>
        <Text style={styles.label}>Login :</Text>
        <TextInput style={styles.textInput} onChangeText={ () => {} } />
        
        <Text style={styles.label}>Password :</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={ () => {} }/>
        <View style={styles.button}>
          <Button title={"Log in"} onPress={ () => {} } />
        </View>
      </View>
    </View>
  );
}

AccountScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    flex: 1,
    opacity: 1
  },
  loginContainer: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  label: {
    marginLeft: 15,
    marginVertical: 15,
    fontSize: 18
  },  
  textInput: {
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10
  },
  button: {
    width: 100,
    marginTop: 20,
    alignItems: 'center'
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
