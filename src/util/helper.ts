export function debounce(a: any, b: any, c: any) {
  let d:any, e:any;
  return function() {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    const f: any = this;
    const g: any = arguments;
    return (clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e);
  }
}

export function removeHTMLTags(str: any) {
  return str.replace(/<[^>]*>?/gm, '');
}