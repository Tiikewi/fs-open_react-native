import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 15,
        backgroundColor: theme.appBar.backgroundColor,
        height: theme.appBar.height,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab />
    </View>;
};

export default AppBar;