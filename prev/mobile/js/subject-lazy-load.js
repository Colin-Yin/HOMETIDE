jQuery(function () {
    let num = 0;
    let flag = true
    jQuery(window).scroll(function () {
        if (flag){
            if (jQuery(document).height()-jQuery(this).scrollTop()-jQuery(this).height() < 50 && num < 5){
                flag = false
                addData()
                num++
            }else if (num === 5){
                jQuery('.subject-wrapper p').html('全部加载完成')
            }
        }


    })
    addData()
    function addData(){
        jQuery.ajax({
            url: '/alerts/info',
            dataType: 'json',
            success: (data)=>{
                flag = true
                //生成专题块
                jQuery.each(data.subject,function (i,o) {
                    jQuery('.subject-wrapper .subject-list').append(`
                                <div class="item content-wrapper radius">
                                    <div class="subject-title">
                                        <a href="./subject-details.html">
                                            <img src="img/mobile/section/subject/title/1.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="subject-content-img radius">
                                        <a href="./subject-details.html">
                                            <img src="${o.img}" alt="">
                                        </a>
                                    </div>
                                </div>
                            `)
                    if (i === 7){
                        return false
                    }
                })
            }
        })
    }

})