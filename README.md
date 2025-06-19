## base64-blob-file

A tiny utility to convert  **Base64 URL**  to **File** objects — usable in backend and frontend frameworks


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
const { Base64ToBlobToFile } = require('base64-blob-file')
 const base64Url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...'
    
    const file = Base64BlobToFile(base64url)
    console.log(file) // file object
    

```




                                                                     Made With 🤍 --KIHSO




