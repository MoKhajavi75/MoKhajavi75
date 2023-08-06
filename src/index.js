#! /usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';

const message = [
  chalk.bold('Mohamad Khajavi'),
  'Quality Engineer',
  '',
  chalk.bold('    GitHub: ') + chalk.magentaBright('https://github.com/mohamadkh75'),
  chalk.bold('  LinkedIn: ') + chalk.magentaBright('https://linkedin.com/in/mohamadkh75'),
  chalk.bold('   ADPList: ') + chalk.magentaBright('https://adplist.org/mentors/mohamad-khajavi'),
  chalk.bold('   Twitter: ') + chalk.magentaBright('https://twitter.com/mohamadkh75')
].join('\n');

const box = boxen(message, {
  margin: 1.5,
  padding: 1.5,
  borderStyle: 'round',
  borderColor: 'magentaBright'
});

process.stdout.write(box + '\n');
