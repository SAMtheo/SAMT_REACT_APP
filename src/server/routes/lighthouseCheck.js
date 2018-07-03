const express = require('express');
const router = express.Router();

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      // use results.lhr for the JS-consumeable output
      // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
      // use results.report for the HTML/JSON/CSV output as a string
      // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
      return chrome.kill().then(() => results)
    });
  });
}

const url = 'https://google.com';
const opts = {
  chromeFlags: ['--show-paint-rects']
};

router.post('/', async (req, res) => {
  console.log('Running lighthouse check...');
  const results = await launchChromeAndRunLighthouse(url, opts);
  console.log('lighthouse check complete...');
  res.json(results);
  // res.json({ done: true });
});

module.exports = router;
