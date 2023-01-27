import { Text, View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import ItemInfo from './ItemInfo';


const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    textArea: {
        display: 'flex',
        flex: 1
    },
    language: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 5,
        marginBottom: 10,
        padding: 5,
        borderRadius: 5
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    name: {
        fontWeight: '700',
        fontSize: 16
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15
    },
});

const RepositoryItem = ({ repo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }}></Image>
                <View style={styles.textArea}>
                    <Text style={styles.name}>{repo.fullName}</Text>
                    <Text>{repo.description}</Text>
                    <Text style={styles.language}>{repo.language}</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <ItemInfo label={"Stars"} value={repo.stargazersCount} />
                <ItemInfo label={"Forks"} value={repo.forksCount} />
                <ItemInfo label={"Reviews"} value={repo.reviewCount} />
                <ItemInfo label={"Ratings"} value={repo.ratingAverage} />
            </View>
        </View>
    )

}

export default RepositoryItem