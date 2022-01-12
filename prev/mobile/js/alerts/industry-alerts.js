jQuery(function () {
    jQuery.ajax({
        url: '/alerts/info',
        dataType: 'json',
        success: (data)=>{
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
            })
        }
    })
})