import React, { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import DownloadPicture from "@/components/BottomSheet";

function Explore() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Explore</Text>
      <Button title="Open Bottom Sheet" onPress={() => setPictureOpen(true)} />
      <Button
        title="Close Bottom Sheet"
        onPress={() => setPictureOpen(false)}
      />
      <DownloadPicture show={pictureOpen} />
    </SafeAreaView>
  );
}

export default Explore;
