'use strict!'

const navToggles = document.querySelector(".ham");

console.log(navToggles);
const links = document.querySelector(".links");

const nav = document.querySelector(".nav");

let navStatus = true;

navToggles.addEventListener('click', function(e) {

    if(navStatus){
        nav.classList.remove('hidden');
        navStatus = false;
    
    }
    else 
         {
            nav.classList.add('hidden');
            navStatus = true;
         }
  
});

fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(data =>{console.log(data) 
    const compeletedata = 
    data.data.map(value =>{
        return`
        
        <div class="members-info">
          <div class="members-img">
            <img src=${value.avatar} alt="" />
          </div>
          <div class="nichole">
            <h1>${value.first_name} ${value.last_name}</h1>
            <h4>${value.email}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              deleniti facilis maiores provident beatae?
            </p>
            <p class = "twitter" > <a href="/"><i class="fa fa-twitter" aria-hidden="true"></i> </a>@${value.first_name}
            </p>
          </div>
        </div>`
    }).join("");
    document.querySelector(".team-members").insertAdjacentHTML('afterbegin', compeletedata);}
)


// const navToggle = document.querySelector(".nav-toggles");
// const linksContainer = document.querySelector('.link-container');
// const link = document.querySelector(".links")






 



