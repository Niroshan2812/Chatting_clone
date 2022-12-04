import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {useEffect} from 'react';
import {StreamChat} from'stream-chat';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// we use getstream.io to api --- api key
const api_Key = 'kzs7gd4mqk8e'; 
const client =StreamChat.getInstance(api_Key);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

useEffect(()=>{
const connectUser = async ()=>{
  await client.connectUser(
    {
      id:'niroshan',
      name: 'Jim Lahey', 
      image: 'https://i.imgur.com/fR9Jz14.png',
    },
    client.devToken('niroshan'),
  );
  console.log('User connected');
};
connectUser();
},[])


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    
    );
  }
}
