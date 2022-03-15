import React, {useState, useCallback, useEffect} from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import moment from 'moment';
import {styles} from './style';
import {useMood} from '../../Provider/MoodDate';
const butterfly = require('../../../assets/butterflies.png');

type SelectedMoodProps = {
  emoji: string,
  description: string,
};

const moodOptions: SelectedMoodProps[] = [
  {emoji: '🧑‍💻', description: 'studious'},
  {emoji: '🤔', description: 'pensive'},
  {emoji: '😊', description: 'happy'},
  {emoji: '🥳', description: 'celebratory'},
  {emoji: '😤', description: 'frustrated'},
];

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const MoodSelect: React.FC = () => {
  const [selected, setSelected] = useState<SelectedMoodProps>();
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const date = (d: any) => moment(d).format('DD MMM, YYYY h:mma');
  const [setState] = useMood(false);
  const initialButton = useSharedValue(0.6);

  useEffect(() => {
    if (selected) {
      initialButton.value = 1;
    } else {
      initialButton.value = 0.6;
    }
  }, [selected, initialButton]);

  const submitHandler = useCallback(() => {
    if (selected) {
      setState((prev: any) => [...prev, {...selected, date: date(new Date())}]);
      setIsPressed(true);
      setSelected(undefined);
      // initialButton.value = 'grey';
    } else {
      return Alert.alert('Please choose the mood');
    }
  }, [selected, setState]);

  const animateStyle = useAnimatedStyle(
    () => ({
      opacity: initialButton.value,
      transform: [
        initialButton.value === 1
          ? {scale: withTiming(1)}
          : {scale: withTiming(0.8)},
      ],
    }),
    [initialButton],
  );

  const selectHandler = (item: any) => {
    setSelected(item);
    // initialButton.value = 'teal';
  };
  return (
    <View>
      {isPressed ? (
        <View style={styles.container}>
          <View style={styles.moods}>
            <Image source={butterfly} />
          </View>
          <Pressable
            style={styles.submit_button}
            onPress={() => setIsPressed(false)}>
            <Text style={styles.submit_text}>Back</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.mood_question}>How are you right now ?</Text>
          <View style={styles.moods}>
            {moodOptions.map((m: any) => (
              <Pressable
                key={m.emoji}
                style={[
                  styles.emoji_button,
                  selected && selected.emoji === m.emoji
                    ? styles.selected
                    : {backgroundColor: 'transparent'},
                ]}
                onPress={() => selectHandler(m)}>
                <Text style={styles.emoji}>{m.emoji}</Text>
                {selected?.emoji === m.emoji ? (
                  <Text style={styles.description}>{m.description}</Text>
                ) : null}
              </Pressable>
            ))}
          </View>
          <ReanimatedPressable
            style={[styles.submit_button, animateStyle]}
            onPress={submitHandler}>
            {/* <Pressable > */}
            <Text style={styles.submit_text}>Submit</Text>
            {/* </Pressable> */}
          </ReanimatedPressable>
        </View>
      )}
    </View>
  );
};

export default MoodSelect;
