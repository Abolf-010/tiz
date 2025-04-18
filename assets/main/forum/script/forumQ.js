const $=document;
const likes=$.querySelectorAll('.fa-heart');
const likesCount=$.querySelectorAll('.likcCount');
const addNew=$.querySelectorAll('.addNew');
const closebtn=$.querySelector('.fa-close');
const newAnow=$.getElementById('newAnow');
const main=$.getElementsByTagName('main');
for(let i=0;i<likes.length;i++){
    likes[i].addEventListener('click',()=>{
        if(likes[i].classList=='far fa-heart'){
        likes[i].classList='fas fa-heart';
        likesCount[i].innerHTML=Number(likesCount[i].innerHTML)+1
    }
        else{
            likes[i].classList='far fa-heart';
            likesCount[i].innerHTML=Number(likesCount[i].innerHTML)-1
        }
    })
}
for (let index = 0; index < addNew.length; index++) {
    addNew[index].addEventListener('click',()=>{
        main[0].classList='mainBlur';
        newAnow.classList='newAnow';
    })
}
closebtn.addEventListener('click',()=>{
    main[0].removeAttribute('class');
    newAnow.classList='newAnow0';
})
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