import {StyleSheet} from 'react-native';
import theme from '../../../theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  centeral: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  moods: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  emoji_mood: {
    flexDirection: 'row',
  },
  emoji_sticker: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: theme.fontFamilyBold,
    color: 'teal',
    padding: 4,
  },
  date: {
    fontSize: 16,
    color: 'violet',
    fontFamily: theme.fontFamilyRegular,
  },
  square: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
  },
});
