const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');
const { startChat, getChatUrl } = require('./dist/tools/bots.js');

// Configurar axios con el token
if (process.env.TYPEBOT_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TYPEBOT_TOKEN}`;
}

async function testSolution() {
  console.log('🧪 Probando la nueva solución alternativa para startChat...\n');

  try {
    // Probar startChat (ahora devuelve URL en lugar de iniciar sesión)
    console.log('1️⃣ Probando startChat (versión mejorada):');
    const startChatResult = await startChat({
      botId: 'cmfrbjuxl000jme1uaoxxha8f',
      chat: {
        context: {
          nombre: 'Juan Pérez',
          email: 'juan@ejemplo.com'
        }
      }
    });
    console.log('✅ startChat funcionó:');
    console.log(JSON.stringify(startChatResult, null, 2));
    console.log('\n');

    // Probar getChatUrl
    console.log('2️⃣ Probando getChatUrl (nueva función):');
    const getChatUrlResult = await getChatUrl({
      botId: 'cmfrbjuxl000jme1uaoxxha8f',
      prefilledVariables: {
        cliente: 'María García',
        telefono: '555-1234'
      }
    });
    console.log('✅ getChatUrl funcionó:');
    console.log(JSON.stringify(getChatUrlResult, null, 2));
    console.log('\n');

    // Probar con el bot de prueba que acabamos de crear
    console.log('3️⃣ Probando con el bot de prueba recién creado:');
    const testBotResult = await getChatUrl({
      botId: 'cmfrc9elb000mme1ublyvdji7'
    });
    console.log('✅ Bot de prueba funcionó:');
    console.log(JSON.stringify(testBotResult, null, 2));

    console.log('\n🎉 ¡TODAS LAS PRUEBAS EXITOSAS!');
    console.log('\n📋 Resumen de URLs disponibles:');
    console.log(`• Bot principal: ${startChatResult.chatUrl}`);
    console.log(`• Con variables: ${getChatUrlResult.chatUrl}`);
    console.log(`• Bot de prueba: ${testBotResult.chatUrl}`);

  } catch (error) {
    console.log('❌ Error:', error.message);
    if (error.response?.data) {
      console.log('Respuesta del servidor:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

testSolution();