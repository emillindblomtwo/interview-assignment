export const replaceImageSize = (url, height, width) => {
  const parts = url.split('/');
  parts[parts.length - 1] = height;
  parts[parts.length - 2] = width;
  return parts.join('/');
};
