const header = document.querySelector("header");
const sectionOne = document.querySelector("main-navbar");

const option = {

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.remove("changeColor")
            // we havent created it yet
        } else {
            header.classList.add("changeColor")
        }
    })
}, option)

observer.observe(sectionOne);