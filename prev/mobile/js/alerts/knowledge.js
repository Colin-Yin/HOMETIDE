jQuery(function () {
    jQuery.ajax({
        url: '/alerts/info',
        dataType: 'json',
        success: (data)=>{
            data.knowledge.sort(function(a,b){
                return a.time-b.time
            });
            jQuery.each(data.knowledge,function (i,o) {
                jQuery('#main section .knowledge-list').append(`
                    <div class="col-md-6 col-xs-6 col-sm-6">
                        <div class="radius item">
                            <a href="#javascript:;">
                                <img src="${o.img}" alt="">
                            </a>
                        </div>
                        <div class="item-info">
                            <p class="title">${o.title}</p>
                            <div class="text">${o.info}</div>
                            <p class="cut-line">——</p>
                            <div class="time">${o.time}</div>
                        </div>
                    </div>
                `)
                if (i === 3) {
                    return false;
                }
            })
        }
    })
})