import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FullTheme, useTheme } from 'react-native-elements';

type Props = {
  message: string;
};

const ErrorMessage: FC<Props> = ({ message }: Props) => {
  const { theme } = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.fill}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const useStyles = (theme: Partial<FullTheme>) =>
  StyleSheet.create({
    fill: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    errorText: {
      color: theme?.colors?.error ?? 'red',
    },
  });

export default ErrorMessage;
