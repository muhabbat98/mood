import {StyleSheet} from 'react-native';
import theme from '../../../theme';
export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'teal',
    padding: 16,
    borderRadius: 8,
    zIndex: 5,
    justifyContent: 'space-between',
    // width: '100%',
    // alignSelf: 'stretch',
  },
  moods: {
    flexDirection: 'row',
    // alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  mood_question: {
    color: 'teal',
    padding: 8,
    fontSize: 20,
    fontFamily: theme.fontFamilyBold,
  },
  emoji_button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
    position: 'relative',
    zIndex: 20,
  },
  emoji: {
    fontSize: 20,
    zIndex: 22,
  },
  selected: {
    backgroundColor: 'teal',
  },
  description: {
    position: 'absolute',
    bottom: -16,
    width: 80,
    textAlign: 'center',
    color: 'teal',
    fontFamily: theme.fontFamilyBold,
  },
  submit_button: {
    marginTop: 16,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'teal',
  },
  submit_text: {
    color: '#fff',
    fontFamily: theme.fontFamilyBold,
  },
});
