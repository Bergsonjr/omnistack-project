import React from 'react';
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

function Profile({ navigation }) {
    const gitHubUserName = navigation.getParam('github_username')
    return <WebView style={styles.profile} source={{ uri: `https://github.com/${gitHubUserName}` }} />
}

const styles = StyleSheet.create({
    profile: {
        flex: 1
    }
})

export default Profile