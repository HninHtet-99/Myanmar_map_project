let current = document.getElementById('current');
let path = document.querySelectorAll('.map svg path');

path.forEach(x => {
        
        x.addEventListener('mouseover',_ => {
            path.forEach(c => c.classList.remove("active"));
            x.classList.add("active");
            current.innerText = x.getAttribute('title');

        });
    // console.log(x.getAttribute('title'));
});

document.querySelector("[title='Shan']").classList.add("active");
current.innerText = "Shan"


