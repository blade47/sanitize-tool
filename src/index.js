class SanitizeTool {
  static get isInline() {
    return true;
  }

  static get sanitize() {
    return {
      annotation: {
        class: true,
        contenteditable: true,
        style: true,
        'data-author': true,
        'data-year': true,
        'data-publication': true,
        'data-journal': true,
        'data-volume': true,
        'data-volume-initial-page': true,
        'data-volume-last-page': true,
        encoding: true,
      },
      latex: {
        contenteditable: true,
        style: true,
      },
      span: function (el) {
        return (
          el.classList.contains('katex') ||
          el.classList.contains('katex-mathml') ||
          el.classList.contains('katex-html') ||
          el.classList.contains('base') ||
          el.classList.contains('strut') ||
          el.classList.contains('mord') ||
          el.classList.contains('afl-inline-latex') ||
          el.classList.length === 0
        );
      },
      math: true,
      semantics: true,
      mrow: true,
      mi: true,
    };
  }

  constructor({ api }) {
    this.api = api;
  }

  render() {}
  surround() {}
  checkState() {}
}

export default SanitizeTool;
