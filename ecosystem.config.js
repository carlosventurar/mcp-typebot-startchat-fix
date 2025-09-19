module.exports = {
  apps: [{
    name: 'mcp-typebot',
    script: 'dist/index.js',
    cwd: 'D:/OneDrive/Code/me/mcp/MCP-typebot-main',
    env: {
      TYPEBOT_TOKEN: 'JaCZQNMwVwzhptV7MoCEucPg',
      TYPEBOT_WORKSPACE_ID: 'cmfq275lw0002me1uoggynb73',
      TYPEBOT_BASE_URL: 'https://builder-production-13db.up.railway.app'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    log_file: 'D:/OneDrive/Code/me/mcp/MCP-typebot-main/logs/combined.log',
    out_file: 'D:/OneDrive/Code/me/mcp/MCP-typebot-main/logs/out.log',
    error_file: 'D:/OneDrive/Code/me/mcp/MCP-typebot-main/logs/error.log'
  }]
};