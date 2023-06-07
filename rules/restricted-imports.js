module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['firebase-functions/lib/*'],
            message: 'Remove /lib from the import path.',
          },
          {
            group: ['firebase-admin/lib/*'],
            message: 'Remove /lib from the import path.',
          },
        ],
      },
    ],
  },
}
