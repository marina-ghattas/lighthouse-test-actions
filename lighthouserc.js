module.exports = {
  ci: {
    collect: {
        settings: {
           onlyCategories: ['accessibility']
        }
      },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
  },
};
