
//무료 강의 리스트

    let total_photo = document.querySelectorAll('.swiper_content').length; //변하지 않는 값
    let visible_photo_cnt = 5; // 변하지 않는 값
    let visible_end_photo = visible_photo_cnt; // 변하는 값
    // 앞으로 더 넘길 수 있게 남아있는 장수
    let remain_cnt = total_photo - visible_end_photo; // 변하는 값
    // 절대값으로 넘겨야 할 장수
    let pass_num; // 변하는 값
    let margin=1;
    
    

document.querySelector('.next_button').addEventListener('click', function() {

    
    if(remain_cnt > visible_photo_cnt){
        // if(total_photo - visible_end_photo > visible_photo_cnt){
        pass_num = visible_end_photo;
        visible_end_photo = visible_photo_cnt + visible_end_photo;
        // visible_start_photo = visible_end_photo + visible_start_photo;

        document.querySelector('.prev_button').classList.remove('button_disabled');
        
        
    }else {
        pass_num = total_photo - visible_photo_cnt;
        visible_end_photo = total_photo;
        
        document.querySelector('.next_button').classList.add('button_disabled');
        
    
    }
    
    margin=1;
    document.querySelector('.swiper_wrapper').style.transform = 'translate('+((-236 * pass_num) - 6*margin)+'px)';
    remain_cnt = total_photo - visible_end_photo;
    // console.log(((-236 * pass_num) - 6));
    // alert('절대값으로 넘겨야 할 장수' + pass_num +'마지막 번호' + visible_end_photo);
    // console.log (pass_num);


});


document.querySelector('.prev_button').addEventListener('click', function() {
     //돌아와야될 값
    let visible_start_photo = visible_end_photo - (visible_photo_cnt - 1); // 변하는 값
    let repass_num = (visible_end_photo - visible_start_photo) + 1;
    let pre_remain_cnt = visible_end_photo - visible_photo_cnt;
    
if(pre_remain_cnt >= visible_photo_cnt){
        repass_num = (visible_start_photo - 1) - visible_photo_cnt;
        visible_end_photo = visible_end_photo - visible_photo_cnt;
        visible_start_photo = visible_end_photo - (visible_photo_cnt - 1);

        document.querySelector('.next_button').classList.remove('button_disabled');
        
        
     }else {
         repass_num = 0;
         visible_end_photo = visible_photo_cnt;

         document.querySelector('.prev_button').classList.add('button_disabled');
         
         
     
    }
    // console.log (repass_num);
    
    margin = 0;
    document.querySelector('.swiper_wrapper').style.transform = 'translate('+((-236 * repass_num) - 6*margin)+'px)';
    remain_cnt = total_photo - visible_end_photo;
    // console.log(((-236 * remain_cnt) - 6));
    // alert('넘겨야 할 장수' + remain_cnt +'마지막 번호' + visible_end_photo);
    // console.log(visible_end_photo);
    // console.log(remain_cnt);


});

//drag 슬라이드

// let slider2 = document.querySelector('.swiper_wrapper');

// let is_down = false;
// let startX;
// let scrollLeft;

//     slider2.addEventListener('mousedown', (e) => {
//         is_down = true;
        
//         slider2.classList.add('swiper_active');
//         startX = e.pageX - slider2.offsetLeft;
//         scrollLeft = slider2.scrollLeft;
//     // console.log(scrollLeft);
//     });

//     slider2.addEventListener('mouseleave', () => {
//         is_down = false;
//         slider2.classList.remove('swiper_active');

//     });

//     slider2.addEventListener('mouseup', () => {
//     is_down = false;
//     slider2.classList.remove('swiper_active');

//     });

//     slider2.addEventListener('mousemove', (e) => {
//         if(!is_down) return;
//         e.preventDefault();
//     const x = e.pageX - slider2.offsetLeft;
//     const walk = (x - startX) *2;
//         slider2.scrollLeft = scrollLeft - walk;
//         console.log(slider2.scrollLeft);
//     });


