import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../../theme';

type Props = {
  header: string;
  detail?: string | null;
  isError: boolean;
};

export default function CallMessage(props: Props) {
  return (
    <View style={[styles.container, props.isError && styles.errorContainer]}>
      <Text
        style={[
          styles.text,
          styles.headerText,
          props.isError ? styles.errorText : {},
        ]}
      >
        {props.header}
      </Text>
      {props.detail && <Text style={styles.text}>{props.detail}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  errorContainer: {
    backgroundColor: theme.colors.greyLightest,
  },
  text: {
    fontFamily: theme.fontFamily.body,
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.blueDark,
  },
  headerText: {
    fontWeight: 'bold',
  },
  errorText: {
    color: theme.colors.red,
  },
});
