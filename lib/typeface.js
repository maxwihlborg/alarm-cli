const chalk = require('chalk');

const lg = {
  numbers: [
    ['██████',
     '██  ██',
     '██  ██',
     '██  ██',
     '██████'
    ],
    ['████  ',
     '  ██  ',
     '  ██  ',
     '  ██  ',
     '██████'
    ],
    ['██████',
     '    ██',
     '██████',
     '██    ',
     '██████'
    ],
    ['██████',
     '    ██',
     '██████',
     '    ██',
     '██████'
    ],
    ['██  ██',
     '██  ██',
     '██████',
     '    ██',
     '    ██'
    ],
    ['██████',
     '██    ',
     '██████',
     '    ██',
     '██████'
    ],
    ['██████',
     '██    ',
     '██████',
     '██  ██',
     '██████'
    ],
    ['██████',
     '    ██',
     '    ██',
     '    ██',
     '    ██'
    ],
    ['██████',
     '██  ██',
     '██████',
     '██  ██',
     '██████'
    ],
    ['██████',
     '██  ██',
     '██████',
     '    ██',
     '██████'
    ],
  ],
  numberSpace: [
    '  ',
    '  ',
    '  ',
    '  ',
    '  ',
  ],
  numberSeperator: [
    '    ',
    '    ',
    '    ',
    '    ',
    '    ',
  ],
  columns: 50,
  rows: 5,
  color: chalk.blue.bold,
};

const sm = {
  numbers: [
    ['█▀█',
     '█ █',
     '▀▀▀',
    ],
    ['▀█ ',
     ' █ ',
     '▀▀▀'
    ],
    ['▀▀█',
     '█▀▀',
     '▀▀▀',
    ],
    ['▀▀█',
     ' ▀█',
     '▀▀▀',
    ],
    ['█ █',
     '▀▀█',
     '  ▀',
    ],
    ['█▀▀',
     '▀▀█    ',
     '▀▀▀',
    ],
    ['█▀▀',
     '█▀█',
     '▀▀▀',
    ],
    ['▀▀█',
     '  █',
     '  ▀',
    ],
    ['█▀█',
     '█▀█',
     '▀▀▀',
    ],
    ['█▀█',
     '▀▀█',
     '  ▀',
    ],
  ],
  numberSpace: [
    ' ',
    ' ',
    ' ',
  ],
  numberSeperator: [
    '  ',
    '  ',
    '  ',
  ],
  columns: 27,
  rows: 3,
  color: chalk.blue.bold,
};

const screenSize = {
  lg,
  sm,
};

module.exports = { screenSize };
