const panels = document.querySelectorAll('.panel')
alert("JS file loaded");
panels.forEach((panel)=>{
    
    panel.addEventListener('click',()=>{
        alert("Inside");
        removeActiveClasses();
        panel.classList.add('active');
        alert("done");
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        alert("Inside1");
        panel.classList.remove('active')
    })
}