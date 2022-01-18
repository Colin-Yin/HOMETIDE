jQuery(function () {
    jQuery.ajax({
        url: '/banner/bannerImg',
        dataType: 'json',
        success: (data)=>{
            jQuery.each(data.bottomBanner,function (i,o) {
                jQuery('.foot-slide .swiper-wrapper').append(`
                    <div role="group" aria-label="${i+1}/${data.bottomBanner.length}" class="swiper-slide radius">
                        <a href="./index-mobile.html">
                            <img class="radius" src="${o.img}" alt=""/>
                        </a>
                    </div>
                `)
            })
            new Swiper('.swiper_3', {
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

