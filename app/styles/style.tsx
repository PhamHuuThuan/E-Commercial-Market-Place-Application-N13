import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  direcBtn: {
    width: 24,
    height: 24,
  },
  profileBtn: {
    width: 48,
    height: 48,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  seeallBtn:{
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  seeallText:{
    color: 'BEBEBE',
    fontSize: 10,
    fontWeight: 'bold',
  },
  typeProduct:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 90,
    borderRadius: 10,
  },
  filterBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    borderRadius: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  filterText:{
    fontSize: 10,
    color: 'rgba(190, 190, 190, 1)',
  }
});

export default styles;
