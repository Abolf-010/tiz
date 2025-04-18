const $=document,$body=$.body

const chose=$.querySelector('.Chose')
window.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('login')=='true'){
        let l=Number(localStorage.getItem('userId'))
        fetch('/user',{
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                id:l
            })
    }).then(response=>response.text()).then(data=>{window.location=data})
}else{
    if(localStorage.getItem('animEnd')==undefined){
        localStorage.setItem("animEnd",'0')
    }
    console.log()
    const chosed=$.querySelectorAll('.chose')
    const h=$.getElementsByTagName('h1')
    if(localStorage.getItem('animEnd')=='0'){
        h[0].classList="intro"
    
    $.querySelector('.intro').addEventListener('animationend',()=>{
            chose.classList="choseDiv"
            localStorage.setItem("animEnd",'1')
            lai()
        })
    }else{
        chose.classList="choseDiv"
        h[0].classList="h"
        lai()
    }
    
    function lai (){chosed[0].addEventListener('click',()=>{
        chose.classList='feadOut'
        const feadOut=$.querySelector('.feadOut')
        feadOut.addEventListener('animationend',()=>{
            chose.classList='choseDiv'      
            fetch('/sigIn',{
                method:"post"
            }).then(response=>response.text()).then(data=>{window.location.href=data})
    
        })
        
    })
    // history.pushState({path:'index.html'},'',"/")
    window.onpopstate=()=>{
        history.go(1)
    }
    chosed[1].addEventListener('click',()=>{
        chose.classList='feadOut';
        var feadOut=$.querySelector('.feadOut')
    
        feadOut.addEventListener('animationend',()=>{
            chose.classList='choseDiv'
            fetch('/logIn',{
                method:"post"
            }).then(response=>response.text()).then(data=>{window.location.href=data})
            
        })  
        // chose.classList='choseDiv'
    })}
    // if(chose.classList=='feadOut'){
    
    // }
    // feadOut.classList='choseDiv' 
    
}
})
