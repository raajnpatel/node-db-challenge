const express = require('express');

const projectRouter = require('./routes/project_routers');
const resourceRouter = require('./routes/resource_routers');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;