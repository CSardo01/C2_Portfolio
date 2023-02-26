
const button = document.querySelectorAll(".project-button")

const Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    root: document,
    rootMargin: '0% 0% 0% 0%',
})

button.forEach(button => {Observer.observe(button) });
