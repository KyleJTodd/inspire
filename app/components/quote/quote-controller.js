import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function _drawQuote() {
  let quote = _qs.Quotes
  let template = ''
  template += quote.Template

  document.querySelector('#quote').innerHTML = template
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quotes', _drawQuote)

    _qs.GetApiQuote()

  }


}
