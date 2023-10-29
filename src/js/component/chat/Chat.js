export default class Chat {
  constructor (element, chatBtn) {
    this.element = element
    this.chatBtn = chatBtn
    this.create()
  }

  create () {
    const chat = document.createElement('div')
    chat.className = 'chat__from'

    const title = document.createElement('h2')
    title.className = 'chat__title'
    title.textContent = 'Напишите нам'

    const input = document.createElement('textarea')
    input.className = 'chat__input'

    const btn = document.createElement('button')
    btn.className = 'chat__send'
    btn.textContent = 'Отправить'

    const close = document.createElement('span')
    close.className = 'chat__close'
    close.textContent = 'x'

    close.addEventListener('click', () => {
      this.chatBtn.classList.remove('hidden')
      chat.classList.add('chat__form-close')
      setTimeout(() => {
        chat.remove()
      }, 2000)
    })

    chat.append(title, input, btn, close)

    this.element.appendChild(chat)
  }
}
