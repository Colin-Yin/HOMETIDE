jQuery(function () {
    jQuery.ajax({
        url: '/banner/bannerImg',
        dataType: 'json',
        success: (data)=>{
            jQuery.each(data.bigBanner,function (i,o) {
                jQuery('.top_1 .swiper-wrapper').append(`
                    <div role="group" aria-label="${i+1}/${data.bigBanner.length}" class="swiper-slide">
                        <a href="#javascript:;">
                            <img src="${o.img}" alt=""/>
                        </a>
                        <div class="text">
                            <p> ${o.csentence} </p>
                        </div>
                    </div>
                `)
            })
            new Swiper('.swiper_1', {
                autoplay: 3000,//可选选项，自动滑动
                pagination: '.swiper-pagination',
                paginationClickable: true,
                speed: 300,
                autoplayDisableOnInteraction: false,
                loop: true
            })
        }
    })
})
