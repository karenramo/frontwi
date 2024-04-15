// app.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// URL de la API
const apiUrl = 'http://localhost:5189/weather';

// Configuración de EJS
app.set('view engine', 'ejs');

// Función para obtener y listar los datos de la API
// Función para obtener y listar los datos de la API
async function obtenerDatosDeAPI() {
    try {
      const respuesta = await axios.get(apiUrl);
      const datos = respuesta.data;
      console.log(datos)
      return datos; // Retornar los datos obtenidos
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
      return []; // Retornar un arreglo vacío en caso de error
    }
  }
  
// Ruta principal
app.get('/', async (req, res) => {
    const datos = await obtenerDatosDeAPI();
    res.render('index', { datos });
  });
  
  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });