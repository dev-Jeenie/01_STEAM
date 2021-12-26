/* ---------------------------- HEADER -------------------------------- */



var mainMenu = document.querySelector('.main_menu');
var menuOST = mainMenu.offsetTop;
// console.log(header.offsetTop);//스크롤이 이 양보다 많으면

/*
a.offsetTop 상단에서의 거리
a.offsetLeft 왼쪽에서의 거리
*/
window.addEventListener('scroll', function(){
    var scrollAmt = window.pageYOffset;

    // console.log(scrollAmt);

/*
스크롤양이 헤더상단에서 떨어진 거리 보다 많으면
header에 sticky 클래스명 추가
아니면 제거
*/

if(scrollAmt > menuOST){
    mainMenu.classList.add('sticky');
}else{
    mainMenu.classList.remove('sticky');
}

});



/* ---------------------------- BANNER -------------------------------- */



/*변수 지정*/

var slideWrapper = document.querySelector('.slide_wrapper');
var slides = slideWrapper.querySelector('.bn_slides');
var slide = slides.querySelectorAll('.bn_slide');
var slideCount = slide.length;
var currentIndex = 0;
var prevBtn = slideWrapper.querySelector('.prev');
var nextBtn = slideWrapper.querySelector('.next');
var pagerHTML = '';
var pager = document.querySelector('.pager');


/* 슬라이드를 가로로 배열 */

for(var i = 0; i < slideCount; i++){
    slide[i].style.left = i*100 + '%';

    pagerHTML = pagerHTML + '<span>' + i + '</span>';
}

/* 이동 함수 생성 */

pager.innerHTML = pagerHTML;
pagerBtn = pager.querySelectorAll('span');


function moveSlide(num){
    slides.style.left = num * -100 + '%';
    currentIndex = num;

    for(x = 0; x<slideCount; x++){
        pagerBtn[x].classList.remove('active');
        // console.log(pagerBtn);
    }
    pagerBtn[currentIndex].classList.add('active');
}

moveSlide(0);

/* 이전 버튼 이후 버튼 연결 */

nextBtn.addEventListener('click',function(){
    if(currentIndex < slideCount - 1){
        moveSlide(currentIndex + 1);
    }else{
        moveSlide(0);
    } 
});

prevBtn.addEventListener('click',function(){
    if(currentIndex > 0){
        moveSlide(currentIndex - 1);
    }else{
        moveSlide(slideCount - 1);
    }
});


/* 페이저 연결 */

//자동 슬라이드
var timer;

function autoslide(){
    timer = setInterval(function(){
        var nextIndex = currentIndex + 1;
        if(currentIndex == slideCount - 1){
            nextIndex = 0;
        }
        moveSlide(nextIndex);
    
    },3000);
}
autoslide();

//마우스 올리면 멈추고 나가면 다시 움직이고


slideWrapper.addEventListener('mouseover',function(){
    clearInterval(timer);
});
slideWrapper.addEventListener('mouseout',function(){
    autoslide();
});







/* ---------------------------- SECTION 1 -------------------------------- */


var sec1SlideWrapper = document.querySelector('.content_body');
var sec1Slides = document.querySelector('.sec1_slides');
var sec1Slide = document.querySelectorAll('.sec1_slide');
var sec1SlideCount = sec1Slide.length;
var sec1CurrentIndex = 0;
var sec1PrevBtn = document.querySelector('.sec1_prev');
var sec1NextBtn = document.querySelector('.sec1_next');

for(var i = 0; i<sec1SlideCount; i++){
    sec1Slide[i].style.left = i * 420 + 'px';
};

// sec1Slide[0].style.left = 0;
// sec1Slide[1].style.left = 420 + 'px';
// sec1Slide[2].style.left = 840 + 'px';


function sec1moveSlide(s1num){
    sec1Slides.style.left = -s1num * 420 + 'px';
    sec1CurrentIndex = s1num;
}

sec1moveSlide(0);

sec1NextBtn.addEventListener('click',function(){
    if(sec1CurrentIndex < sec1SlideCount - 3){
        sec1moveSlide(sec1CurrentIndex + 1);
    }else{
        sec1moveSlide(0);
    }
});

sec1PrevBtn.addEventListener('click',function(){
    if(sec1CurrentIndex > 0){
        sec1moveSlide(sec1CurrentIndex - 1);
    }else{
        sec1moveSlide(sec1SlideCount - 3);
    }

});




/* ---------------------------- SECTION 2 -------------------------------- */



/* ---------------------------- COMMUNITY -------------------------------- */


var CMslideWrapper = document.querySelector('.community_wrapper');
var CMslides = document.querySelector('.community_slides');
var CMslide = document.querySelectorAll('.com_slide');
var CMslideCount = CMslide.length;
var CMcurrentIndex = 0;
var CMprevBtn = CMslideWrapper.querySelector('.com_controls .com_prev');
var CMnextBtn = CMslideWrapper.querySelector('.com_controls .com_next');
// var CMpagerHTML = '';
// var CMpager = document.querySelector('.com_pager');


