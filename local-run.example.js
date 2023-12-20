// local-run.example.js
// locally runs snippet from dist/index.js

// rename to local-run.js with your own info

// Load environment variables from a .env file for local testing
require('dotenv').config();

// Mock the inputs your GitHub Action expects
// GitHub Actions typically expect inputs to be set as environment variables
// with the prefix 'INPUT_'. Convert your action's inputs accordingly.
process.env['INPUT_OWNER'] = 'owner'; // replace with your mock owner
process.env['INPUT_REPO'] = 'repo'; // replace with your mock repo
process.env['INPUT_PR_NUMBER'] = '420'; // replace with your mock PR number

// Require the core module from the GitHub Actions toolkit
const core = require('@actions/core');

// Require the main entry point of your GitHub Action
require('./dist/index.js');