module.exports = {
  apps: [
    {
      name: 'cacheflow',
      cwd: './backend/server',
      script: 'npm',
      args: 'start',
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
    },
  ],
};
