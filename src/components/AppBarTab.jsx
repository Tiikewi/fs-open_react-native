import { StyleSheet, Pressable, Text } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.appBar.tabColor,
        fontSize: theme.appBar.tabFontSize,
        fontWeight: '500'
    },
    pressable: {
        marginRight: 15
    }
});


const AppBarTab = ({ to, link }) => {
    return (
        <Pressable style={styles.pressable}>
            <Link to={link}>
                <Text style={styles.text}>{to}</Text>
            </Link>
        </Pressable>
    )

}

export default AppBarTab