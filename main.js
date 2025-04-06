
import './style.css'

document.querySelector('#app').innerHTML


// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()
    const section = document.querySelector(this.getAttribute('href'))
    section.scrollIntoView({ behavior: 'smooth' })
  })
})

// Contact button click handler
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault()
  alert('Thank you for your interest! We will get back to you soon.')
})

// Scroll animation with enhanced timing
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

document.querySelectorAll('.scroll-animation').forEach(element => {
  observer.observe(element)
})
