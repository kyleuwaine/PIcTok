import PhotoPreviewSection from '@/components/PhotoPreviewSection';
import { AntDesign } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { SetStateAction, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Camera from '@/components/Camera';
import RegisterScreen from '@/components/RegisterScreen';
import LogInScreen from '@/components/LogInScreen';

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState("login");

  const updateComponent = (newComponent: SetStateAction<string>) => {
    setCurrentComponent(newComponent);
  };

  switch(currentComponent) {
    case 'login':
      return <LogInScreen onClickRegister={updateComponent}></LogInScreen>
    case 'register':
      return <RegisterScreen onClickLogin={updateComponent}></RegisterScreen>
    case 'camera':
      return <Camera></Camera> 
  }

}