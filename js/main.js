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


// .main_menu_list > li

// var mainMenulist = document.querySelectorAll('.main_menu_list > li');
// var mainMenucount = mainMenulist.length;

// for(var mi; mi < mainMenucount; mi++){
//     mainMenulist[i].style.left = i * 100 + '%';
// }






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

for(var bp = 0; bp < slideCount; bp++){
    pagerBtn[bp].addEventListener('click', function(){
        var targetNum = parseInt(this.innerText);
        
        moveSlide(targetNum);

    });
}





//자동 슬라이드
var timer;

function autoslide(){
    timer = setInterval(function(){
        var nextIndex = currentIndex + 1;
        if(currentIndex == slideCount - 1){
            nextIndex = 0;
        }
        moveSlide(nextIndex);
    
    },3500);
}
autoslide();

//마우스 올리면 멈추고 나가면 다시 움직이고


slideWrapper.addEventListener('mouseover',function(){
    clearInterval(timer);
});
slideWrapper.addEventListener('mouseout',function(){
    autoslide();
});


/* ---------------------------- GAME CATEGORYS -------------------------------- */

var categorys = document.querySelector('.cat_icons > li:nth-child(3)');

// // var section1 = document.querySelector('.section1');
// var sec1Amt = document.querySelector('.section1').pageYOffset();

// // var section2 = document.querySelector('.section2');
// var sec2Amt = document.querySelector('.section2').pageYOffset();

// // var community = document.querySelector('.community');
// var comAmt = document.querySelector('.community').pageYOffset();

// // var careers = document.querySelector('.careers_wrapper');
// var car2Amt = document.querySelector('.careers_wrapper').pageYOffset();


// categorys.addEventListener('click', function(evt){ 
//     evt.preventDefault();
    
//     var ctTimer = setInterval(function(){
//     var scrollAmt = window.pageYOffset;
        
//         if(scrollAmt != 0){
//             window.scrollBy(0,10);
//         }else if(scrollAmt = communityAmt){
//             clearInterval(ctTimer);
//     }

// },8);

// });





// categorys.addEventListener('click', function(evt){ 
//     evt.preventDefault();

//     // 각 카테고리를 클릭하면
//     // 섹션들의 상단에서 떨어진 거리로 window.scrollBy();

//     for(var Gct = 0; Gct < slideCount; Gct++){
//         categorys[Gct].addEventListener('click', function(){
//             window.scrollBy(sec1Amt);

//             moveSlide(GtargetNum);
    
//         });
//     }
    
// });





//     var bttTimer = setInterval(function(){
//         var scrollAmt = window.pageYOffset;

//         for(var i = 0; i<sec1SlideCount; i++){
//             sec1Slide[i].style.left = i * 420 + 'px';
//         };

//         window.scrollBy(0,-50);
            

// },8);







/* ---------------------------- SECTION 0 -------------------------------- */

var section0 = document.querySelector('.section0');


window.addEventListener('scroll', function(){
    var sec0scrollAmt = window.pageYOffset;

if(sec0scrollAmt > 150){
    section0.classList.add('active');
}
});



/* ---------------------------- SECTION 1 -------------------------------- */

var section1 = document.querySelector('.section1');
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



window.addEventListener('scroll', function(){
    var sec1scrollAmt = window.pageYOffset;

if(sec1scrollAmt > 250){
    section1.classList.add('active');
}
});











/* ---------------------------- SECTION 2 -------------------------------- */

var section2 = document.querySelector('.section2');


window.addEventListener('scroll', function(){
    var sec2scrollAmt = window.pageYOffset;

if(sec2scrollAmt > 900){
    section2.classList.add('active');
}
});



/* ------------------------------STEAM AI---------------------------- */

var steamAi = document.querySelector('.steam_ai_wrapper');
var aiLeft = steamAi.querySelector('.ai_left');
var aiRight = steamAi.querySelector('.ai_right');


window.addEventListener('scroll', function(){
    var aiscrollAmt = window.pageYOffset;

if(aiscrollAmt > 1800){
    steamAi.classList.add('active');
    aiLeft.classList.add('active');
    aiRight.classList.add('active');
}

});



