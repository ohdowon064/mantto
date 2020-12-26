import React, { useRef, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Rating } from 'react-native-ratings';

import { useForm } from 'react-hook-form';

import Input from './components/Input';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  screenContainer2: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  closingGreetingContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 27,
  },
  closingGreetingContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 50,
  },
  button1: {
    backgroundColor: 'rgb(32,191,249)',
    width: 315,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },
  button2: {
    width: 68,
    height: 19,
  },
  reviewInput: {
    borderBottomWidth: 2,
    width: 315,
    height: 50,
    borderBottomColor: 'rgb(32,191,249)',
    marginBottom: 20,
  },
});

function StarRating() {
  const [isCompleteStars, setCompleteStars] = useState(false);

  const [isReviewStart, setIsReviewStart] = useState(false);

  const [readOnly, setReadOnly] = useState(false);

  const [starValue, setStarValue] = useState(5);

  const {
    handleSubmit, control, reset, errors,
  } = useForm();

  const inputRef = useRef();
  const reStartRating = () => {
    setCompleteStars(false);
  };

  const ratingCompleted = (rating) => {
    setStarValue(rating);
    setCompleteStars(true);
    setReadOnly(true);
  };

  const reviewCommentStart = () => {
    setIsReviewStart(true);
    setCompleteStars(false);
  };

  return (
    <>
      <View style={styles.screenContainer}>
        <View style={styles.closingGreetingContainer}>
          <Text style={{ fontSize: 27, color: 'rgb(62,74,89)' }}>
            수고하셨습니다.
          </Text>
        </View>
        <View style={styles.closingGreetingContainer}>
          <Text style={{ fontSize: 12, color: 'rgb(155,155,155)' }}>
            재능 기부 수업이 완료되었습니다.
          </Text>
        </View>
        <View style={styles.closingGreetingContainer2}>
          <Text style={{ fontSize: 16, color: 'rgb(155,155,155)' }}>
            수고한 만또에게 별점을 남겨주세요.
          </Text>
        </View>
        <Rating
          type="star"
          fractions={1}
          startingValue={starValue}
          readonly={readOnly}
          showRating={false}
          onStartRating={reStartRating}
          onFinishRating={ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </View>

      <View style={styles.screenContainer2}>
        {isReviewStart ? (
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 10, color: '#868e96' }}>오늘 재능 기부 수업이 어떠셨나요? </Text>
            <Input
              name="reviewComment"
              reference={inputRef}
              control={control}
              inputStyle={styles.reviewInput}
              placeholder="리뷰"
            />
          </View>
        ) : null}

        {isCompleteStars ? (
          <View
            style={styles.button1}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 15, color: 'white' }}>
              완료되었습니다.
            </Text>
          </View>
        ) : null}

        {isCompleteStars ? (
          <TouchableOpacity
            style={styles.button2}
            onPress={() => reviewCommentStart()}
          >
            <Text style={{ color: 'rgb(155,155,155)', fontSize: 14 }}>후기 남기기</Text>
          </TouchableOpacity>
        ) : null}
        {isReviewStart
          ? (
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {}}
            >
              <Text style={{ fontSize: 15, color: 'white' }}>
                완료
              </Text>
            </TouchableOpacity>
          )
          : null}
      </View>
    </>
  );
}
export default StarRating;
