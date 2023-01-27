import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    value: {
        fontWeight: '700',
    },
    label: {
        color: 'grey'
    }
});

const ItemInfo = ({ value, label }) => {
    let formattedValue = null
    if (value > 999) {
        formattedValue = Math.round(value / 100) / 10 + 'k'
    }
    return (
        <View style={styles.container}>
            <Text style={styles.value}>{formattedValue || value}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

export default ItemInfo