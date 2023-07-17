const accardeonButtpn = document.querySelectorAll('.faqs__button__accardeon')
const accardeonContent = document.querySelectorAll('.faqs__accardeon')

function accardeonFunct() {
    for(let i = 0; i < accardeonButtpn.length; i++) {
        accardeonButtpn[i].addEventListener('click',()=>{
            accardeonButtpn[i].classList.toggle('activeMode');
           if(accardeonContent[i].style.maxHeight) {
            accardeonContent[i].style.maxHeight = null
           } else {
            accardeonContent[i].style.maxHeight = accardeonContent[i].scrollHeight + 'px'
           }
        })
    }
}
accardeonFunct() 
// accardeonButtpn.addEventListener('click',()=>{
//     accardeonButtpn.classList.toggle('activeMode')
//     if(accardeonContent.style.maxHeight) {
//         accardeonContent.style.maxHeight = null
//     } else {
//         accardeonContent.style.maxHeight = accardeonContent.scrollHeight + 'px'
//     }
// })