// 왕초보 강의 리스트 (조금 더 깔끔하게 짠 소스)

                
    // let bg_total_photo = document.querySelectorAll('.beginner_swiper_content').length; //변하지 않는 값
    // let bg_visible_photo_cnt = 5; // 변하지 않는 값
    // let bg_visible_end_photo = bg_visible_photo_cnt; // 변하는 값
    // let bg_pass_num; // 변하는 값
    // let bg_margin = 1; // 변하는 값

    // document.querySelector('.beginner_next_btn').addEventListener('click', function () {
    //     console.log(bg_total_photo);
        
    //     if (bg_total_photo - bg_visible_end_photo > bg_visible_photo_cnt) {
    //         bg_pass_num = bg_visible_end_photo;
    //         bg_visible_end_photo = bg_visible_end_photo + bg_visible_photo_cnt;
    //         document.querySelector('.beginner_prev_btn').classList.remove('button_disabled');

    //     } else {
    //         bg_pass_num = bg_total_photo - bg_visible_photo_cnt;
    //         bg_visible_end_photo = bg_total_photo;
    //         document.querySelector('.beginner_next_btn').classList.add('button_disabled');

    //     }
    //     bg_margin = 1;
    //     document.querySelector('.beginner_swiper_wrapper').style.transform = 'translate(' + ((-236 * bg_pass_num) - 6 * bg_margin) + 'px)';


    //     console.log(bg_pass_num);
    //     console.log(bg_visible_end_photo);

    // });





    // document.querySelector('.beginner_prev_btn').addEventListener('click', function () {

    //     if (bg_visible_end_photo - bg_visible_photo_cnt > bg_visible_photo_cnt) {
    //         bg_pass_num = bg_visible_end_photo - bg_visible_photo_cnt * 2;
    //         bg_visible_end_photo = bg_visible_end_photo - bg_visible_photo_cnt;
    //         document.querySelector('.beginner_next_btn').classList.remove('button_disabled');

    //     } else {
    //         bg_pass_num = 0;
    //         bg_visible_end_photo = bg_visible_photo_cnt;
    //         bg_margin = 0;
    //         document.querySelector('.beginner_prev_btn').classList.add('button_disabled');

    //     }

    //     document.querySelector('.beginner_swiper_wrapper').style.transform = 'translate(' + ((-236 * bg_pass_num) - 6 * bg_margin) + 'px)';
    // });


//drag 슬라이드

let slider2 = document.querySelector('.beginner_swiper_wrapper');

let is_down = false;
let startX;
let scrollLeft;
        document.querySelector('.beginner_prev_btn').classList.add('button_disabled');
        document.querySelector('.beginner_next_btn').classList.add('button_disabled');

        slider2.addEventListener('mousedown', (e) => {
        is_down = true;
        
        slider2.classList.add('swiper_active');
        startX = e.pageX - slider2.offsetLeft;
        scrollLeft = slider2.scrollLeft;
        
    // console.log(scrollLeft);
    });

    slider2.addEventListener('mouseleave', () => {
        is_down = false;
        slider2.classList.remove('swiper_active');
        

    });

    slider2.addEventListener('mouseup', () => {
        is_down = false;
        slider2.classList.remove('swiper_active');

    });

        slider2.addEventListener('mousemove', (e) => {
        if(!is_down) return;
        e.preventDefault();

        const x = e.pageX - slider2.offsetLeft;
        const walk = (x - startX) *2;

        slider2.scrollLeft = scrollLeft - walk;
        
        // console.log(slider2.scrollLeft);
    });


// 로드맵 강의 리스트 (무료 리스트보다 조금 더 깔끔하게 짠 소스)


let rm_total_photo = document.querySelectorAll('.roadmap_swiper_content').length; 
let rm_visible_photo_cnt = 5; 
let rm_visible_end_photo = rm_visible_photo_cnt; 
let rm_pass_num; 
let rm_margin = 1; 

