import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Communications from 'react-native-communications';


const App = () => {

  const phoneNumbe_iNdB = 'Get in databace '
  
    const Phonenumber = phoneNumbe_iNdB ;
    const SmsText ='ThisIsAnExamppleTextForDonorDetailsSend';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

         {/* For make a phone call to donor contact number  */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={
            () => Communications.phonecall(Phonenumber,true)
          }>
          <Text style={styles.buttonTextStyle}>
            Make Phone Call
          </Text>
        </TouchableOpacity>

       
        
        {/* For make a phone call to donor contact number */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.text(Phonenumber,SmsText)
          }>
          <Text style={styles.buttonTextStyle}>
            Send a Text/iMessage
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
