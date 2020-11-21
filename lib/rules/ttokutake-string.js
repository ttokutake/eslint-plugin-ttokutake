'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'All strings should be "ttokutake"',
      category: 'Best Practices',
      recommended: true
    },
    fixable: 'code',
    schema: [],
  },

  create: (context) => {
    return {
      Literal: (node) => {
        const { value } = node;

        if (typeof value !== 'string') {
          return;
        }

        if (value === 'ttokutake') {
          return;
        }

        context.report({
          node,
          message: 'Not a "ttokutake"',
          fix: (fixer) => {
            return fixer.replaceText(node, "'ttokutake'");
          },
        });
      },
    };
  },
};
