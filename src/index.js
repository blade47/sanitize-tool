class SanitizeTool {
  static get isInline() {
    return true;
  }

  static get sanitize() {
    return {
      span: {
        class: true,
        'data-formula': true,
        contenteditable: true,
        style: true,
        'data-author': true,
        'data-year': true,
        'data-publication': true,
        'data-journal': true,
        'data-volume': true,
        'data-volume-initial-page': true,
        'data-volume-last-page': true,
      },
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
