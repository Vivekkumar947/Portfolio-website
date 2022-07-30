console.log('scrpitrunning')


document.querySelector('.cross').style.display='none';
document.querySelector('.menu').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.menubar').style.display= 'inline'
        document.querySelector('.cross').style.display= 'none'
    }
    else{
        document.querySelector('.cross').style.display= 'inline'
        setTimeout(() => {
            document.querySelector('.menubar').style.display='none'
        }, 300);
        
    }

 })