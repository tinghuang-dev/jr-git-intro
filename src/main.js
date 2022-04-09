// add event for highlight the nav bar when scorlling.
const sections = document.querySelectorAll('section.container');
const navA = document.querySelectorAll('nav div a');
  
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset > sectionTop - (sectionHeight/2.5)) {
            current = section.getAttribute ('id');
        }
    })
    navA.forEach( a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        }
    })
})


// window.addEventListener('click',() => {
//     let container='';
//     containerOffset.forEach(section =>{
//         section.classList.remove('active');
//         if (section.classList.contains(container)){
//             section.classList.add('active');
//         }
//     })
// })


// 这组是要置换tags的颜色
// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');

// menuToggle.addEventListener('click', () => {
//     menuToggle.classList.toggle('active');
//     showcase.classList.toggle('active');
// })

// 50px 