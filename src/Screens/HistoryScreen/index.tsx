import React, {FC} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';

import {styles} from './style';
import {useMood} from '../../Provider/MoodDate';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  Directions,
} from 'react-native-gesture-handler';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type AnimatableProps = {
  item: any,
};

const HistoryScreen: FC = () => {
  const [mood] = useMood(true);

  return (
    <FlatList
      data={mood.slice().reverse()}
      keyExtractor={(item: any) => item.date + item.description}
      renderItem={({item}) => <AnimatableComponent item={item} />}
    />
  );
};

const AnimatableComponent: FC<AnimatableProps> = ({item}) => {
  const [setState] = useMood(false);
  const offset = useSharedValue(0);

  const deleteHandle = (i: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setState((prev: any) =>
      prev.filter(
        (p: any) => p.date + p.description !== i.date + i.description,
      ),
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(offset.value)}],
  }));

  const gesture = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(e => {
      offset.value = (e.absoluteX + e.x) * 2;
    })
    .onEnd(() => {
      runOnJS(deleteHandle)(item);
    });

  return (
    <GestureDetector key={item.date + item.description} gesture={gesture}>
      <Animated.View style={[styles.moods, animatedStyle]}>
        <View style={styles.emoji_mood}>
          <Text style={styles.emoji_sticker}>{item.emoji}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View>
          <Pressable onPress={() => deleteHandle(item)}>
            <Text>Delete</Text>
          </Pressable>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default HistoryScreen;
