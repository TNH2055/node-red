module.exports = {
  uiPort: process.env.PORT || 1880,
  functionGlobalContext: { },
  editorTheme: {
    projects: {
      enabled: false
    }
  },
  adminAuth: {
    type: "credentials",
    users: [{
      username: TNH,
      password: TNH1,
      permissions: "*"
    }]
  },
  webSocketAllow: ['*']
};
