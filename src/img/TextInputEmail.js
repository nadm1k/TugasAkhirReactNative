TextInputEmail
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const textinputEmail = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', width: 50, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, elevation: 2 }}>
                </View>
                <Icon name={props.Icon} size={10} color="#bdbdbd" />
                <TextInput value={props.state} style={{ backgroundColor: '#FFFF', marginHorizontal: 20, borderRadius: 15, flex: 1, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, paddingVertical: 10, elevation: 5 }}
                    placeholder={props.placeholder}
                    onChangeText={text => props.set(text)} secureTextEntry={props.isPassword} />
            </View>
        </View>
    );
}

export default textinputEmail;

export default App; 
