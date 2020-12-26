import React from 'react';

import {
  StyleSheet, View,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import InsertTalentLayout from './layouts/InsertTalentLayout';

import TalentQuestionText from './components/TalentTexts';

import TalentInputContainer from './components/TalentInputContainer';

import {
  setUserMajor,
} from './actions/index';

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
  innerText: {
    color: '#ffb18b',
  },
});

const InsertMajorPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit, control, reset, errors,
  } = useForm();

  const passionInputRef = React.useRef();

  const onSubmit = (data) => {
    const { major } = data;
    dispatch(setUserMajor(major));
    reset({
      name: '',
    });
  };

  const comment = '전공';
  const dotNumber = 3;

  const nextPage = 'InsertTalentPage';

  return (
    <>
      <InsertTalentLayout
        dotNumber={dotNumber}
        navigation={navigation}
        navPage={nextPage}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <View style={styles.container}>
          <TalentQuestionText innerTextStyle={styles.innerText} comment={comment} />
          <TalentInputContainer
            placeholder="학과"
            control={control}
            name="major"
            refer={passionInputRef}
          />
        </View>
      </InsertTalentLayout>
    </>
  );
};

export default InsertMajorPage;
