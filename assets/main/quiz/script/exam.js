const $=document;
const selected=$.querySelectorAll('.selectedValue')
const desable=$.querySelectorAll('.desable')
const angle=$.querySelectorAll('#angle')
const selectedValue=$.querySelectorAll('#selectedValue')
const values=$.querySelectorAll('#values')
const itemes=$.querySelectorAll('.value')
const settingBtn=$.getElementById('settingBtn')
const examCon=$.getElementById('examCon')
const setting=$.getElementById('setting')
const anow=$.querySelectorAll('.anowser')
const anowSub=$.querySelectorAll('.anowSub')
const exam=$.getElementById('examCon')
var num=5;
for (let index = 0; index < selected.length; index++) {
    selected[index].addEventListener(('mousedown'),()=>{        
        angle[index].classList.toggle('fa-angle-up');
        if(values[index].classList=='DisNo'||values[index].classList=='values0'){  
            values[index].classList='values';
        }else if(values[index].classList=='values'){
            values[index].classList='values0';
        }
        for(let i=0;i<itemes.length;i++){
            itemes[i].addEventListener('mousedown',()=>{
                selectedValue[index].innerHTML=itemes[i].innerHTML+' <i class="fa fa-angle-down" id="angle">';
                angle[index].classList='fa fa-angle-down';
                values[index].classList='values0';
            })
        }
        
    }
)}
for (let index = 0; index < desable.length; index++) {
    desable[index].addEventListener('click',()=>{
        desable[0].style.transition="all 300ms"
        desable[1].style.transition="all 300ms"
        desable[0].classList.toggle('act')
        desable[1].classList.toggle('act')

    })
}

settingBtn.addEventListener('click',()=>{
    $.querySelector('.qustNum').value==""||$.querySelector('.qustNum').value==undefined?num=5:num=$.querySelector('.qustNum').value
    setting.classList="settingOut";
    setting.addEventListener('animationend',()=>{
        examCon.classList='examCon'
        setting.remove()
    })

})
console.log(anow[0].parentElement)
for (let index = 0; index < anow.length; index++) {
        anow[index].addEventListener('click',()=>{
            for (let i = 0; i < anow.length; i++) {
            if(anow[i].parentElement==anow[index].parentElement){
                anow[i].style.backgroundColor='transparent'
            }
            }
            anow[index].style.backgroundColor='#b2840685'
        })
}
for (let index = 0; index < num; index++) {
    const n=$.createElement('div');
    n.innerHTML='<div class="qustCon "><div class="qust"><h4>Lorem, ipsum dolor sit amet consectetur adipisicing.</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptates distinctio neque doloremque, vel in eveniet sed, aliquid, aut iure vitae modi cum deleniti excepturi id totam a ratione! Voluptates.</p></div><div class="anowserCon"><div class="anowser">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, sequi.</div><div class="anowser">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita voluptatem quos in, odio itaque esse.</div><div class="anowser">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div><div class="anowser">Lorem ipsum dolor sit amet.</div></div></div><button class="anowSub">submit</button>'
    examCon.append(n)
    }

let anowsers=0
for (let index = 0; index < anowSub.length; index++) {
    anowSub[index].addEventListener('click',()=>{
        for (let i = 0; i < anow.length; i++) {
            if(anowSub[index].parentElement==anow[i].parentElement.parentElement.parentElement){
                anow[i].innerHTML="anowser submited"
            }
        }
        anowsers+=4
        console.log(anowsers)
        if((anowsers)==anow.length){
            alert('exam is finsh')
            examCon.classList='examOut'
            window.location.href='./quiz.html'
        }    
    })
}
const a=$.querySelectorAll('.a')
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    element.style.transition='all 300ms '
    element.style.color='#efc310'
}
a[0].addEventListener('click',()=>{
    a[0].style.transition='all 300ms '
    a[0].style.color='#e1d7bc '
    $.querySelector('main').style.transition='all 300ms '
    $.querySelector('main').style.opacity='0'
    $.querySelector('main').addEventListener('transitionend',()=>{
fetch('/school',{
        method:"post",
    }).then(response=>response.text()).then(data=>{window.location=data})
    })
    
})
a[1].addEventListener('click',()=>{
    a[1].style.transition='all 300ms '
    a[1].style.color='#e1d7bc '
    $.querySelector('main').style.transition='all 300ms '
    $.querySelector('main').style.opacity='0'
    $.querySelector('main').addEventListener('transitionend',()=>{
fetch('/quiz',{
        method:"post",
    }).then(response=>response.text()).then(data=>{window.location=data})
    })
    
})
a[2].addEventListener('click',()=>{
    a[2].style.transition='all 300ms '
    a[2].style.color='#e1d7bc '
    $.querySelector('main').style.transition='all 300ms '
    $.querySelector('main').style.opacity='0'
    $.querySelector('main').addEventListener('transitionend',()=>{
fetch('/forum',{
        method:"post",
    }).then(response=>response.text()).then(data=>{window.location=data})
    })
    
})
a[3].addEventListener('click',()=>{
    a[3].style.transition='all 300ms '
    a[3].style.color='#e1d7bc '
    $.querySelector('main').style.transition='all 300ms '
    $.querySelector('main').style.opacity='0'
    $.querySelector('main').addEventListener('transitionend',()=>{
    fetch('/about',{
        method:"post",
    }).then(response=>response.text()).then(data=>{window.location=data})
    })
    
})
a[4].addEventListener('click',()=>{
    a[4].style.transition='all 300ms '
    a[4].style.color='#e1d7bc '
    $.querySelector('main').style.transition='all 300ms '
    $.querySelector('main').style.opacity='0'
    $.querySelector('main').addEventListener('transitionend',()=>{
fetch('/home',{
        method:"post",
    }).then(response=>response.text()).then(data=>{window.location=data})
    })
    
})
a[5].addEventListener('click',()=>{
    a[5].style.transition='all 300ms '
    a[5].style.color='#e1d7bc '
    $.querySelector('main').style.transition='all 300ms '
    $.querySelector('main').style.opacity='0'
    $.querySelector('main').addEventListener('transitionend',()=>{
fetch('/profile',{
        method:"post",
    }).then(response=>response.text()).then(data=>{window.location=data})
    })
    
})