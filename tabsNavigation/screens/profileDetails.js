import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileDetails() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Detalles Usuario</Text>
                <Text style={styles.text}>Usando Navegación Stack</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        padding: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backText: {
        fontSize: 16,
        color: 'green',
        marginLeft: 8,
        fontWeight: 'bold',
    },

    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'blue',
    },
    text: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic',
    }
});