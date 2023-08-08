var dummy=['images/boy.png','images/ninja.png','images/boy.png','images/prof.png','images/ninja.png','images/prof.png'];
var images=random(dummy);
function random(dummy){
    for(let i=dummy.length;i>0;i--){
        let rand_number=Math.floor(Math.random()*i);
        [dummy[i-1],dummy[rand_number]]=[ dummy[rand_number],dummy[i-1]];
    }
    return dummy;
}

var wholebox=document.querySelector('.wholebox');
for(let i=0;i<dummy.length;i++){
    wholebox.innerHTML+=
    `<div class="box" data-sync="false" id="${i}" data-same=${images[i]}>
          <div class="front">
          </div>
          <div class="back">
            <img src="${images[i]}" alt="">
          </div>
    </div>`
}
var box=document.querySelectorAll('.box');
var heading=document.getElementById('heading');
let head=heading.innerHTML.split('');
box.forEach((each,index) => {
    each.addEventListener('click',function(){
        rotate(each,index) ;
    });
})
var points=0;
var array=[];
var arrayElement=[];
function rotate(each,val){
    if(!(array.includes(each.id)) && each.getAttribute('data-sync')=="false"){
        array.push(each.getAttribute('data-same'),each.id);
        arrayElement.push(each);
        
        each.children[0].style.transform='rotateY(180deg)';
        each.children[1].style.transform='rotateY(0deg)';
        console.log(array);
        if(array.length==4){
                if(array[0]==array[2]){
                    arrayElement[0].setAttribute('data-sync','true')
                    arrayElement[1].setAttribute('data-sync','true')
                    points++;
                    array.length=0;
                    arrayElement.length=0;
                    setTimeout(() => {
                        if(points==3){
                            wholebox.innerHTML="<h2 class='won'>You Won !</h2>";
                        }
                    }, 1000);
                }
                else{
                    setTimeout(() => {
                            arrayElement.forEach((element) => {
                                element.children[0].style.transform='rotateY(0deg)';
                                element.children[1].style.transform='rotateY(180deg)';
                            })
                            array.length=0;
                            arrayElement.length=0;
                        }, 500);
                        
                    }
        
    }
    }
    
    }
   
