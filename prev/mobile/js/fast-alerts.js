jQuery(function () {
    jQuery.ajax({
        url: '/alerts/info',
        dataType: 'json',
        success: (data)=>{
            //通过时间进行升序排序
            data.fast.sort(function(a,b){
                return a.time-b.time
            });
            jQuery.each(data.fast,function (i,o) {
                jQuery('.alerts-list').append(`
                    <div class="item">
                        <a href="./fast-alerts-details.html" class="alerts-link">
                            <div class="link-inner">
                                <div class="fast">
                                    <div class="fast-title">
                                        <div class="title-img">
                                            <img
                                                src="./img/mobile/section/alerts/alertsLinkLogo/1.png"
                                                alt="">
                                        </div>
                                        <span class="title-text">${o.title}</span>
                                        <span class="time">${o.time}小时前</span>
                                    </div>
                                    <div class="fast-content radius">
                                        <span>
                                            ${o.info}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `)
                // if (i === 4) return false
            })
        }
    })
})