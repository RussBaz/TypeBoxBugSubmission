# TypeBox abd Ajv Bug Submission

Run `npm run all` and check the result. It should not show any errors if everything works as expected. However, I am getting the following error:

```
/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/util.ts:211
  if (mode === true) throw new Error(msg)
                           ^
Error: strict mode: unknown keyword: "instanceOf"
    at checkStrictMode (/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/util.ts:211:28)
    at checkUnknownRules (/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/util.ts:27:22)
    at alwaysValidSchema (/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/util.ts:17:3)
    at /Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/vocabularies/applicator/properties.ts:23:65
    at Array.filter (<anonymous>)
    at Object.code (/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/vocabularies/applicator/properties.ts:23:33)
    at keywordCode (/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/validate/index.ts:532:9)
    at /Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/validate/index.ts:265:9
    at CodeGen.code (/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/codegen/index.ts:525:33)
    at CodeGen.block (/Users/user/Projects/TypeBoxBugSubmission/node_modules/ajv/lib/compile/codegen/index.ts:680:20)
```

Tested on MacBook Pro M1 Max:

-   Node: v20.3.0
-   OS: MacOS 13.4
