const navs = document.getElementById("navmenu");
const navA = navs.getElementsByTagName("a");//get a refernce on the anchors in the nav bar
const book = document.getElementById("booking");
console.log(navA);

for(let i=0; i<=3;i++){
    navA[i].addEventListener('mouseover', function onmouseover(){
        navA[i].style= 'text-decoration:underline; text-decoration-color: #198754; text-decoration-thickness: 5px;';
    });
    navA[i].addEventListener('mouseout', function handleMouseOut() {
        navA[i].style= 'text-decoration:none;';
      });
}

book.style.display='none';
navA[4].addEventListener('click', function onclick(){
    
    console.log('clicked');
    book.style.display='block';
});


  