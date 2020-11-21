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
      code: 'var str = "double quote";',
      output: "var str = 'ttokutake';",
      errors: [
        {
          message: 'Not a "ttokutake"',
          type: 'Literal',
        },
      ],
    },
    {
      code: "var str = 'single quote';",
      output: "var str = 'ttokutake';",
      errors: [
        {
          message: 'Not a "ttokutake"',
          type: 'Literal',
        },
      ],
    },
    {
      code: 'var str = `backtick`;',
      output: "var str = `ttokutake`;",
      parserOptions: { ecmaVersion: 2015 },
      errors: [
        {
          message: 'Not a "ttokutake"',
          type: 'TemplateLiteral',
        },
      ],
    },
  ],
});
