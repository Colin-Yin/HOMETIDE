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
                jQuery('.load').html('全部加载完成')
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
                //通过时间进行升序排序
                data.industry.sort(function(a,b){
                    return parseInt(b.time)-parseInt(a.time)
                });
                jQuery.each(data.industry,function (i,o) {
                    jQuery('.industry-alerts-wrapper').append(`
                    <li class="media">
                        <a href="information-article-mobile.html">
                            <div class="media-left media-img radius">
                                <img class="media-object"
                                     src="${o.img}" alt="">
                            </div>
                            <div class="media-body media-text">
                                <h4 class="media-heading">${o.info}</h4>
                                <div class="media-time">${o.time}</div>
                            </div>
                        </a>
                    </li>
                `)
                    if (i === 7) return false
                })
            }
        })
    }

})