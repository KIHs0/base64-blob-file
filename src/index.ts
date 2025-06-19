/**
 * Converts a base64 data URL to a File object.
 * @param base64url - The base64 data URL (e.g., "data:image/png;base64,...")
 * @returns A File object created from the base64 string
 */
export async function Base64ToBlobToFile(base64url: string): Promise<File> {
    const [prefix, base64Data] = base64url.split(',');
    const mimeMatch = prefix.match(/:(.*?);/);

    if (!mimeMatch || !base64Data) {

        return new File([],"invalid url")
    }

    const contentType = mimeMatch[1];
    const byteCharacters = atob(base64Data);
    const byteArrays: Uint8Array[] = [];

    for (let i = 0; i < byteCharacters.length; i += 512) {
        const slice = byteCharacters.slice(i, i + 512);
        const byteNumbers = Array.from(slice, char => char.charCodeAt(0));
        byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return new File([blob], 'image.png', {type: contentType});
}
