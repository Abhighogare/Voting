module.exports = {
  apps: [
    {
      name: "voting-app",
      script: "server.js",

      // ✅ NEW WORKING DIRECTORY (FIX)
      cwd: "/home/azureuser/apps/voting",

      exec_mode: "fork",
      instances: 1,

      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
