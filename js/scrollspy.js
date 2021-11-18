const home = document.querySelector('#home')
const about = document.querySelector('#about')
const portfolio = document.querySelector('#portfolio')
const contact = document.querySelector('#contact')


window.addEventListener("scroll" , ()=>{
    let scroll = window.pageYOffset;
    if(about.offsetTop <= scroll && portfolio.offsetTop > scroll){
        console.log('about')
        document.querySelector('.about-nav').setAttribute('id', 'active')
        document.querySelector('.home-nav').removeAttribute('id', 'active')
        document.querySelector('.portfolio-nav').removeAttribute('id', 'active')
        document.querySelector('.contact-nav').removeAttribute('id', 'active')
    }

    else if(portfolio.offsetTop <= scroll && contact.offsetTop > scroll){
        console.log('portfolio')
        document.querySelector('.portfolio-nav').setAttribute('id', 'active')
        document.querySelector('.home-nav').removeAttribute('id', 'active')
        document.querySelector('.about-nav').removeAttribute('id', 'active')
        document.querySelector('.contact-nav').removeAttribute('id', 'active')
    }

    else if(contact.offsetTop <= scroll ){
        console.log('contact')
        document.querySelector('.contact-nav').setAttribute('id', 'active')
        document.querySelector('.home-nav').removeAttribute('id', 'active')
        document.querySelector('.portfolio-nav').removeAttribute('id', 'active')
        document.querySelector('.about-nav').removeAttribute('id', 'active')
    }

    else{
        console.log('home')
        document.querySelector('.home-nav').setAttribute('id', 'active')
        document.querySelector('.about-nav').removeAttribute('id', 'active')
        document.querySelector('.portfolio-nav').removeAttribute('id', 'active')
        document.querySelector('.contact-nav').removeAttribute('id', 'active')
    }
})