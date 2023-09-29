const menu=document.getElementById("menn");
const action=document.getElementById("menn1");
const akg=document.getElementById("akg");

menu.addEventListener('click', () => {
    hand();
  });

function hand(){
  
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");

}
akg.addEventListener('click', () =>
{
 alert("Thank You for Send Your Message :)");  
})

