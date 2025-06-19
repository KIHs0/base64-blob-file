/**
 * Converts a base64 data URL to a File object.
 * @param base64url - The base64 data URL (e.g., "data:image/png;base64,...")
 * @returns A File object created from the base64 string
 */
export declare function Base64ToBlobToFile(base64url: string): Promise<File>;
