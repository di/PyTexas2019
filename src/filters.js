export function image(path) {
  return IMAGES[path];
}

export function resize(url, w, h) {
  if (url.indexOf("gravatar") > -1) {
    return url.replace("s=256", "s=" + w);
  }

  if (DEBUG) {
    return url;
  }

  return `https://pytxapp.imgix.net${url}?w=${w}&h=${h}`;
}

export function time(dt) {
  return dt.toLocaleTimeString();
}
