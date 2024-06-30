import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import BackHeader from '../customizeComponents/BackHeader';
import PaymentWalletImage from '../assets/Images/payment.png';
import AmazonImage from '../assets/Images/amazon.png';
import PaytmImage from '../assets/Images/paytm.png';
import UpiImage from '../assets/Images/upi.png';
import CashImage from '../assets/Images/Cash.png';
import MwalletImage from '../assets/Images/M.png';
import CardImage from '../assets/Images/card.png';

const PaymentScreen = () => {
  const menuItems = [
    { name: 'Money wallet', icon: MwalletImage },
    { name: 'Cash', icon: CashImage },
    { name: 'Add Payment method', type: 'header' },
    { name: 'Pay by an UPI', icon: UpiImage },
    { name: 'Add Amazon pay', icon: AmazonImage },
    { name: 'Add Paytm wallet', icon: PaytmImage },
    { name: 'Add a Credit/Debit Card', icon: CardImage },
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return <Text style={styles.addPaymentText}>{item.name}</Text>;
    }

    return (
        <TouchableOpacity  style={styles.menuItem} >
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.menuText}>{item.name}</Text>
        </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <BackHeader />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Payment</Text>
        <Image source={PaymentWalletImage} style={styles.paymentImage} />
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>Proceed to pay</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft:24
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
    color:'black'
  },
  paymentImage: {
    width: 45,
    height: 45,
  },
  addPaymentText: {
    fontSize: 16.5,
    marginVertical: 10,
    color:'black',
    fontWeight:'500',
    marginLeft:24

  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 0.55,
    borderBottomColor: 'lightblack',
    marginLeft:24
  },
  icon: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color:'black'
  },
  proceedButton: {
    backgroundColor: '#f90',
    padding: 6,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    borderRadius: 20,
    marginHorizontal:90
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
