//import
import { suggestUsers } from "./database.js"
import { posts } from "./database.js"

function searchPost(id) {

    //Find obj with id
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == id) {
            let obj = posts[i]
            return obj
        }
    }

}

function renderSuggestions(obj) {

    //Capture UL container
    let ul = document.querySelector(`.container-Suggestions__ul`)

    //Create elements
    let li = document.createElement(`li`)
    let photo = document.createElement(`img`)
    let div = document.createElement('div')
    let name = document.createElement(`h2`)
    let stack = document.createElement(`span`)
    let buttonFollow = document.createElement(`button`)

    //Add class Name
    li.classList.add("container-Suggestions__li")
    div.classList.add("container-Suggestion__data-user")
    photo.classList.add("container-Suggestions__img")
    name.classList.add("container-Suggestions__h2")
    stack.classList.add("container-Suggestions__span")
    buttonFollow.classList.add("container-Suggestions__button")

    //Appened Child
    ul.appendChild(li)
    div.append(name, stack)
    li.append(photo, div, buttonFollow)

    //Assigning value
    photo.src = obj.img
    name.innerText = obj.user
    stack.innerText = obj.stack
    buttonFollow.innerText = "Seguir"

}

function suggestionsUser() {

    //Render Cards 
    for (let i = 0; i < suggestUsers.length; i++) {
        renderSuggestions(suggestUsers[i])
    }

}


function renderPosts(obj) {

    //Capture UL container
    let ul = document.querySelector(`.container-posts__ul`)

    //Create elements
    let li = document.createElement(`li`)
    let containerUser = document.createElement('div')
    let photo = document.createElement(`img`)
    let name = document.createElement(`h2`)
    let stack = document.createElement(`span`)
    let title = document.createElement(`h2`)
    let text = document.createElement(`p`)
    let containerFooter = document.createElement('div')
    let buttonOpen = document.createElement('button')
    let imgHeart = document.createElement('img')
    let contLike = document.createElement('span')

    //Add class Name
    li.classList.add("container-posts__li")
    containerUser.classList.add("container-posts__container-user")
    photo.classList.add("container-posts__photo")
    name.classList.add("container-posts__name")
    stack.classList.add("container-posts__stack")
    title.classList.add("container-posts__title")
    text.classList.add("container-posts__p")
    containerFooter.classList.add("container-posts__container-footer")
    buttonOpen.classList.add("container-posts__button")
    imgHeart.classList.add("container-posts__image-heart")
    contLike.classList.add("container-posts__span")

    //Add ID
    buttonOpen.id = obj.id

    //Appened Child
    ul.appendChild(li)
    containerUser.append(photo, name, stack)
    li.append(containerUser, title, text, containerFooter)
    containerFooter.append(buttonOpen, imgHeart, contLike)

    //Assigning value
    photo.src = obj.img
    name.innerText = obj.user
    stack.innerText = obj.stack
    title.innerText = obj.title
    text.innerText = obj.text
    buttonOpen.innerText = "Abrir Post"
    imgHeart.src = "./src/assets/img/heart.svg"
    contLike.innerText = obj.likes
}

function closeModal() {

    //Capture modal
    let dialog = document.querySelector(".dialog")

    dialog.close()
}

function OpenModal(obj) {

    //Capture elements
    let dialog = document.querySelector(".dialog")
    let photo = document.querySelector(".dialog__photo")
    let name = document.querySelector(".dialog__name")
    let stack = document.querySelector(".dialog__stack")
    let title = document.querySelector(".dialog__title")
    let text = document.querySelector(".dialog__text")

    //Assigning value
    photo.src = obj.img
    name.innerText = obj.user
    stack.innerText = obj.stack
    title.innerText = obj.title
    text.innerText = obj.text

    //Show modal
    dialog.showModal()

    //Event Listener
    let buttonCloseModal = document.querySelector(".dialog__close-modal")
    buttonCloseModal.addEventListener("click", () => {
        closeModal()
    })
}

function postUsers() {

    //Render
    for (let i = 0; i < posts.length; i++) {
        renderPosts(posts[i])
    }

    //Event Listener
    let buttonOpenModal = document.querySelectorAll(".container-posts__button")
    buttonOpenModal.forEach(buttonModal => {
        buttonModal.addEventListener(`click`, () => {
            OpenModal(searchPost(buttonModal.id))
        })
    })
}

suggestionsUser()
postUsers()