import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {VictoryPie} from 'victory-native';
import {useMood} from '../../Provider/MoodDate';

const AnaliticScreen: React.FC = () => {
  const [mood] = useMood(true);

  const memoizedValue = useMemo(() => {
    let initialVal: any = [];
    mood.reduce((_: any, current: any) => {
      if (
        !initialVal.find((i: any) => i?.description === current.description)
      ) {
        initialVal.push({...current, count: 1});
      } else {
        return initialVal.map((i: any) =>
          i.description === current.description ? {...i, count: i.count++} : i,
        );
      }
    }, initialVal);
    return initialVal;
  }, [mood]);

  return (
    <View style={styles.container}>
      <VictoryPie
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        data={memoizedValue.map((m: any) => ({
          x: m.emoji,
          y: m.count,
        }))}
        labelRadius={({innerRadius}: any) => innerRadius + 75}
        style={{
          labels: {
            fontSize: 25,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AnaliticScreen;
