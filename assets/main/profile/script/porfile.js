const $=document;
const Ninp=$.getElementById('EdituserN')
const Einp=$.getElementById('EditEmail')
const Pinp=$.getElementById('EditPass')
const inps=$.querySelectorAll('.out')
const span=$.querySelectorAll('span')
const inputs=$.querySelectorAll('input')
const label=$.querySelectorAll('label')
let l;
window.addEventListener('DOMContentLoaded',()=>{
    fetch('/profile',{
        method:'get'
    }).then(response=>response.text()).then(data=>{l=data})

})
async function asdf(){
    await console.log(l)
}
asdf()
Ninp.addEventListener('click',()=>{
    span[2].classList='spanFOUT'
    inps[0].classList='laFIN'
})
Einp.addEventListener('click',()=>{
    span[3].classList='spanFOUT'
    inps[1].classList='laFIN'
})
Pinp.addEventListener('click',()=>{
    span[4].classList='spanFOUT'
    inps[2].classList='laFIN'
})
inputs[1].addEventListener("focus",()=>{

    window.addEventListener('keydown',(event)=>{
        if(event.key=='Enter'){
            fetch('/user/userName',{
                method:"post",
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({
                        name:inputs[1].value
                    })
            })
            span[2].innerHTML=`UserName: ${inputs[1].value} <i class="fa fa-edit" id="EdituserN">`
            span[2].classList='spanFIN'
            inps[0].classList='laFOUT'
        }})})
inputs[2].addEventListener("focus",()=>{
    window.addEventListener('keydown',(event)=>{
        if(event.key=='Enter'){
            fetch('/user/email',{
                method:"post",
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({
                        value:inputs[2].value
                    })
            })
            span[3].innerHTML=`Email: ${inputs[2].value} <i class="fa fa-edit" id="EditEmail">`
            span[3].classList='spanFIN'
        inps[1].classList='laFOUT'
}})})
let pasval;
inputs[3].addEventListener("focus",()=>{
    
    window.addEventListener('keydown',(event)=>{
        if(event.key=='Enter'){
            label[3].innerHTML='New pass'
            pasval=inputs[3].value
            inputs[3].value=""
            window.addEventListener('keydown',(event)=>{
                if(event.key=='Enter'){
                    label[3].innerHTML='Type new pass agine'        
                    window.addEventListener('keydown',(event)=>{

                        if(event.key=='Enter'){
                            console.log(pasval)
                            if(event.key=='Enter'){
                                fetch('/user/pass',{
                                    method:"post",
                                        headers:{'Content-Type': 'application/json'},
                                        body:JSON.stringify({
                                            value:pasval
                                        })
                                })
                            span[4].innerHTML=`password: ${inputs[3].value} <i class="fa fa-edit" id="EditPass">`
                            span[4].classList='spanFIN'
                            inps[2].classList='laFOUT'
                            label[3].innerHTML='current pass'
                        }
                    }})
                }})
            
        }
    })
})
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("focus",()=>{
        label[i].style.bottom="1.2rem"
        label[i].style.fontSize="0.8rem"
        inputs[i].addEventListener('blur',()=>{
            if(inputs[i].value==""||inputs[i].value==" "||inputs[i].value==null){
                label[i].style.bottom="0.5rem"
                label[i].style.fontSize="1rem"
            }   
            else{
                label[i].style.bottom="1.2rem"
                label[i].style.fontSize="0.8rem"
            }
        })
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