
function enableButtonPublish() {

    //Capture elements
    let input = document.querySelector(".first-container__title-post")
    let buttonPublish = document.querySelector(".first-container__button-publish")

    input.addEventListener("input", () => {
        let Input = document.querySelector(".first-container__title-post").value
        if (Input != "") {
            buttonPublish.classList.add("first-container__button-publish__enable")
        } else {
            buttonPublish.classList.remove("first-container__button-publish__enable")
        }
    })

}


enableButtonPublish()
