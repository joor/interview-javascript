const chalk = require('chalk')

import { stocksProblemOutput } from './1-Stocks/stocks'
import { reverseWordsProblemOutput } from './2-ReverseWords/reverseWords'
import { fibonacciProblemOutput } from './3-Fibonacci/fibonacci';

const log = console.log;
const buffer = () => log()
const line = () => log('=================')

// This generates the command line output of each problem.

// Buffer
buffer()
buffer()

// Problem 1
line()
log(chalk.green('Problem: [1-Stocks]'))
log(chalk.green('Solution:', stocksProblemOutput))

// Problem 2
line()
log(chalk.blue('Problem: [2-Reverse Words]'))
log(chalk.blue('Solution:', reverseWordsProblemOutput))

// Problem 3
line()
log(chalk.red('Problem: [3-Fibonacci]'))
log(chalk.red('Solution:', fibonacciProblemOutput))

// End
line()
