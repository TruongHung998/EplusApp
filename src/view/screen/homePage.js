import React, {memo} from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";

const HomePage = memo(() => {
    return <SafeAreaView style={styles.container}>
      <Text>
          Home
      </Text>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {flex: 1},
})
export default HomePage
