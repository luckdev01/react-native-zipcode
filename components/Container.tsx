import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, SafeAreaView, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-elements';

const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { theme } = useTheme();

  const viewStyles: ViewStyle[] = [
    styles.container,
    { backgroundColor: theme.colors?.white },
  ];

  return <SafeAreaView style={viewStyles}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
});

export default Container;
