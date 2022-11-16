//verify this is a real url using regex
export default function validateUrl(value) {
  return /\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/.test(
    value
  );
}
