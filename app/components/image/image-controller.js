import ImageService from "./image-service.js";

let _imageService = new ImageService()


function _drawImage() {
  document.querySelector('#bg-image').style.backgroundImage = `url('${_imageService.Images.url}')`


}

export default class ImageController {
  constructor() {
    _imageService.addSubscriber('images', _drawImage)

    _imageService.getApiImages()
  }

}
