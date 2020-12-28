import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View, Text, ScrollView} from 'react-native';
import {setAddUserList } from '../actions/action';
import {connect} from 'react-redux';

class Phonebook extends Component {

  render () {
    return (
        <ScrollView style={{flex: 1}}> 
        <TextInput onChangeText={(text) => (this.inputName = text)} placeholder='Введите имя' style={{flex: 0.4, fontSize: 25}}/>
        <TextInput onChangeText={(text) => (this.inputNumber = text)} placeholder='Введите номер телефона' style={{flex: 0.4, fontSize: 25}}/>
        <TouchableOpacity onPress={() => this.props.addName(this.inputName, this.inputNumber)} style={{flex: 0.2, backgroundColor: 'pink'}}>
          <Text style={{fontSize: 30, alignSelf: 'center', justifyContent: 'center'}}>
            Добавить контакт
          </Text>
        </TouchableOpacity>
        {this.props.state.usersList.map((item,index) => (
          <View key={index} style={{ marginTop: 10,borderTopWidth: 2}} >
        <Text style={{flex:0.5, fontSize: 20, marginLeft:5}}>
           Name: {item.userName}{"\n"}Phone: {item.userNumber}
        </Text>
        </View>
        ))}
        
      </ScrollView>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        addName(name, number) {dispatch(setAddUserList(name,number))},
    };
}

function mapStateToProps(state) {
    return {
        // name: state.reducer1.name,
        // number: state.reducer2.number,
        state,
        userName: state.usersList.userName,
        userNumber: state.usersList.userName,
        
    };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Phonebook);