# Create React App Starter
This is a starter with my basic setup for a React application bootstrapped using [create-react-app][1].

## Code Linting
Configured to use the Prettier plug-in and eslint to work with popular editor and IDE extensions. I personally use VS Code with extensions for Prettier and ESLint. CRA comes packaged with Prettier and eslint-config-react-app.

A pre-commit git hook is setup following the instructions from the CRA readme. The hook fixes lint errors found in staged files before the files are committed. [lint-staged][3] and [husky][4] packages are included to easily accomplish this configuration.

## Testing
[react-testing-library][2] is installed along with additional expectations for Jest from jest-dom. Tests have been configured globally to extend Jest expect with additional assertions and run `cleanup` from react-testing-library.

## References
- [create-react-app][1]
- [react-testing-library][2]
- [lint-staged][3]
- [husky][4]

[1]:https://github.com/facebook/create-react-app
[2]:https://github.com/kentcdodds/react-testing-library
[3]:https://github.com/okonet/lint-staged
[4]:https://github.com/typicode/husky
