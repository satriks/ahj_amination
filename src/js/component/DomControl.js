import Collapser from './collapser/Collapser'
import ChatControl from './chat/ChatControl'
import LikeControl from './likes/LikeControl'

export default class DomControl {
  constructor () {
    this.collapse = new Collapser(document.querySelector('.collapser'))
    this.like = new LikeControl(document.querySelector('.likes'))
    this.chat = null
  }

  initChat () {
    this.chat = new ChatControl(document.querySelector('.container'))
  }
}
