const $=document,inputs=$.querySelectorAll('.inp'),label=$.querySelectorAll('.label'),eye=$.querySelector('.fa-eye'),btn=$.querySelector('.btn')
let UserN=false,passW=false,captcha=false
const g=$.getElementById("feadIn")
const feadIn=$.querySelector(".feadIn")
const feadout=$.querySelector(".feadout")
const main=$.querySelector(".mainContainer")
const header=$.querySelector(".headerContainer")
const signinLink=$.querySelector(".signinLink")
const footer=$.querySelector(".footer")
const GC=$.querySelector(".gridContainer")
const fo=$.getElementById("fo")
let ali=window.location.pathname.split('/')



window.addEventListener('popstate',()=>{
    g.classList='feadOut'
    history.go(1)
    const feadout=$.querySelector(".feadOut")   
    g.addEventListener('animationend',()=>{
        main.style.display='none'
        header.style.display='none'
        footer.style.display='none'
        fetch('/a',{
            method:"post"
        }).then(response=>response.text()).then(data=>{location=data})
    })
})
signinLink.addEventListener('click',()=>{
    $.querySelector('div').style.transition='all 300ms '
    $.querySelector('div').style.opacity='0'
    $.querySelector('div').addEventListener('transitionend',()=>{
    fetch('/sigIn',{
        method:"post"
    }).then(response=>response.text()).then(data=>{window.location.href=data})
})
})
feadIn.addEventListener('animationend',()=>{
    g.classList='gridContainer'
})
function sub(){
    if(UserN&&passW&&captcha){
        btn.removeAttribute("disabled")
        btn.style.color="#d2c886"
        btn.addEventListener('click',()=>{
            fo.addEventListener('submit',(e)=>{
                e.preventDefault()
            })
            g.classList='feadOut'
            g.addEventListener('animationend',()=>{
                main.style.display='none'
                header.style.display='none'
                footer.style.display='none'
                fetch('/log',{
                    method:"post",
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({
                        Uname:inputs[0].value,
                        pass:inputs[1].value
                    })
                }).then(response=>response.text()).then(data=>{
                    fetch(`/${data}`,{
                        method:"post"}).then(response=>response.text()).then(data=>{window.location=data})
                })
            })
        })
    }
    else{
        btn.setAttribute("disabled","")
        btn.style.color="#bb993a"
    }
}
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("input",()=>{
        sub()
    })   
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
    window.addEventListener("load",()=>{
        inputs[i].value=""
    })
}
let isHide=true;
inputs[0].addEventListener("input",()=>{
    inputs[0].value==null||inputs[0].value==""||inputs[0].value.length<3?UserN=false:UserN=true;
})
inputs[1].addEventListener("input",()=>{
    inputs[1].value==null||inputs[1].value==""||inputs[1].value.length<3?passW=false:passW=true;
})
inputs[2].addEventListener("input",()=>{
    inputs[2].value==null||inputs[2].value==""||inputs[2].value.length<3?captcha=false:captcha=true;
})
eye.addEventListener("click",()=>{
    isHide?(inputs[1].setAttribute("type","text"),isHide=false,eye.style.color="#d2c886"):(inputs[1].setAttribute("type","password"),isHide=true,eye.style.color="#efc310")
})