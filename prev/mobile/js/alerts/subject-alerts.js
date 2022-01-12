jQuery(function () {
    jQuery.ajax({
        url: '/alerts/info',
        dataType: 'json',
        success: (data)=>{
            //通过时间进行升序排序
            jQuery.each(data.subject,function (i,o) {
                jQuery('.subject-wrapper').append(`
                    <div class="subject-list">
                        <div class="item">
                            <div class="subject-title">
                                <a href="#javascript:;">
                                    <img src="img/mobile/section/subject/title/1.jpg" alt="">
                                </a>
                            </div>
                            <div class="subject-content-img radius">
                                <a href="#javascript:;">
                                    <img src="${o.img}" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
    })
})