document.querySelector('.roadmap_next_btn').addEventListener('click', function () {
    
    if (rm_total_photo - rm_visible_end_photo > rm_visible_photo_cnt) {
        rm_pass_num = rm_visible_end_photo;
        rm_visible_end_photo = rm_visible_end_photo + rm_visible_photo_cnt;
        document.querySelector('.roadmap_prev_btn').classList.remove('button_disabled');

    } else {
        rm_pass_num = rm_total_photo - rm_visible_photo_cnt;
        rm_visible_end_photo = rm_total_photo;
        document.querySelector('.roadmap_next_btn').classList.add('button_disabled');

    }
    rm_margin = 1;
    document.querySelector('.roadmap_swiper_wrapper').style.transform = 'translate(' + ((-295 * rm_pass_num) - 6 * rm_margin) + 'px)';


    console.log(rm_pass_num);
    console.log(rm_visible_end_photo);

});

document.querySelector('.roadmap_prev_btn').addEventListener('click', function () {

    if (rm_visible_end_photo - rm_visible_photo_cnt > rm_visible_photo_cnt) {
        rm_pass_num = rm_visible_end_photo - rm_visible_photo_cnt * 2;
        rm_visible_end_photo = rm_visible_end_photo - rm_visible_photo_cnt;
        document.querySelector('.roadmap_next_btn').classList.remove('button_disabled');

    } else {
        rm_pass_num = 0;
        rm_visible_end_photo = rm_visible_photo_cnt;
        rm_margin = 0;
        document.querySelector('.roadmap_prev_btn').classList.add('button_disabled');

    }

    document.querySelector('.roadmap_swiper_wrapper').style.transform = 'translate(' + ((-295 * rm_pass_num) - 6 * rm_margin) + 'px)';
});



// 신규 강의 리스트


let rc_total_photo = document.querySelectorAll('.recent_swiper_content').length; 
let rc_visible_photo_cnt = 5; 
let rc_visible_end_photo = rc_visible_photo_cnt; 
let rc_pass_num; 
let rc_margin = 1; 

document.querySelector('.recent_next_btn').addEventListener('click', function () {
    
    if (rc_total_photo - rc_visible_end_photo > rc_visible_photo_cnt) {
        rc_pass_num = rc_visible_end_photo;
        rc_visible_end_photo = rc_visible_end_photo + rc_visible_photo_cnt;
        document.querySelector('.recent_prev_btn').classList.remove('button_disabled');

    } else {
        rc_pass_num = rc_total_photo - rc_visible_photo_cnt;
        rc_visible_end_photo = rc_total_photo;
        document.querySelector('.recent_next_btn').classList.add('button_disabled');

    }
    rc_margin = 1;
    document.querySelector('.recent_swiper_wrapper').style.transform = 'translate(' + ((-236 * rc_pass_num) - 6 * rc_margin) + 'px)';


    console.log(rc_pass_num);
    console.log(rc_visible_end_photo);

});





document.querySelector('.recent_prev_btn').addEventListener('click', function () {

    if (rc_visible_end_photo - rc_visible_photo_cnt > rc_visible_photo_cnt) {
        rc_pass_num = rc_visible_end_photo - rc_visible_photo_cnt * 2;
        rc_visible_end_photo = rc_visible_end_photo - rc_visible_photo_cnt;
        document.querySelector('.recent_next_btn').classList.remove('button_disabled');

    } else {
        rc_pass_num = 0;
        rc_visible_end_photo = rc_visible_photo_cnt;
        rc_margin = 0;
        document.querySelector('.recent_prev_btn').classList.add('button_disabled');

    }

    document.querySelector('.recent_swiper_wrapper').style.transform = 'translate(' + ((-236 * rc_pass_num) - 6 * rc_margin) + 'px)';
});



// 하단 배너 버튼

let cnt=0;
let banner = document.querySelector('.bottom_banner');
let btn_right = document.querySelector(".e_swiper-button-right");
let btn_left = document.querySelector(".e_swiper-button-left");

let pagination_btn = document.getElementsByClassName("swiper_pagination");
let bottom_banner = document.querySelector('.bottom_banner');

