import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Platform, Modal } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController'
const controller = new UsuarioController();
export default function InsertUsuarioScreen() {

    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(true);
    const [guardando, setGuardando] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [nombreEditar, setNombreEditar] = useState('');

    const cargarUsuarios = useCallback(async () => {
        try {
            setLoading(true);
            const data = await controller.obtenerUsuarios();
            setUsuarios(data);
            console.log(`${data.length}`, "usuarios cargados");
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        const init = async () => {
            await controller.initialize();
            await cargarUsuarios();
        };
        init();
        controller.addListener(cargarUsuarios);
        return () => {
            controller.removeListener(cargarUsuarios);
        };
    }, [cargarUsuarios]);

    const handleAgregar = async () => {
        try {
            setGuardando(true);
            const usuarioCreado = await controller.crearUsuario(nombre);
            Alert.alert("Usuario creado", `${usuarioCreado.nombre} guardado con ID ${usuarioCreado.id}`);
            setNombre('');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setGuardando(false);
        }
    }

    const handleEliminar = (id, nombre) => {
        if (Platform.OS === 'web') {
            const confirmar = confirm(`¿Deseas eliminar a ${nombre}?`);
            if (confirmar) {
                (async () => {
                    try {
                        setGuardando(true);
                        await controller.eliminarUsuario(id);
                        alert('Éxito', `${nombre} ha sido eliminado`);
                    } catch (error) {
                        alert('Error', error.message);
                    } finally {
                        setGuardando(false);
                    }
                })();
            }
            return;
        }
        Alert.alert(
            'Eliminar usuario',
            `¿Deseas eliminar a ${nombre}?`,
            [
                { text: 'Cancelar', onPress: () => { }, style: 'cancel' },
                {
                    text: 'Eliminar',
                    onPress: async () => {
                        try {
                            setGuardando(true);
                            await controller.eliminarUsuario(id);
                            Alert.alert('Éxito', `${nombre} ha sido eliminado`);
                        } catch (error) {
                            Alert.alert('Error', error.message);
                        } finally {
                            setGuardando(false);
                        }
                    },
                    style: 'destructive'
                }
            ]
        );
    }
    const handleEditar = (id, nombreActual) => {
        setUsuarioEditando(id);
        setNombreEditar(nombreActual);
        setModalVisible(true);
    }

    const handleActualizarUsuario = async () => {
        try {
            setGuardando(true);
            await controller.actualizarUsuario(usuarioEditando, nombreEditar);
            Alert.alert('Éxito', 'Usuario actualizado correctamente');
            setModalVisible(false);
            setUsuarioEditando(null);
            setNombreEditar('');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setGuardando(false);
        }
    }

    const cerrarModal = () => {
        setModalVisible(false);
        setUsuarioEditando(null);
        setNombreEditar('');
    }

    const renderUsuario = ({ item, index }) => {
        return (
            <View style={styles.userItem}>
                <View style={styles.userNumber}>
                    <Text style={styles.userNumberText}>{index + 1}</Text>
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{item.nombre}</Text>
                    <Text style={styles.userId}>ID: {item.id}</Text>
                    <Text style={styles.userDate}>{new Date(item.fecha_creacion).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttonDelete}
                        onPress={() => handleEliminar(item.id, item.nombre)}>
                        <Text style={styles.buttonText}>
                            Eliminar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonEdit}
                        onPress={() => handleEditar(item.id, item.nombre)}>
                        <Text style={styles.buttonText}>
                            Editar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


    return (

        <View style={styles.container}>

            {/* Zona del encabezado */}

            <Text style={styles.title}> INSERT & SELECT</Text>
            <Text style={styles.subtitle}>
                {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
            </Text>

            {/* Zona del INSERT */}

            <View style={styles.insertSection}>
                <Text style={styles.sectionTitle}> Insertar Usuario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Escribe el nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}
                    editable={!guardando}
                />

                <TouchableOpacity
                    style={[styles.button, guardando && styles.buttonDisabled]}
                    onPress={handleAgregar}
                    disabled={guardando} >

                    <Text style={styles.buttonText}>
                        {guardando ? ' Guardando...' : 'Agregar Usuario'}
                    </Text>

                </TouchableOpacity>

            </View>



            {/* Zona del SELECT */}

            <View style={styles.selectSection}>

                <View style={styles.selectHeader}>

                    <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

                    <TouchableOpacity
                        style={styles.refreshButton}
                        onPress={cargarUsuarios} >
                        <Text style={styles.refreshText}>Recargar</Text>
                    </TouchableOpacity>

                </View>

                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#007AFF" />
                        <Text style={styles.loadingText}>Cargando usuarios...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={usuarios}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderUsuario}
                        ListEmptyComponent={
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}> No hay usuarios</Text>
                                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
                            </View>
                        }
                        contentContainerStyle={usuarios.length === 0 && styles.emptyList}
                    />
                )}


            </View>

            {/* Modal para editar usuario */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={cerrarModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Editar Usuario</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Nombre del usuario"
                            value={nombreEditar}
                            onChangeText={setNombreEditar}
                            editable={!guardando}
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.modalButtonCancel]}
                                onPress={cerrarModal}
                                disabled={guardando}
                            >
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.modalButtonSave, guardando && styles.buttonDisabled]}
                                onPress={handleActualizarUsuario}
                                disabled={guardando}
                            >
                                <Text style={styles.modalButtonText}>
                                    {guardando ? 'Guardando...' : 'Guardar'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    insertSection: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 12,
        marginBottom: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectSection: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 12,
        marginBottom: 12,
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 15,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    buttonDelete: {
        backgroundColor: '#FF3B30',
        padding: 8,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    buttonEdit: {
        backgroundColor: '#007AFF',
        padding: 8,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
    },
    selectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    refreshButton: {
        padding: 8,
    },
    refreshText: {
        color: '#007AFF',
        fontSize: 14,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
        fontSize: 14,
    },
    userItem: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
        alignItems: 'flex-start',
    },
    userNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 2,
        flexShrink: 0,
    },
    userNumberText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    userId: {
        fontSize: 11,
        color: '#007AFF',
        marginBottom: 1,
    },
    userDate: {
        fontSize: 11,
        color: '#999',
    },
    emptyContainer: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#bbb',
    },
    mvcInfo: {
        backgroundColor: '#e3f2fd',
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
    },
    mvcTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1976D2',
        marginBottom: 8,
    },
    mvcText: {
        fontSize: 12,
        color: '#555',
        lineHeight: 18,
    },
    bold: {
        fontWeight: 'bold',
        color: '#1976D2',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        width: '85%',
        maxWidth: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 16,
    },
    modalButtonCancel: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalButtonSave: {
        flex: 1,
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },

});