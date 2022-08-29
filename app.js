const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            sections[activeLink].classList.add('inactive');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.remove('inactive');
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})
