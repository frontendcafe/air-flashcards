module.exports = {
  "**/*.(ts|tsx|js|jsx)": () => {
    return ['npm run lint', 'npm run format:fix'];
  },
};
