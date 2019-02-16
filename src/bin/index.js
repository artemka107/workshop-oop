#!/usr/bin/env node

import program from 'commander';
import Geo from '..';

program
  .version('0.0.1')
  .arguments('[ip]')
  .description('enter an ip address')
  .action(async (ip) => {
    const geo = new Geo();
    const result = await geo.get(ip);
    console.log(result);
  })
  .parse(process.argv);
