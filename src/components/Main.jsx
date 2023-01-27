import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';


import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,

    },
});

const Main = () => {
    console.log("main")
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="/signin" element={<SignIn />} replace />
            </Routes>
        </View>
    );
};

export default Main;