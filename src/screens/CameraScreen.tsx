import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import {
  Camera,
  CameraCapturedPicture,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

const CameraScreen = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [picture, setPicture] = useState<CameraCapturedPicture>();
  const [status, requestPermission] = useCameraPermissions();

  const isFocus = useIsFocused();

  useEffect(() => {
    if (status?.canAskAgain) {
      requestPermission();
    }
  }, [status?.canAskAgain]);

  const cameraRef = useRef<CameraView>(null);

  if (picture) {
    return (
      <View className="flex-1">
        <Image source={{ uri: picture.uri }} className="flex-1" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      {isFocus && (
        <>
          <CameraView
            ref={cameraRef}
            style={{ flex: 1 }}
            onCameraReady={() => {
              setIsCameraReady(true);
            }}
            barcodeScannerSettings={{
              barcodeTypes: ["ean13", "qr"],
            }}
            onBarcodeScanned={(result) => {
              console.log(result.data);
            }}
          />
          <Button
            title="Take picture"
            onPress={async () => {
              if (isCameraReady) {
                try {
                  const pict = await cameraRef.current?.takePictureAsync();
                  setPicture(pict);
                  console.log(pict);
                } catch (error) {
                  console.log(error);
                }
              }
            }}
          />
        </>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
