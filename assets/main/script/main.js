const $=document;
const todoSub=$.getElementById('todoSub')
const inp=$.getElementById('toDoInp')
const todoCon=$.getElementById('TodoCon')
var div=$.createElement('div')
var div1=$.createElement('div')
var bin=$.createElement('i')
var check=$.createElement('i')
var span=$.createElement('span')
var trash;
var tik;
var toDoCon;
const a=$.querySelectorAll('.a')
function todo(){
    var div=$.createElement('div')
    var div1=$.createElement('div')
    var bin=$.createElement('i')
    var check=$.createElement('i')
    var span=$.createElement('span')
    div.classList='toDo';
    bin.classList='fa fa-trash';
    check.classList='fa fa-check';
    span.innerHTML=inp.value;
    div1.append(bin,check)
    div.append(div1,span)
    todoCon.append(div)
    inp.value=""
    trash=$.querySelectorAll('.fa-trash')
    tik=$.querySelectorAll('.fa-check')
    toDoCon=$.querySelectorAll('.toDo')
    for(let i=0;i<trash.length;i++){
        trash[i].addEventListener('click',()=>{
            toDoCon[i].remove()
        })
    }
    for(let i=0;i<tik.length;i++){
        if(i>0){
            tik[i].addEventListener('click',()=>{
                tik[i].classList.toggle("fa-checked");
            })
            tik[i-1].addEventListener('click',()=>{
                tik[i-1].classList.toggle("fa-checked");
            })
        }
        else{
            tik[i].addEventListener('click',()=>{
                tik[i].classList.toggle("fa-checked");
            })
        }

    }
}
fetch('/user',{
    method:"get",
}).then(response=>response.text()).then(data=>{console.log(data)})
if(localStorage.getItem('login')==undefined){
    localStorage.setItem('login',true)
}
localStorage.setItem('userId',2)
console.log(localStorage.getItem('userId'))
inp.addEventListener('focus',()=>{
    window.addEventListener('keydown',(event)=>{
        if(event.key=='Enter'){
            if(inp.value!=''){
                todo()
            }            
        }
    })
    todoSub.addEventListener('click',()=>{
        if(inp.value!=''){
            todo()
        }
    })
    
})
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