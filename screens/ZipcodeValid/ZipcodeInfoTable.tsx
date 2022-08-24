import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';

import { ZipcodeInfo } from '../../models/zipcode';

type Props = {
  data: ZipcodeInfo | undefined;
};

const ZipcodeInfoTable: FC<Props> = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      {Object.keys(data).map(key => (
        <View key={key}>
          <View style={styles.row}>
            <Text style={styles.keyColumn}>{key}</Text>
            <Divider orientation="vertical" width={2} />
            {typeof data[key] === 'string' && (
              <Text style={styles.infoColumn}>{data[key]}</Text>
            )}
          </View>
          <View style={styles.child}>
            {data[key] && Array.isArray(data[key]) ? (
              <View>
                {data[key].map((value: any, index: number) => (
                  <ZipcodeInfoTable key={index} data={value} />
                ))}
              </View>
            ) : data[key] && typeof data[key] === 'object' ? (
              <ZipcodeInfoTable data={data[key]} />
            ) : null}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%' },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    borderBottomWidth: 1,
    width: '100%',
  },
  keyColumn: {
    width: '40%',
  },
  infoColumn: {
    paddingLeft: 10,
  },
  child: {
    paddingLeft: 20,
  },
});

export default ZipcodeInfoTable;
