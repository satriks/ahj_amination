export default class Collapser {
  constructor (element) {
    this.element = element
    this.create()
  }

  create () {
    const container = document.createElement('div')
    container.className = 'collapse'

    const btn = document.createElement('button')
    btn.className = 'collapse__btn'
    btn.textContent = 'Collapse'

    const content = document.createElement('div')
    content.className = 'collapse__content'
    content.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum non mollitia recusandae. Quibusdam provident quia natus rem sit, inventore deserunt?'

    btn.addEventListener('click', () => {
      content.classList.toggle('collapse__content-active')
      if (content.classList.contains('collapse__content-active')) {
        content.style.height = content.scrollHeight + 'px'
      } else {
        content.style.height = 1 + 'px'
      }
    })

    container.append(btn, content)
    this.element.append(container)
  }
}
