

export default class Quote {
  constructor(data) {
    this.author = data.author,
      this.body = data.body
  }
  get Template() {
    return `
<blockquote class="blockquote text-center">
  <p class="mb-0 quotequote">${this.body}</p>
  <footer class="blockquote-footer quotequote2"><cite title="Source Title">${this.author}</cite></footer>
</blockquote>
    `
  }
}

