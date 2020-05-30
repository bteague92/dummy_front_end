import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const mapStateToProps = (state) => {
    return {
        user: state.userReducers.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

const Login = (props) => {

    const loginButtonPress = () => {
        props.login({ username: 'username', password: 'password' })
    }

    const logoutButtonPress = () => {
        props.logout()
    }

    return (
        <View style={styles.container}>
            <Text>{props.user.loggedIn ? "logged in" : "not logged in"}</Text>
            {props.user.loggedIn ?
                <TouchableHighlight onPress={logoutButtonPress}>
                    <Text>Log Out</Text>
                </TouchableHighlight> :
                <TouchableHighlight onPress={loginButtonPress}>
                    <Text>Log in</Text>
                </TouchableHighlight>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);