import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const menuItems = [
  { id: '1', name: 'Help', icon: 'question-circle', rightIcon: 'chevron-right' },
  { id: '2', name: 'Payment', icon: 'credit-card', rightIcon: 'chevron-right' },
  { id: '3', name: 'My rides', icon: 'motorcycle', rightIcon: 'chevron-right' },
  { id: '4', name: 'Safety', icon: 'medkit', rightIcon: 'chevron-right' },
  { id: '5', name: 'Refer and earn', icon: 'gift', rightIcon: 'chevron-right' },
  { id: '6', name: 'Rewards', icon: 'star', rightIcon: 'chevron-right' },
  { id: '7', name: 'Notifications', icon: 'bell', rightIcon: 'chevron-right' },
];

const MenuPage = ({navigation}) => {

  // const menuBack=()=>{
  //   navigation.navigate('BookingScreen')
  // }
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} navigation={navigation} onPress={menuBack}>
      <FontAwesome5 name={item.icon} size={24} color="orange" />
      <Text style={styles.menuText}>{item.name}</Text>
      <Entypo name={item.rightIcon} size={20} color="lightgray" style={styles.rightIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome5 name="arrow-left" size={24} color="orange" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Menu</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileRow}>
          <FontAwesome5 name="user" size={24} color="black" style={styles.profileIcon} />
          <Text style={styles.profileName}>Saif Khan</Text>
          <Entypo name='chevron-right' size={20} color="lightgray" style={styles.rightIcon} />
        </View>
        <View style={styles.ratingRow}>
          <FontAwesome5 name="star" size={20} color="orange" />
          <Text style={styles.ratingText}> My rating</Text>
          <Entypo name='chevron-right' size={20} color="lightgray" style={styles.rightIcon} />
        </View>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.menuList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 8,
  },
  profile: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
    elevation: 2,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 8,
  },
  profileIcon: {
    marginRight: 16,
  },
  profileName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingBottom: 8,
  },
  ratingText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    marginLeft: 4,
  },
  rightIcon: {
    marginLeft: 'auto',
  },
  menuList: {
    paddingBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 16,
  },
});

export default MenuPage;
