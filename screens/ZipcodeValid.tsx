import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet, useColorScheme, View, ScrollView } from 'react-native';
import { SearchBar, Button, Text } from 'react-native-elements';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../components/Container';
import { getZipcodeInfo as getZipcodeInfoAction } from '../store/zipcode/zipcode.action';
import {
  selectZipcodeInfoByCode,
  selectZipcodeInfoLoading,
  selectZipcodeInfoError,
} from '../store/zipcode/zipcode.selector';
import { State } from '../models/state';
import ErrorMessage from '../components/ErrorMessage';

const ZipcodeValid: FC = () => {
  const [currentCode, setCurrentCode] = useState('');
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const zipCodeInfo = useSelector((state: State) =>
    selectZipcodeInfoByCode(state, currentCode),
  );
  const loading = useSelector((state: State) =>
    selectZipcodeInfoLoading(state),
  );
  const error = useSelector((state: State) => selectZipcodeInfoError(state));

  const getZipcodeInfo = useCallback(
    (keyword: string) => {
      if (!keyword) {
        return;
      }
      dispatch(getZipcodeInfoAction(keyword));
    },
    [dispatch],
  );

  useEffect(() => {}, []);

  const handleGetZipcodeInfo = useCallback(
    (keyword: string) => {
      getZipcodeInfo(keyword);
      setCurrentCode(keyword);
    },
    [getZipcodeInfo],
  );

  return (
    <Formik
      initialValues={{ keyword: '' }}
      onSubmit={values => {
        handleGetZipcodeInfo(values.keyword);
      }}>
      {({ handleSubmit, setFieldValue, values }) => (
        <Container>
          <View style={styles.searchContainer}>
            <SearchBar
              lightTheme={colorScheme === 'light'}
              containerStyle={styles.searchBar}
              placeholder="Type Here..."
              onChangeText={value => setFieldValue('keyword', value)}
              name="keyword"
              value={values.keyword}
              showCancel
              showLoading={loading}
            />
            <Button title="Search" onPress={handleSubmit} />
          </View>
          <ScrollView>
            {error ? (
              <ErrorMessage message={error} />
            ) : (
              <Text>{JSON.stringify(zipCodeInfo)}</Text>
            )}
          </ScrollView>
        </Container>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexGrow: 1,
  },
});

export default ZipcodeValid;
