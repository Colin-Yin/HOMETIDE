jQuery(function () {
    jQuery.ajax({
        url: '/banner/bannerImg',
        dataType: 'json',
        success: (data)=>{
            jQuery.each(data.smallBanner,function (i,o) {
                jQuery('.top_2 .swiper-wrapper').append(`
                    <div role="group" class="swiper-slide">
                        <a href="#javascript:;">
                            <img class="radius" src="${o.img}" alt=""/>
                        </a>
                    </div>
                `)
            })
            new Swiper('.swiper_2', {
                autoplay: 3000,//可选选项，自动滑动
                slidesPerView: 2,
                spaceBetween: 10,
                speed: 300,
                autoplayDisableOnInteraction: false,
                loop: true
            })
        }
    })
})