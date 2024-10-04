import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation";

export const VIDEO_HEIGHT = 200;

const HeartRateAlert = () => {
  const [showVideo, setShowVideo] = useState(false); 

  const handleAlert = () => {
    Alert.alert("Esta funcionalidade ainda não está implementada.");
  };

  const onFullScreenChange = useCallback((isFullScreen: boolean) => { 
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, []);


  const openYouTube = () => {
    setShowVideo(true); 
  };

  return (
    <View style={styles.alertContainer}>
      <View style={styles.heartIconWrapper}>
        <Text style={styles.heartIcon}>❤️</Text>
      </View>
      <Text style={styles.alertTitle}>Atenção!!</Text>
      <Text style={styles.alertMessage}>
        Seus batimentos cardíacos ultrapassaram 100bpm.
      </Text>
      <Text style={styles.alertPrompt}>Você gostaria...</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={handleAlert} style={styles.alertButton}>
          <Text style={styles.alertButtonText}>Escutar Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openYouTube} style={styles.alertButton}>
          <Text style={styles.alertButtonText}>Participar de uma Imersão</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleAlert} style={styles.alertButtonFullWidth}>
        <Text style={styles.alertButtonText}>
          Estou apenas realizando uma atividade física.
        </Text>
      </TouchableOpacity>

      {showVideo && (
        <View style={styles.videoContainer}>
          <YoutubeIframe
            videoId="eKumVFvGHFA"
            height={VIDEO_HEIGHT}
            onFullScreenChange={onFullScreenChange}
          />
        </View>
      )}
    </View>
  );
};

export default HeartRateAlert;
