// import express from 'express';
// import path from 'path';
// import open from 'open';
// import compression from 'compression';

const express = require('express');
const path = require('path');

/* eslint-disable no-console */

const port = 3000;
const app = express();

// app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, `http://localhost:`);