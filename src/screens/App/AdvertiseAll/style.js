import {StyleSheet} from 'react-native';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';

const styles = StyleSheet.create({
  header: {
    fontSize: mvs(14),
    marginLeft: mvs(10),
  },
  headerContainer: {
    padding: mvs(10),
    backgroundColor: colors.white,
    marginVertical: mvs(20),
  },
  content: {
    padding: mvs(10),
    backgroundColor: colors.white,
    marginVertical: mvs(10),
  },
  subCategoryItem: {
    padding: mvs(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  subCategoryText: {fontSize: mvs(14)},
});
export default styles;
