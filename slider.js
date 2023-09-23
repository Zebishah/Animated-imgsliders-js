const slider=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot")
console.log(slider.length)

let count=0;
   
    slider.forEach((item,index)=>{
        item.style.left=`${index * 100}%`;   
    })
   
function next()
{
    if(count<slider.length-1)
    {
    count++;
    slideimage();
    }
    else 
    {
count=0;
slideimage();
    }
}
function slideimage()
{
    slider.forEach((item)=>{
     item.style.transform=`translateX(-${count*100}%)`;
    })
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[count].className += " active";
}
