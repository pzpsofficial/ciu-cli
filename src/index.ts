#! /usr/bin/env node

import { program } from 'commander';

program
  .name('ciu')
  .description('CLI that brings full power of caniuse.com into your terminal')
  .version('0.1.0');

program
  .argument('query')
  .description('Display info about property support')
  .action((str, options) => {
    console.log('Siema');
  });

program.parse();