/* 슬라이드를 가로로 배열 */


// CMslide[0].style.left = 0;
// CMslide[1].style.left = 100 + '%';
// CMslide[2].style.left = 200 + '%';

for(var c = 0; c<CMslideCount; c++){
    CMslide[c].style.left = c * 100 + '%';
}

function CMmoveSlide(num){
    CMslides.style.left = -num * 100 + '%';
    CMcurrentIndex = num;
}
        CMmoveSlide(0);

CMnextBtn.addEventListener('click',function(){
    if(CMcurrentIndex < CMslideCount - 1){
        CMmoveSlide(CMcurrentIndex + 1);
    }else{
        CMmoveSlide(0);
    }
});


CMprevBtn.addEventListener('click',function(){
    if(CMcurrentIndex > 0){
        CMmoveSlide(CMcurrentIndex - 1);
    }else{
        CMmoveSlide(CMslideCount - 1);
    }
});




// for(var i = 0; i < slideCount; i++){
//     CMslide[i].style.left = i*100 + '%';

//     CMpagerHTML = CMpagerHTML + '<span>' + i + '</span>';
// }

// /* 이동 함수 생성 */

// CMpager.innerHTML = CMpagerHTML;
// CMpagerBtn = CMpager.querySelectorAll('span');


// function CMmoveSlide(num){
//     CMslides.style.left = num * -100 + '%';
//     CMcurrentIndex = num;

//     for(x = 0; x<CMslideCount; x++){
//         CMpagerBtn[x].classList.remove('active');
//         // console.log(pagerBtn);
//     }
//     CMpagerBtn[CMcurrentIndex].classList.add('active');
// }

// CMmoveSlide(0);

// // /* 이전 버튼 이후 버튼 연결 */

// CMnextBtn.addEventListener('click',function(){
//     if(CMcurrentIndex < CMslideCount - 1){
//         CMmoveSlide(CMcurrentIndex + 1);
//     }else{
//         CMmoveSlide(0);
//     } 
// });

// CMprevBtn.addEventListener('click',function(){
//     if(CMcurrentIndex > 0){
//         moveSlide(CMcurrentIndex - 1);
//     }else{
//         moveSlide(CMslideCount - 1);
//     }
// });





/*====== video ======*/

// var comLeft = document.querySelectorAll('.com_left');
// var comVideo = comLeft.querySelectorAll('video');
// // var comPoster = document.querySelector(poster);

// comLeft.addEventListener('mouseenter',function(){
//     comVideo.play();
// })

// comLeft.addEventListener('mouseleave',function(){
//     comVideo.pause();
//     comVideo.currentTime = 0;
//     // comPoster.show();
// })


// //아래가 맞는것
// var comLeft = document.querySelectorAll('.com_left');
// var comVideo = comLeft.querySelectorAll('.com_left video');
// // var comPoster = document.querySelector(poster);

// comLeft.forEach(function(comitem,index){
//     comitem.addEventListener('mouseover',function(){
//     comVideo.play();
//     });
//     comitem.addEventListener('mouseout',function(){
//     comVideo.pause();
//     comVideo.currentTime = 0;
//     });

// });

var comLeft = document.querySelector('.com_left');
var comVideo = document.querySelector('.com_left video');
// var comPoster = document.querySelector(poster);

comLeft.addEventListener('mouseenter',function(){
    comVideo.play();
});

comLeft.addEventListener('mouseleave',function(){
    comVideo.pause();
    comVideo.currentTime = 0;
    // comPoster.show();
});



// $menu2.forEach(function(item,index){
// 	item.style.color = 'blue';
// 	item.addEventListener('mouseover', function(){
// 		this.style.color = 'red';
// 	});
// 	item.addEventListener('mouseout', function(){
// 		this.style.color = 'blue';
// 	});
// });













// comLeft.hover(
//     function () {
//         comVideo[0].play();
//     }


// $(".com_left").hover(function(){
//     $(".com_left video")[0].play();
// });





/* ------------------------------STEAM AI---------------------------- */





















// var cmslideWrapper = document.querySelector('.community_wrapper');
// var cmslides = slideWrapper.querySelector('.community_slides');
// var cmslide = slides.querySelectorAll('.com_slide');
// var cmslideCount = cmslide.length;
// var cmcurrentIndex = 0;
// var cmprevBtn = slideWrapper.querySelector('.prev');
// var cmnextBtn = slideWrapper.querySelector('.next');
// var cmpagerHTML = '';
// var cmpager = document.querySelector('.pager');


// for(var i = 0; i < cmslideCount; i++){
// 	cmslide[i].style.left = i * 330 + 'px';
// }














