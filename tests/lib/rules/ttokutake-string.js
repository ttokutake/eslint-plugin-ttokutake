'use strict';

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/ttokutake-string');

var ruleTester = new RuleTester();
ruleTester.run('ttokutake-string', rule, {
  valid: [
    'var num = 1;',
  ],

  invalid: [
    {
      code: 'var str = "some string";',
      output: "var str = 'ttokutake';",
      errors: [
        {
          message: 'Not a "ttokutake"',
          type: 'Literal',
        },
      ],
    },
    {
      code: 'var str = \'some string\';',
      output: "var str = 'ttokutake';",
      errors: [
        {
          message: 'Not a "ttokutake"',
          type: 'Literal',
        },
      ],
    },
  ],
});
