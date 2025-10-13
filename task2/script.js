const btnOpen = document.getElementById("btnOpen")
const btnClose = document.getElementById("btnClose")
const newWindow = document.getElementById("newWindow")


btnOpen.addEventListener("click", ()=>{
    newWindow.style.display = 'block'
}) 

btnClose.addEventListener("click", ()=>{
    newWindow.style.display = 'none'
})