# Library for get typescript imports from file or directory 

## Installation 
```
npm i @rifo/get-ts-imports -D
```

## Usage 
```ts
import { extractImports } from '@rifo/get-ts-imports';

extractImports('../../src/app/core/services/http-call/**/*.ts', (imports: string[]) => {
  imports = [...new Set(imports)].filter((imp) => {
    return imp.includes('scope');
  });
  console.log(imports);
  return imports;
});
```

