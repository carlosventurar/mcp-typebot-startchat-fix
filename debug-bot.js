const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');
const { getBot } = require('./dist/tools/bots.js');

// Configurar axios con el token
if (process.env.TYPEBOT_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TYPEBOT_TOKEN}`;
}

async function debugBot() {
  try {
    console.log('🔍 Obteniendo información del bot...');
    const result = await getBot({
      botId: 'cmfrbjuxl000jme1uaoxxha8f'
    });

    console.log('Bot Name:', result.typebot?.name);
    console.log('Bot ID:', result.typebot?.id);
    console.log('Public ID:', result.typebot?.publicId);
    console.log('Is Closed:', result.typebot?.isClosed);
    console.log('Custom Domain:', result.typebot?.customDomain);

    if (result.typebot?.publicId) {
      console.log(`\n🌐 URL de chat: ${process.env.TYPEBOT_BASE_URL}/api/v1/typebots/${result.typebot.publicId}/startChat`);
    } else {
      console.log('\n❌ Bot no tiene publicId - necesita ser publicado primero');
    }

  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

debugBot();