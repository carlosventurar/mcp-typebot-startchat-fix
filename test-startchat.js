const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');
const { startChat } = require('./dist/tools/bots.js');

// Configurar axios con el token como en index.ts
if (process.env.TYPEBOT_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TYPEBOT_TOKEN}`;
  console.log('🔑 Token configurado correctamente');
} else {
  console.log('❌ No se encontró TYPEBOT_TOKEN');
}

async function testStartChat() {
  try {
    console.log('🧪 Probando startChat con el bot corregido...');
    console.log('Token:', process.env.TYPEBOT_TOKEN ? 'Configurado' : 'No configurado');
    console.log('Workspace:', process.env.TYPEBOT_WORKSPACE_ID);
    console.log('Base URL:', process.env.TYPEBOT_BASE_URL);

    const result = await startChat({
      botId: 'cmfrbjuxl000jme1uaoxxha8f'
    });
    console.log('✅ ¡SUCCESS! startChat funcionó:');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.log('❌ Error en startChat:');
    console.log(error.message);
    if (error.response?.data) {
      console.log('Respuesta del servidor:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

testStartChat();