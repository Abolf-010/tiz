const $=document,$body=$.body;

const inputs=$.querySelectorAll(".inp")
const label=$.querySelectorAll(".label")
const hint=$.querySelectorAll(".hint")
const eye=$.querySelectorAll(".fa-eye")
const key=$.querySelector(".fa-key")
const btn=$.getElementById("subBtn")
const rule=$.getElementById("rules")
var UserN=false
var uName=false
var age=false
var phoneNumber=false
var passW=false
var rePass=false
const g=$.getElementById("feadIn")
const fo=$.getElementById("fo")
const main=$.querySelector(".mainContainer")
const header=$.querySelector(".headerContainer")
const loginLink=$.querySelector(".loginLink")
const footer=$.querySelector(".footer")
const feadIn=$.querySelector(".feadIn")
const feadout=$.querySelector(".feadOut")
const GC=$.querySelector(".gridContainer")
let ali=window.location.pathname.split('/')
loginLink.addEventListener('click',()=>{
    $.querySelector('div').style.transition='all 300ms '
    $.querySelector('div').style.opacity='0'
    $.querySelector('div').addEventListener('transitionend',()=>{
    fetch('/logIn',{
        method:"post"
    }).then(response=>response.text()).then(data=>{window.location.href=data})
})
})
feadIn.addEventListener('animationend',()=>{
    g.classList='gridContainer'
})
function colorTR(hint,boll) {
    !boll?hint.style.color="#d2c886":hint.style.color="#efc310"
    
}
function sub(){
    if(UserN&&uName&&age&&passW&&rePass&&phoneNumber&&rule.checked){
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
                fetch('/sub',{
                    method:"post",
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({
                        Uname:inputs[0].value,
                        userName:inputs[2].value,
                        age:inputs[1].value,
                        pass:inputs[4].value,
                        email:inputs[3].value
                    })
                }).then(response=>response.text()).then(data=>{window.location=data})
            })
        })
    }
    else{
        btn.setAttribute("disabled","")
        btn.style.color="#bb993a"
    }
}
function hadeNum(str){
    for(let i=0;i<str.length;i++){
        if (str.search(/\d/g) === -1) {
            return false;
            break;
        } else {
            return true;
            continue
        }
        // if(inp[i].search([0-9])){return true;break}
    }
}
function hadeSymbol(str){
    for(let i=0;i<str.length;i++){
        if (str.search(/\W/g) === -1&&str.search('_') === -1) {
            return false;
            break;
        } else {
            return true;
            continue
        }
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
        rule.checked=false
    })
    
    inputs[1].addEventListener("focus",()=>{

        label[1].style.margin="0 0 0.3rem 0"
    })    
    inputs[1].addEventListener('blur',()=>{
        if(inputs[1].value==""||inputs[1].value==" "||inputs[1].value==null){
            label[1].style.bottom="0.5rem"
            label[1].style.fontSize="1rem"
            label[1].style.margin="0 0 0 0"
        }   
        else{
            label[1].style.bottom="1.2rem"
            label[1].style.fontSize="0.8rem"
        }
    })
}
inputs[0].addEventListener("input",()=>{
    
    switch(true){
        case inputs[0].value==""||inputs[0].value==" "||inputs[0].value==null : hint[0].innerHTML="status:Empty",colorTR(hint[0],1),sub(),UserN=false;break
        case inputs[0].value.length<3 : hint[0].innerHTML="status:Name is to short",colorTR(hint[0],0),UserN=false,sub();break
        case hadeNum(inputs[0].value) : hint[0].innerHTML="status:Name can't contain a number",colorTR(hint[0],0),UserN=false,sub();break
        case hadeSymbol(inputs[0].value) : hint[0].innerHTML="status:Name can't contain a symbol",colorTR(hint[0],0),UserN=false,sub();break
        case !hadeNum(inputs[0].value)&&!hadeSymbol(inputs[0].value)&&!inputs[0].value.length<3 : hint[0].innerHTML="status:Accepted",colorTR(hint[0],1),UserN=true,sub();break
    }  
})
inputs[1].addEventListener("input",()=>{inputs[1].value==""||inputs[1].value==" "||inputs[1].value==null ?( hint[1].innerHTML="status:Empty",age=false,colorTR(hint[1],0),sub()):hint[1].innerHTML="status:Accepted",age=true,sub(),colorTR(hint[1],1)})
inputs[3].addEventListener("input",()=>{inputs[3].value==""||inputs[3].value==" "||inputs[3].value==null ? (hint[3].innerHTML="status:Empty",phoneNumber=false,colorTR(hint[3],0),sub()):hint[3].innerHTML="status:Accepted",phoneNumber=true,sub(),colorTR(hint[3],1)})
function num (){if(inputs[2].value[0].search(/\d/g) === -1){  return true}}
function sym (){if(inputs[2].value[0].search(/\W/g) === -1&&inputs[2].value[0].search('_') === -1 ){  return true}}
inputs[2].addEventListener("input",()=>{
    switch(true){
        case inputs[2].value==""||inputs[2].value==" "||inputs[2].value==null : hint[2].innerHTML="status:Empty",uName=false,colorTR(hint[2],0),sub();break
        case inputs[2].value.length<3 : hint[2].innerHTML="status:Username is to short",uName=false,colorTR(hint[2],0),sub();break
        case !num(): hint[2].innerHTML="status:Username can't start with number",uName=false,colorTR(hint[2],0),sub();break
        case !sym(): hint[2].innerHTML="status:Username can't start with symbol",uName=false,colorTR(hint[2],0),sub();break
        case num()&&sym()&&!inputs[2].value.length<3 : hint[2].innerHTML="status:Accepted",uName=true,sub(),colorTR(hint[2],1);break
    }
})
inputs[4].addEventListener("input",()=>{
    
    switch(true){
        case inputs[4].value==""||inputs[4].value==" "||inputs[4].value==null : hint[4].innerHTML="status:Empty",passW=false,colorTR(hint[4],0),sub();break
        case inputs[4].value.length<8 : hint[4].innerHTML="status:Password is too short",passW=false,colorTR(hint[4],0),sub();break
        case !hadeNum(inputs[4].value) : hint[4].innerHTML="status:Password must contain number",passW=false,colorTR(hint[4],0),sub();break
        case !hadeSymbol(inputs[4].value) : hint[4].innerHTML="status:Password must contain symbol",passW=false,colorTR(hint[4],0),sub();break
        case hadeNum(inputs[4].value)&&hadeSymbol(inputs[4].value)&&!inputs[4].value.length<8 : hint[4].innerHTML="status:Accepted",passW=true,sub(),colorTR(hint[4],1);break
        
    }  
     if(inputs[5].value==""||inputs[5].value==" "||inputs[5].value==null){hint[5].innerHTML="status:Empty";rePass=false;colorTR(hint[5],0);sub()}else{if(inputs[5].value==inputs[4].value){hint[5].innerHTML="status:Accepted";rePass=true;sub();colorTR(hint[5],1)}else{hint[5].innerHTML="status:Repassword must be like password";rePass=false;colorTR(hint[5],0);sub()}}
})
inputs[5].addEventListener('input',()=>{
    if(inputs[5].value==""||inputs[5].value==" "||inputs[5].value==null){hint[5].innerHTML="status:Empty";rePass=false;colorTR(hint[5],0);sub()}else{if(inputs[5].value==inputs[4].value){hint[5].innerHTML="status:Accepted";rePass=true;sub();colorTR(hint[5],1)}else{hint[5].innerHTML="status:Repassword must be like password";rePass=false;colorTR(hint[5],0);sub()}}
})
var isHide=true;
for(let i=0;i<eye.length;i++){
    eye[i].addEventListener("click",()=>{
        isHide?(inputs[4].setAttribute("type","text"),inputs[5].setAttribute("type","text"),isHide=false,eye[0].style.color="#d2c886",eye[1].style.color="#d2c886"):(inputs[4].setAttribute("type","password"),inputs[5].setAttribute("type","password"),isHide=true,eye[0].style.color="#efc310",eye[1].style.color="#efc310")
    })
}
function generatePass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz' +
        '0123456789' ;
        let symbol='!@#$%^&*()_+={}[]'
    for (let i = 1; i <= 16; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
        pass += str.charAt(char)
        pass += symbol.charAt(char)
    }
    pass+=Math.floor(Math.random()*9);
    return pass;
}
key.addEventListener("click",()=>{
    
    let pass=generatePass()
    inputs[4].value=pass;passW=true
    inputs[5].value=pass;rePass=true
    sub()
    switch(true){
        case inputs[4].value==""||inputs[4].value==" "||inputs[4].value==null : hint[4].innerHTML="status:Empty",passW=false,colorTR(hint[4],0),sub();break
        case inputs[4].value.length<8 : hint[4].innerHTML="status:Password is too short",passW=false,colorTR(hint[4],0),sub();break
        case !hadeNum(inputs[4].value) : hint[4].innerHTML="status:Password must contain number",passW=false,colorTR(hint[4],0),sub();break
        case !hadeSymbol(inputs[4].value) : hint[4].innerHTML="status:Password must contain symbol",passW=false,colorTR(hint[4],0),sub();break
        case hadeNum(inputs[4].value)&&hadeSymbol(inputs[4].value)&&!inputs[4].value.length<8 : hint[4].innerHTML="status:Accepted",passW=true,sub(),colorTR(hint[4],1);break
        
    }  
     if(inputs[5].value==""||inputs[5].value==" "||inputs[5].value==null){hint[5].innerHTML="status:Empty";rePass=false;colorTR(hint[5],0);sub()}else{if(inputs[5].value==inputs[4].value){hint[5].innerHTML="status:Accepted";rePass=true;sub();colorTR(hint[5],1)}else{hint[5].innerHTML="status:Repassword must be like password";rePass=false;colorTR(hint[5],0);sub()}}
    label[4].style.bottom="1.2rem"
    label[4].style.fontSize="0.8rem"
    label[5].style.bottom="1.2rem"
    label[5].style.fontSize="0.8rem"
})
rule.addEventListener("input",()=>{
    sub()
})
window.addEventListener('popstate',(event)=>{
    g.classList='feadOut'
    const feadout=$.querySelector(".feadOut")
    g.addEventListener('animationend',()=>{
        main.style.display='none'
        header.style.display='none'
        footer.style.display='none'
        fetch('/a',{
            method:"post"
        }).then(response=>response.text()).then(data=>{window.location=data})
    })
})
