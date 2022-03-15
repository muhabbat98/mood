import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {VictoryBar, VictoryChart, VictoryPie} from 'victory-native';
import {useMood} from '../../Provider/MoodDate';

const AnaliticScreen: React.FC = () => {
  const [mood] = useMood(true);
  const [data, setData] = useState<any>([]);
  let initialVal: any = [];
  useEffect(() => {
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
  }, [mood]);
  useEffect(() => {
    // console.log( initialVal );
    if (initialVal.length) {
      setData(initialVal);
    }
  }, [initialVal]);
  console.log(data);
  return (
    <View style={styles.container}>
      {/* <VictoryChart width={350}>
        <VictoryBar data={mood} x="description" y="emoji"></VictoryBar>
      </VictoryChart> */}
      <VictoryPie
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        data={data.map((m: any) => ({
          x: m.emoji,
          y: m.count,
        }))}
        labelRadius={({innerRadius}: any) => innerRadius + 65}
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
    // backgroundColor: 'red',
  },
});

export default AnaliticScreen;
