import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, useColorScheme, View, ScrollView } from 'react-native';
import { SearchBar, Button, useTheme } from 'react-native-elements';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { getZipcodeInfo as getZipcodeInfoAction } from '../../store/zipcode/zipcode.action';
import {
  selectZipcodeInfoByCode,
  selectZipcodeInfoLoading,
  selectZipcodeInfoError,
} from '../../store/zipcode/zipcode.selector';
import { State } from '../../models/state';
import Container from '../../components/Container';
import ErrorMessage from '../../components/ErrorMessage';
import ZipcodeInfoTable from './ZipcodeInfoTable';

const ZipcodeValid: FC = () => {
  const [currentCode, setCurrentCode] = useState('');
  const colorScheme = useColorScheme();
  const { theme } = useTheme();
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
              containerStyle={[
                styles.searchBar,
                { backgroundColor: theme.colors?.white },
              ]}
              placeholder="Type Here..."
              onChangeText={value => setFieldValue('keyword', value)}
              name="keyword"
              value={values.keyword}
              showCancel
              showLoading={loading}
            />
            <Button title="Search" onPress={handleSubmit} />
          </View>
          <ScrollView style={styles.infoContainer}>
            {error ? (
              <ErrorMessage message={error} />
            ) : (
              <ZipcodeInfoTable data={zipCodeInfo} />
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
    paddingRight: 8,
  },
  searchBar: {
    flexGrow: 1,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: '100%',
  },
});

export default ZipcodeValid;
