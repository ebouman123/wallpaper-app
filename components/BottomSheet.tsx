import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// Define the props type
interface DownloadPictureProps {
  show: boolean;
}

const DownloadPicture: React.FC<DownloadPictureProps> = ({ show }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (show) {
      bottomSheetRef.current?.snapToIndex(0); // Open to the first snap point
    } else {
      bottomSheetRef.current?.close(); // Close the sheet
    }
  }, [show]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={useMemo(() => ["5%", "100%"], [])} // Customize snap points
        onChange={handleSheetChanges}
        enablePanDownToClose // Allow swiping down to close
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default DownloadPicture;
