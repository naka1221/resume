const sec =document.querySelectorAll(".sec")
const list = document.querySelectorAll(".list")
const homee= document.querySelector(".homee")
const aboutt=document.querySelector(".aboutt")
const portfolio= document.querySelector(".portfolioo")
const contact =document.querySelector(".contactt")
// const testimonia =document.querySelector(".testimona")
const listHome= document.getElementById("home")
const listabout= document.getElementById("about")
const listportfolio= document.getElementById("portfolio")
const listtestimonia= document.getElementById("testimonia")
const listcontact= document.getElementById("contact")
const listLink = document.querySelectorAll(".list-link")
const aboutId = document.querySelector("#about")
const buttonIcon =document.querySelector(".home-right-button-icon")
const theme1 = document.querySelector('.palet-theme__list1')
const themetow = document.querySelector('.palet-theme__list2')
const theme3 = document.querySelector('.palet-theme__list3')
const theme4 = document.querySelector('.palet-theme__list4')
const theme5 = document.querySelector('.palet-theme__list5')
const theme6 = document.querySelector('.palet-theme__list6')
const theme = document.querySelectorAll('.theme')
 
const darkmood =document.querySelector('.dark-mood')

let h1Elem = document.querySelector('.typewriter')

let h1ElemTypWriter = new Typewriter(h1Elem, {
    loop: true,
    cursor: '|'
})

h1ElemTypWriter.typeString(' تولید کننده محتوا ')
    .pauseFor(4500)
    .deleteAll()
    .typeString('نویسنده')
    .pauseFor(4500)
    // .deleteChars(7)
    .deleteAll()
    .typeString('پژوهشگر')
    .pauseFor(4500)
    .deleteAll()
    .typeString('وایراستار')
    .pauseFor(4500)
    .start();
/////////////////////////////////////


    const body =document.querySelector('body')
    const darkmoodlight = document.querySelector('.dark-mood__img')
    let flags = 0
/////////// DARK_MODE //////
darkmood.addEventListener('click' , function() {
  if(flags == 0){

    var rootbee = document.querySelector(':root');
    rootbee.style.setProperty('--bs-gray-dark',"white");
    rootbee.style.setProperty('--bs-light',"#222");
    rootbee.style.setProperty('--main-primary-color',"#e83e8c");
    rootbee.style.setProperty('--color-light',"#111");
    body.style.opacity="0.99"
    darkmoodlight.setAttribute("src" , "image/dark-mode.svg")
    flags =1
    console.log(flags)
  } else if(flags == 1){
    var rootbee = document.querySelector(':root');
    rootbee.style.setProperty('--bs-gray-dark',"#111");
    rootbee.style.setProperty('--bs-light',"#fff");
    rootbee.style.setProperty('--main-primary-color',"#ffc107");
    rootbee.style.setProperty('--color-light',"#fff");
    body.style.opacity="1"
    flags=0
   darkmoodlight.setAttribute("src" , "image/light-mode.svg")
  }
})

/////////   HANDEL PAGE THEME  /////////////////
theme.forEach(items => {
  items.addEventListener("click" , function(){
    for(let i=0 ; i<6 ; i++){
      theme[i].style.backgroundColor="#fff"
      console.log(theme)
    }
    
  })
})

theme1.addEventListener('click', function(){
  var rootbe = document.querySelector(':root');
  rootbe.style.setProperty('--behavior',"main");
  theme1.style.backgroundColor="var(--main-primary-color)" 
})
themetow.addEventListener('click', function(){
  var rootbe = document.querySelector(':root');
  rootbe.style.setProperty('--behavior',"main2");
  themetow.style.backgroundColor="var(--main-primary-color)"
})
theme3.addEventListener('click', function(){
  var rootbe = document.querySelector(':root');
  rootbe.style.setProperty('--behavior',"main3");
  theme3.style.backgroundColor="var(--main-primary-color)"  
})
theme4.addEventListener('click', function(){
  var rootbe = document.querySelector(':root');
  rootbe.style.setProperty('--behavior',"main4");
  theme4.style.backgroundColor="var(--main-primary-color)" 
})
theme5.addEventListener('click', function(){
  var rootbe = document.querySelector(':root');
  rootbe.style.setProperty('--behavior',"main5");
  theme5.style.backgroundColor="var(--main-primary-color)"
  
})
theme6.addEventListener('click', function(){
  var rootbe = document.querySelector(':root');
  rootbe.style.setProperty('--behavior',"main6");
  theme6.style.backgroundColor="var(--main-primary-color)"
})

// ////////////   Handel button in Home Page For going About Page ////////////

buttonIcon.addEventListener("click" , function(){
  sec.forEach(se => {
    se.classList.remove("active")
  })
  for(let i=0; i<list.length ; i++) {
    list[i].classList.remove("show")
  }
  aboutId.classList.add("show")
aboutt.classList.add("active")


})

 ////////////////   Handel To show Active Page withe Navbar list ////////////

list.forEach( link=>  {
  link.addEventListener("click" , function(){
          for(let i=0; i<list.length ; i++) {
        list[i].classList.remove("show")
      }
      link.classList.add("show") 
  })

})

///////////////////  Home Page ////////////

listHome.addEventListener("click" , function() {
  sec.forEach(se => {
    se.classList.remove("active")
  })
  console.log(homee.children)
   homee.classList.add("active")
})
 
  ///////////////// About Page ////////////
