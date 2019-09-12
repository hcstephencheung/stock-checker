module.exports = {
    setupFilesAfterEnv: [
        '@testing-library/react/cleanup-after-each',
        '@testing-library/jest-dom/extend-expect',
        "<rootDir>/src/setupTests.js"
    ],
    transform: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.(js|jsx)$': 'babel-jest'
    }
};
