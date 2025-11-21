import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetails from './profileDetails';

const Stack = createNativeStackNavigator();

function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="green" />
                <Text style={styles.title}>Detalles del usuario</Text>
                <Pressable
                    style={[styles.button, styles.buttonProfile]}
                    onPress={() => navigation.navigate('ProfileDetails')}
                >
                    <Text style={styles.buttonText}>Ver Detalles</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default function Profile() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="ProfileHome" component={ProfileScreen} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    button: {
        backgroundColor: "#030303ff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        margin: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});