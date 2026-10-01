import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Reemplaza TU_IP_LOCAL por la IP que obtuviste en el Paso 4
const API_URL = 'http://192.168.1.38:3000'; 

export default function App() {
  const [mensaje, setMensaje] = useState<string>('');

  const cargarMensaje = async () => {
    try {
      const respuesta = await fetch(API_URL + '/mensaje');
      const datos = await respuesta.json();
      console.log('Datos recibidos:', datos);
      setMensaje(datos.texto);
    } catch (error) {
      console.error('Error al conectar con NestJS:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Mi primera conexión</Text>

      <Button
        title="Conectar con Nest"
        onPress={cargarMensaje}
      />

      {mensaje ? (
        <Text style={{ marginTop: 20, color: 'green' }}>{mensaje}</Text>
      ) : null}
    </SafeAreaView>
  );
}