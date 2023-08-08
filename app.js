const col = document.querySelectorAll('#col');
const span = document.querySelectorAll('#span')
const btn = document.querySelectorAll('#btn');


col.forEach((div,index) => {
    div.addEventListener("click", function () {
        col.forEach((otherDiv,otherIndex) => {
            if (otherDiv !== div) {
                otherDiv.classList.remove("col-active");
                btn[otherIndex].classList.remove("btn-active");
                span[otherIndex].classList.remove("span-active");
            }
        });

        div.classList.toggle("col-active");
        btn[index].classList.toggle("btn-active");
        span[index].classList.toggle("span-active");
    });
});


const navbar = document.querySelector("#subnav");
const showNav = document.querySelector('#navbar');
const closeNav = document.querySelector("#close-nav");


  showNav.addEventListener("click", () => {
    navbar.classList.add('display')
  });
  
  closeNav.addEventListener("click", () => {
    navbar.classList.remove('display')
  });

