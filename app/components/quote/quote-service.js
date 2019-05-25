import Quote from "../../models/quote.js";

// @ts-ignore
let _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: {}
}
let _subscribers = {
	quotes: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())

}




export default class QuoteService {
	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get Quotes() {
		return new Quote(_state.quotes)
	}

	GetApiQuote() {

		_quoteApi.get()
			.then(res => {
				console.log(res.data.quote)
				let data = new Quote(res.data.quote)
				_setState('quotes', data)
			})
			.catch(err => {
				console.error(err)
			})
	}

}
