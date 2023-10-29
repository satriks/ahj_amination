export default class LikeControl {
  constructor (element) {
    this.element = element
    this.likeBtn = null
    this.create()
  }

  create () {
    const likeBtn = document.createElement('button')
    likeBtn.className = 'like__Btn'
    likeBtn.textContent = 'Like'

    this.likeBtn = likeBtn
    likeBtn.addEventListener('click', this.createHeart)

    this.element.appendChild(likeBtn)
  }

  createHeart = (event) => {
    const num = Math.trunc(Math.random() * 4) + 1

    const heart = document.createElement('img')
    heart.classList.add('heart', `heart-${num}`)
    heart.style.left = `${this.likeBtn.offsetWidth / 2}px`

    heart.addEventListener('animationend', () => {
      heart.remove()
    })

    this.likeBtn.insertAdjacentElement('beforebegin', heart)
  }
}
