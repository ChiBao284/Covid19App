import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { firebaseApp } from '../server/firebase'
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Images, StyleUtils } from '../Theme';
import { LinearGradient, GoogleSignin } from '../Lib';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: '112694044940-iupd6i38jporc1494ndnf126b391ep4p.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  iosClientId: '112694044940-iupd6i38jporc1494ndnf126b391ep4p.apps.googleusercontent.com',
})

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      isLogin: false,
      signUp: false
    }
    // this.register() = this.register().bind(this)
  }
  register = () => {
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.userName, this.state.passWord).then(() => {
      Alert.alert(
        'Đăng kí thành công',
      );
      this.props.navigation.navigate('Home')
    }).catch(function (error) {
      Alert.alert(error.message)
    })
  };
  login = () => {
    const { navigation } = this.props
    // const { userName, passWord } = this.state
    if (this.state.userName == '' || this.state.passWord == '') { return (Alert.alert('Empty account or password')) }
    else {
      firebaseApp.auth().signInWithEmailAndPassword(this.state.userName, this.state.passWord).then(() =>
        navigation.navigate('Home')
      ).catch(function (error) {
        alert(error.message)
      })
    }

  };
  onLoginFacebook = () => {
    const { navigation } = this.props
    LoginManager.logInWithPermissions(["public_profile", "email"])
      .then(
        (result) => {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            navigation.navigate('Home')
            this.setState({ isLogin: true })
            console.log(
              "Login success with permissions: " +
              result.grantedPermissions.toString()
            );
            return AccessToken.getCurrentAccessToken()
          }
        }
      )
      .then(data => {
        const firebase = require('firebase')
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
        console.log(credential)
        return firebase.auth().signInWithCredential(credential)
      })
      .then((curentUser) => {
        console.log(`Login with user: ` + JSON.stringify(curentUser))
      })
      .catch((e) => { console.log('error: ' + e) })
  }
  onLoginGoogle = () => {
    const { navigate } = this.props.navigation
    GoogleSignin
      .signIn()
      .then(data => {
        console.log('BAO1')
        const firebase = require('firebase')
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken)
        return firebase.auth().signInWithCredential(credential)

      })
      .then((curentUser) => {
        navigate('Home')
        console.log(`Login with user: ` + (curentUser))
      })
      .catch((e) => {
        console.log('error: ' + e)
        console.log('BAO3')
      })
  }

  renderSignIN() {
    return (
      <>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 0.4 }}>
          <ImageBackground source={Images.imgSign} style={styles.imgSign} resizeMode={'contain'}>
            <Text style={styles.title}>Sign In</Text>
          </ImageBackground>
        </View>

        <View style={{ flex: 0.3, marginTop: 20, alignItems: "center" }}>
          <TextInput style={styles.txtInput}
            onChangeText={(user) => { this.setState({ userName: user }) }}
            placeholder={'Email'}
          />
          <TextInput style={styles.txtInput} secureTextEntry={true}
            onChangeText={(pass) => this.setState({ passWord: pass })}
            placeholder={'Password'} />
          <Text style={{ marginVertical: 10, color: '#707070' }}>Forgot your password?</Text>
          <TouchableOpacity
            onPress={this.login}>
            <LinearGradient colors={['#DD5E89', '#F7BB97', '#DD5E89']} start={{ x: 0, y: 0 }} end={{ x: 3, y: 3 }} style={{ borderRadius: StyleUtils.screenWidth / 2 }}>
              <Text style={styles.buttonLogin}>
                Sign in
            </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text style={{ color: '#707070' }}> Don't have account? </Text>
            <TouchableOpacity onPress={() => { this.setState({ signUp: true }) }}>
              <Text style={{ color: '#00d2ff' }}>
                Create account</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 0.3 }}>
          <Text style={{ textAlign: "center", marginBottom: 5, color: '#707070' }}>Sign in with</Text>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={this.onLoginFacebook}>
              <Image source={Images.loginFacebook} style={styles.buttonSocial} resizeMode={'cover'} />
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}><Text></Text></View>
            <TouchableOpacity onPress={this.onLoginGoogle}>
              <Image source={Images.loginGoogle} style={styles.buttonSocial} resizeMode={'cover'} />
            </TouchableOpacity>
          </View>

        </View>
      </>
    )
  }
  renderSignUp() {
    return (
      <>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 0.4 }}>
          <ImageBackground source={Images.imgSign} style={styles.imgSign} resizeMode={'contain'}>
            <Text style={styles.title}>Sign Up</Text>
          </ImageBackground>
        </View>

        <View style={{ flex: 0.4, marginTop: 20, alignItems: "center" }}>
          <TextInput style={styles.txtInput}
            placeholder={'Username'}
          />
          <TextInput style={styles.txtInput}
            placeholder={'Phone'}
          />
          <TextInput style={styles.txtInput}
            onChangeText={(user) => { this.setState({ userName: user }) }}
            placeholder={'Email'}
          />
          <TextInput style={styles.txtInput} secureTextEntry={true}
            onChangeText={(pass) => this.setState({ passWord: pass })}
            placeholder={'Password'} />
          <Text style={{ marginVertical: 10, color: '#707070' }}>Forgot your password?</Text>
          <TouchableOpacity
            // onPress={this.login}>
            onPress={this.register}>
            <LinearGradient colors={['#DD5E89', '#F7BB97', '#DD5E89']} start={{ x: 0, y: 0 }} end={{ x: 3, y: 3 }} style={{ borderRadius: StyleUtils.screenWidth / 2 }}>
              <Text style={styles.buttonLogin}>
                Sign up
            </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Text style={{ color: '#707070' }}>Do you already have an account? </Text>
            <TouchableOpacity onPress={() => this.setState({ signUp: false })}>
              <Text style={{ color: '#00d2ff' }}>
                Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 0.2 }}>
          <Text style={{ textAlign: "center", marginBottom: 5, color: '#707070' }}>Sign up with</Text>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={this.onLoginFacebook}>
              <Image source={Images.loginFacebook} style={styles.buttonSocial} resizeMode={'cover'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onLoginGoogle}>
              <Image source={Images.loginGoogle} style={styles.buttonSocial} resizeMode={'cover'} />
            </TouchableOpacity>
          </View>

        </View>
      </>
    )
  }
  render() {
    return (
      <View style={{ alignItems: "center", marginTop: 10, flex: 1 }}>
        {this.state.signUp ? this.renderSignUp() : this.renderSignIN()}
      </View>
    )
  }

}
export default LoginScreen;
const styles = StyleSheet.create({
  txtInput: {
    width: StyleUtils.screenWidth * 0.65,
    height: StyleUtils.screenHeight * 0.045,
    borderColor: 'transparent',
    borderRadius: StyleUtils.screenWidth / 2,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#E2F5FC',
    fontWeight: '100'
  },
  imgSign: {
    width: StyleUtils.screenWidth,
    height: StyleUtils.screenHeight * 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    // fontSize: 45,
    fontSize: StyleUtils.screenWidth * 0.15,
    fontWeight: '200'
  },
  buttonLogin: {
    width: StyleUtils.screenWidth * 0.35,
    height: StyleUtils.widthDevice < 1 ? StyleUtils.screenWidth * 0.125 : StyleUtils.screenWidth * 0.08,
    marginHorizontal: 15,
    color: 'white',
    textAlign: "center",
    paddingVertical: StyleUtils.widthDevice < 1 ? 0 : 10,
    fontSize: 20,
    marginBottom: StyleUtils.widthDevice < 1 ? 0 : 15,
    fontWeight: '200'
  },
  buttonSocial: {
    width: 35,
    height: 35,
    marginHorizontal: 10
  }
})
