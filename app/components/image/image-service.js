import Image from "../../models/Image.js";


let imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	images: {}
}
let _subscribers = {
	images: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())

}

export default class ImageService {
	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get Images() {
		return new Image(_state.images)
	}

	getApiImages() {
		imgApi.get()
			.then(res => {
				let data = new Image(res.data)
				_setState('images', data)
			})
			.catch(err => {
				console.error(err)
			})
	}

}





