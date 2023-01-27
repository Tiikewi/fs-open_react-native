import { StyleSheet, Pressable, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.appBar.tabColor,
        fontSize: theme.appBar.tabFontSize,
        fontWeight: '500'
    }
});


const AppBarTab = () => {
    return (
        <Pressable>
            <Text style={styles.text}>Repositories</Text>
        </Pressable>
    )

}

export default AppBarTab