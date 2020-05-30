import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as Actions from '../actions';

const mapStateToProps = (state) => {
    return {
        user: state.userReducers.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

const loginButtonPress = () => {

    const login = () => {
        props.login({ username: 'username', password: 'password' })
    }

    return (
        <View style={styles.container}>
            <Text>{state.userReducers.user.loggedIn}</Text>
            {
                !props.user.loggedIn &&
                <TouchableHighlight onPress={loginButtonPress}>
                    <Text>Log In</Text>
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