listabout.addEventListener("click" , function() {
  sec.forEach(se => {
    se.classList.remove("active")
  })
  console.log(aboutt)
   aboutt.classList.add("active")
  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
});

})
  ///////////// Portfolio Page ////////////
listportfolio.addEventListener("click" , function() {
  sec.forEach(se => {
    se.classList.remove("active")
  })
  console.log(portfolio)
   portfolio.classList.add("active")
})

  ///////////// Testimonia Page ////////////
  // listtestimonia.addEventListener("click" , function() {
  //   sec.forEach(se => {
  //     se.classList.remove("active")
  //   })
  //    testimonia.classList.add("active")
  // })

//////////////////// Contact Page ////////////////
listcontact.addEventListener("click" , function() {
  sec.forEach(se => {
    se.classList.remove("active")
  })
  console.log(contact)
   contact.classList.add("active")

})

/////////////  Handel Switch Page With Navbar list ///////////////
const Elitemss =document.querySelectorAll('.list-items')
const item =document.querySelectorAll('.work__photo-box')
const wrapperwork =document.querySelector('.work__photo-wrapper')
console.log(Elitemss)

for(let i=0; i<Elitemss.length ; i++){
    Elitemss[i].addEventListener('click' , function(){
      console.log
        for(let j=0; j<Elitemss.length; j++){
            Elitemss[j].classList.remove('activee')
        }
        this.classList.add('activee');

        const target= this.getAttribute('data-target')
        
        for(let k=0; k<item.length; k++){
            item[k].style.display='none';
            if(target == item[k].getAttribute('data-content')){
                item[k].style.display ='block'
            }
            if(target == "all"){
                item[k].style.display ='block'
            }
        }
    })
}

//////////////////////   Handel Pallet Color /////////////

const palett = document.querySelectorAll(".palet-color__box")
palett.forEach(items => {
    items.addEventListener("click" ,function(e){
        for(let j=0; j<palett.length ; j++){
            palett[j].classList.remove("small")
        }
        items.classList.add("small")
        const valpaletColor = e.target
        const pColor=valpaletColor.getAttribute("data-id")
        console.log(pColor)
        var root = document.querySelector(':root');
        root.style.setProperty('--main-primary-color',pColor);
    })
})

const paletIcon= document.querySelector(".palet-icon")
const palet =document.querySelector(".palet")
let flag =0
paletIcon.addEventListener("click" , function(){
    if(flag == 0){
        palet.style.right="0%"
    flag=1;
    
    }
    else if(flag ==1){
        palet.style.right="-200px"
        flag=0
    }
    
})

sec.forEach( item => {
  item.addEventListener('click' , function(){
    palet.style.right="-200px"
    flag=0
} )
})


//////////////   Handel  Pallet Default /////////////
const palletDefault = document.querySelector(".pallet-default")
var root = document.querySelector(':root');

palletDefault.addEventListener("click" , function(){
  root.style.setProperty('--main-primary-color',"#ffc107");
})



  ////////// Modal HANDEL    /////////////


  const imgemodal = document.querySelectorAll(".imgPort")
  const section =document.querySelectorAll('section')
  let modal = document.querySelector('.modal-parent')
  let closebtns = document.querySelector('.X')
  let modalChild =document.querySelector('.modalChild')
  let swiperwrapper = document.querySelector('.licence-Wrapper__slider')



imgemodal.forEach(user => 
    
    user.addEventListener('click' , function(event) {
      console.log(event.children)
  
  
let newImagemodal = event.target
      let src =newImagemodal.getAttribute("src")
      let newmodal = document.createElement("img")

      newmodal.setAttribute("src" , src )
      modalChild.append(newmodal)
      console.log(newmodal)
    modal.style.display= 'flex'
    section.forEach(sec => {
      sec.style.filter ='blur(6px)'
    })

    })
    )


    
function keyexe(event){
  if (event.keyCode === 27){
      modal.style.display= 'none'

      section.forEach(sep => {
      sep.style.filter ='blur(0px)'
      })
      modalChild.innerHTML="" 
  }
}


function closebn(){
  modal.style.display= 'none'
  section.forEach(sec => {
    sec.style.filter ='blur(0px)'
    })
  modalChild.innerHTML=""
}


document.body.addEventListener('keyup' , keyexe)

closebtns.addEventListener('click' , closebn)

document.body.addEventListener('keyup' , closebtnnav)

overlay.addEventListener('click' , clos)


function closebtnnav(event){
  if (event.keyCode === 27){
 listToggle.classList.add('hid')
    listToggle.classList.remove('open')
    toggle.classList.remove('hide')
    toggle.classList.add('show')
    closebtn.classList.add('show')
    overlay.classList.remove('open')  
  }
   
}

const listTogglelink= document.querySelectorAll(".list-toggle__list-link")

listTogglelink.forEach(link => {
  link.addEventListener("click", clos )

})


function clos(){
 listToggle.classList.add('hid')
    listToggle.classList.remove('open')
    toggle.classList.remove('hide')
    toggle.classList.add('show')
    closebtn.classList.add('show')
    overlay.classList.remove('open')  
}

spanBox = document.querySelector(".span-box")
 spanBox.addEventListener("click" , showText)

 function showtext(event){

 }
