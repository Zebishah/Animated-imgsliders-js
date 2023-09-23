let slides=document.querySelectorAll(".slide");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let navigations=document.querySelectorAll(".btn");
let contents=document.querySelectorAll(".info");
let slider=document.querySelector(".container")
let slide=0;
let count=slides.length-1;


function slidenext(slide)
{
slides.forEach((slider)=>{
slider.classList.remove("active");
});
navigations.forEach((navigation)=>{
    navigation.classList.remove("active");
    });

    slides[slide].classList.add("active");
    navigations[slide].classList.add("active");
}
next.addEventListener('click',()=>{
   if(slide>count-1)
   {
       slide=0;
   }
   else{
    slide++;
   }
    slidenext(slide);
   
});
prev.addEventListener('click',()=>{
    if(slide==0)
    {
        slide=count;
    }
    else{
     slide--;
    }
     slidenext(slide);
    
 });
 var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slider)=>{
            slider.classList.remove("active");
            });
            navigations.forEach((navigation)=>{
                navigation.classList.remove("active");
                });
            
                slides[slide].classList.add("active");
                navigations[slide].classList.add("active");
                if(slide>count-1)
                {
                    slide=0;
                }
                else{
                 slide++;
                }
                
                
  }, 4000)
};
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});