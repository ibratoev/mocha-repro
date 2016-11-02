# A repro case for a mocha+npm issue that causes npm to exit without an error code, when a test fails. 

## Actual: 
`npm run test` -> exits without error

## Expected:
`npm run test` -> exits with error

## More info:
A work around is available - check `npm run test-working`. Running the test script in the command line exits with a proper error: `mocha tests/**/*.js`.
