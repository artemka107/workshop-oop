#!/usr/bin/env node

import program from 'commander';
import createGeo from '..';

program
  .version('0.0.1')
  .arguments('[ip]')
  .description('enter an ip address')
  .action(async (ip) => {
    const getGeo = createGeo();
    const result = await getGeo(ip);
    console.log(result);
  })
  .parse(process.argv);
