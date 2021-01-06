export function createSummary(text, length) {
  if (text.length > length) {
    text = text.slice(0, length);
    text += " ...";
    return text;
  } else {
    return text;
  }
}
