# base64-blob-file

A tiny utility to convert between **Base64 URLs** to **Blob**  to **File** objects — usable in both frontend and backend environments.


## Installation

```bash
npm install base64-blob-file
```

>>>  ## TypeScript Usage
<hr/>

```
 import { Base64ToBlobToFile } from  'base64-blob-file'
 const base64Url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...'
    
    const file = Base64BlobToFile(base64url)
    console.log(file) // file object

```
>>>## CommonJs Usage
<hr/>

```
const { base64ToBlob } = require('base64-blob-file')
 const base64Url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...'
    
    const file = Base64BlobToFile(base64url)
    console.log(file) // file object
    
    
```