/* ---------------------------- COMMUNITY -------------------------------- */

var community = document.querySelector('.community');
var CMslideWrapper = document.querySelector('.community_wrapper');
var CMslides = document.querySelector('.community_slides');
var CMslide = document.querySelectorAll('.com_slide');
var CMslideCount = CMslide.length;
var CMcurrentIndex = 0;
var CMprevBtn = CMslideWrapper.querySelector('.com_controls .com_prev');
var CMnextBtn = CMslideWrapper.querySelector('.com_controls .com_next');

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







window.addEventListener('scroll', function(){
    var cmscrollAmt = window.pageYOffset;

if(cmscrollAmt > 2400){
    community.classList.add('active');
}
});



/*====== video ======*/
var comLeft = document.querySelectorAll('.com_left');

comLeft.forEach(function(item,index){
    item.addEventListener('mouseenter',function(){
        comLeft.forEach(function(item,index){
            item.querySelector('video').play();      
        });

        var video = this.querySelector('video');
        video.currentTime = 0;
    });
});


/* ------------------- CAREERS --------------------- */


var careers = document.querySelector('.careers_wrapper');

window.addEventListener('scroll', function(){
    var crscrollAmt = window.pageYOffset;

    // console.log(crscrollAmt);


if(crscrollAmt > 3200){
    careers.classList.add('active');

}

});





/* ---------------------- NOTICE MODAL ----------------------- */



var closebtn = document.querySelector('.close a');
var modal = document.querySelector('.modal');

closebtn.addEventListener('click',function(cl){
    cl.preventDefault();
    modal.style.display = 'none';
});





/* ---------------------- BACK TO TOP ----------------------- */


var backToTop = document.querySelector('.back_to_top');

window.addEventListener('scroll',function(evt){
    evt.preventDefault();
    var scrollAmt = window.pageYOffset;

    // console.log(scrollAmt);

if(scrollAmt > 1000){
    backToTop.classList.add('active');

}else{
    backToTop.classList.remove('active');
}

});

backToTop.addEventListener('click', function(evt){ 
    evt.preventDefault();

    
    var bttTimer = setInterval(function(){
    var scrollAmt = window.pageYOffset;
        
        if(scrollAmt != 0){
            window.scrollBy(0,-50);
        }else{
            clearInterval(bttTimer);
    }

},8);

});

var loadMoreBtn = document.querySelector('button#load-more');
var loadMoreContents = document.querySelector('.loadmore_contents');

loadMoreBtn.addEventListener('click', function(e){
    e.preventDefault();
    loadMoreContents.classList.add('show');
});

if(loadMoreContents.classList.contains('show')){
    loadMoreBtn.classList.add('done');
};








// var container = $('#gallery'),
// loadMoreBtn = $('#load-more'),
// addItemCount = 10, //한번에 추가할 목록 수
// added = 0, // 화면에 표시된 항목 수
// allData = []; //json 데이터 모두


// container.masonry({
//     // options
//     itemSelector: '.gallery-item',
//     columnWidth: 270,
//     gutter:20
// });

// //$.getJSON('파일명', function(data){....})
// $.getJSON('data/content.json', initGallery);

// function initGallery(data){
//     allData = data;
//     console.log(allData);

//     addItems(); //리스트를 생성해서 ul의 내용으로 추가           
    
// }//initGallery

// loadMoreBtn.click(function(){
//     addItems();
// });

// function addItems(){
//     var elements = [];
//     var itemHTML = '';
//     var slicedData = allData.slice(added, added + addItemCount);

//     $.each(slicedData, function(i,item){

//         itemHTML = '<li class="gallery-item">'+
//         '<a href="'+item.images.large+'">'+
//             '<img src="'+item.images.thumb+'" alt="">'+
//         '</a>'+
//         '<h3>'+item.title+'</h3>'+
//         '</li>';
//         elements.push($(itemHTML).get(0));
//     });
    
//     added = added + addItemCount;

//     container.append(elements);

//     if(added == allData.length){
//         loadMoreBtn.hide();
//     }
    
//     container.imagesLoaded( function() {                
  
//         container.masonry( 'appended', elements );

//     });
// }//addItems
