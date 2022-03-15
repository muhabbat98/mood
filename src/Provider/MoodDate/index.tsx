import React, {createContext, FC, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
type MoodContext = {
  mood: any,
  setMood: () => void,
};

const MoodContext = createContext<MoodContext[]>([]);

const myKey = 'my-mood';

const setStorage = async (date: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(myKey, JSON.stringify(date));
  } catch {}
};

const getStorage = async () => {
  try {
    const result = await AsyncStorage.getItem(myKey);
    return result ? JSON.parse(result) : [];
  } catch {}
};

export const MoodProvider: FC = ({children}) => {
  const [state, setState] = useState<MoodContext[]>([]);
  useEffect(() => {
    (async () => {
      const existDate = await getStorage();
      setState((prev: any) => [...prev, ...existDate]);
    })();
  }, []);

  useEffect(() => {
    setStorage([...state]);
  }, [state]);

  return (
    <MoodContext.Provider value={{state, setState}}>
      <MoodContext.Consumer>{() => children}</MoodContext.Consumer>
    </MoodContext.Provider>
  );
};

export const useMood = (setterOnly: boolean) => {
  const {state, setState} = useContext(MoodContext);
  return setterOnly ? [state, setState] : [setState];
};
