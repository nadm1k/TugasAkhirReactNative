/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputEmail from './src/img/components/TextInputEmail';
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#F8C8DC'} barStyle="light-content" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Image
          source={require('./src/img/anya.jpg')}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>OWI</Text>
        <Text>Login</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            elevation: 5,
          }}
        />
        <Icon name="envelope" s size={10} color="#bdbdbd" />
        <TextInput
          value={email}
          style={{
            backgroundColor: '#FFFF',
            marginHorizontal: 20,
            borderRadius: 15,
            flex: 1,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            paddingVertical: 10,
            elevation: 5,
          }}
          placeholder="Masukkan Email"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <TextInput value={password} />
      <textinputEmail
        state={email}
        set={setEmail}
        Icon="envelope"
        placeholder="Masukkan Email"
        isPassword={false}
      />
      <textinputEmail
        state={password}
        set={setPassword}
        Icon="lock"
        placeholder="Masukkan Password"
        isPassword={true}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#F8C8DC',
          paddingVertical: 14,
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          elevation: 2,
        }}>
        <Text
          style={{color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 10,
        }}
      />
      <TouchableOpacity style={{flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{fontWeight: 'bold'}}>ForgotPassword?</Text>
      </TouchableOpacity>
    </View>
  );
};