btn_right.addEventListener("click",function right_click() {
    
    if(cnt==0){
        banner.style.transform = 'translate(-100vw)';
        btn_left.classList.remove("swiper-button-disable");
        btn_right.classList.remove("swiper-button-disable");
        
        pagination_btn[1].classList.add("active");
        pagination_btn[0].classList.remove("active");
        
        cnt++;
        
    }else if(cnt==1) {
        banner.style.transform = 'translate(-200vw)';
        btn_right.classList.add("swiper-button-disable");
        pagination_btn[2].classList.add("active");
        pagination_btn[1].classList.remove("active");
    }
})

btn_left.addEventListener("click",function left_click() {
    if(cnt==1){
        banner.style.transform = 'translate(-100vw)';
        btn_left.classList.remove("swiper-button-disable");
        btn_right.classList.remove("swiper-button-disable");

        pagination_btn[1].classList.add("active");
        pagination_btn[2].classList.remove("active");

        cnt--;
        
    }else if(cnt==0){
        banner.style.transform = 'translate(0vw)';
        btn_left.classList.add("swiper-button-disable");

        pagination_btn[0].classList.add("active");
        pagination_btn[1].classList.remove("active");
    }
})


// 하단 배너 페이지네이션


pagination_btn[0].addEventListener("click",function btn_click_0() {
    bottom_banner.style.transform = 'translate(0vw)';
    this.classList.add("active");
    pagination_btn[1].classList.remove("active");
    pagination_btn[2].classList.remove("active");

    btn_left.classList.add("swiper-button-disable");
    btn_right.classList.remove("swiper-button-disable");
    cnt=0;


});
pagination_btn[1].addEventListener("click",function btn_click_1() {
    bottom_banner.style.transform = 'translate(-100vw)';
    this.classList.add("active");
    pagination_btn[0].classList.remove("active");
    pagination_btn[2].classList.remove("active");

    btn_left.classList.remove("swiper-button-disable");
    btn_right.classList.remove("swiper-button-disable");
    cnt=1;



});
pagination_btn[2].addEventListener("click",function btn_click_2() {
    bottom_banner.style.transform = 'translate(-200vw)';
    this.classList.add("active");
    pagination_btn[0].classList.remove("active");
    pagination_btn[1].classList.remove("active");

    btn_left.classList.remove("swiper-button-disable");
    btn_right.classList.add("swiper-button-disable");
    cnt=1;

});



// let slider3 = document.querySelector('.bottom_banner');

//         document.querySelector('.e_swiper-button-left').classList.add('swiper-button-disable');
//         document.querySelector('.e_swiper-button-right').classList.add('swiper-button-disable');

//         slider2.addEventListener('mousedown', (e) => {
//         is_down = true;
        
//         slider2.classList.add('swiper_active');
//         startX = e.pageX - slider2.offsetLeft;
//         scrollLeft = slider2.scrollLeft;
        
//     // console.log(scrollLeft);
//     });

//     slider2.addEventListener('mouseleave', () => {
//         is_down = false;
//         slider2.classList.remove('swiper_active');
        

//     });

//     slider2.addEventListener('mouseup', () => {
//         is_down = false;
//         slider2.classList.remove('swiper_active');

//     });

//         slider2.addEventListener('mousemove', (e) => {
//         if(!is_down) return;
//         e.preventDefault();

//         const x = e.pageX - slider2.offsetLeft;
//         const walk = (x - startX) *2;

//         slider2.scrollLeft = scrollLeft - walk;
        
//         // console.log(slider2.scrollLeft);
//     });


  // 챗봇

  let ch_btn = document.getElementById("ch_button_area");
  let ch_bot_popup = document.getElementById("iframe_area");
  let ch_badge = document.getElementById("ch_badge");

  ch_btn.addEventListener("click",function() {
    ch_bot_popup.classList.add("iframe_active");
    ch_bot_popup.classList.remove("iframe_active_back");

    document.getElementById("ch_plugin").style.opacity = 0;

    ch_badge.classList.remove("ch_badge");
      
  });




    
