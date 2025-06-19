"use strict";
/**
* CONVERTS A BASE64  DATA URL  TO A BLOB
* @param {string}base64url - the base64 data URL (e.g., "data:image/png;base64,...")
* @returns {blob}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToBlob = base64ToBlob;
function base64ToBlob(base64url) {
    const [prefix, data] = base64url.split(',');
    console.log(prefix);
    // return new Blob(bitarray, { type : contentType})
}
