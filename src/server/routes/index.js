// Routes in this module require authentication
const express = require('express');
const router = express.Router();

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

// const LighthouseCheck = require('./lighthouseCheck.js');

// router.use('/lighthouse', LighthouseCheck);

const url = 'https://google.com';
const opts = {
  chromeFlags: ['--show-paint-rects']
};

router.post('/lighthouse', (req, res) => {
  // const { url } = req.body;
  chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
    opts.port = chrome.port;
    lighthouse(url, opts, null).then(results => {
      res.json(results);
      chrome.kill();
    });
  });
});

module.exports = router;
