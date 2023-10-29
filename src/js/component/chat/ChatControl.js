import Chat from './Chat'

export default class ChatControl {
  constructor (element) {
    this.element = element
    this.chatBtn = null
    this.create()
  }

  create () {
    const chatBtn = document.createElement('div')
    chatBtn.className = 'chat__btn'
    this.element.appendChild(chatBtn)
    this.chatBtn = chatBtn
    chatBtn.addEventListener('click', this.onClick)
  }

  onClick = () => {
    this.chatBtn.classList.add('hidden')
    const chat = new Chat(this.element, this.chatBtn) //eslint-disable-line
  }
}
