/* eslint-disable prettier/prettier */
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

const LoginForm = ({email, password}) => {
    function handleSubmit (e) {
        e.preventDefault();
    }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.container}>
        <form action="/" method="post" onSubmit={handleSubmit}>
            <input type="email" name="id" placeholder="ID" value={email}/>
            <input type="password"name="password" placeholder="PASSWORD"/>
            <input type="submit"/>
        </form>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginForm;


const styles = StyleSheet.create({

});
