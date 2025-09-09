// Global test teardown to close server and DB connections
const { server } = require("../index");
const { sequelize } = require("../models");

afterAll(async () => {
  try {
    if (server && server.close) server.close();
  } catch (e) {}
  try {
    if (sequelize && sequelize.close) await sequelize.close();
  } catch (e) {}
});
