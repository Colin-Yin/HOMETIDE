const jQuery=$.noConflict()
window.$$=window.Zepto = Zepto
jQuery(function () {
    let add = true,
        flag = true,
        num = 0
    const searchSelectBtn = $$('.search-wrapper .kind')//获取触摸按钮zepto对象
    const arrowIcon = jQuery('.search-wrapper .select i')//icon图标jQuery对象
    const kinds = $$('.search-wrapper .kind .dropdown-list li')

    /*滚动条监视数据懒加载*/
    jQuery(window).scroll(function () {
        if (add){
            if (jQuery(document).height()-jQuery(this).scrollTop()-jQuery(this).height() < 50 && num < 5){
                add = false
                /*根据当前选中分类加载数据*/
                if(jQuery('.search-wrapper .kind input').val() === '资讯') addIndustryData()
                if(jQuery('.search-wrapper .kind input').val() === '专题') addSubjectData()
                if(jQuery('.search-wrapper .kind input').val() === '智库') addKnowledgeData()
                if(jQuery('.search-wrapper .kind input').val() === '活动') addActivityData()
                num++
                console.log(num)
            }else if (num === 5){
                jQuery('.load').html('全部加载完成')
            }
        }


    })

    /*下拉框按钮tap触摸点击事件*/
    searchSelectBtn.tap(function () {
        num = 0
        jQuery('.search-dropdown-menu').toggleClass("dropdown-on")
        if(flag){
            arrowIcon.removeClass("rotate-down")
            arrowIcon.addClass("rotate-up")
            flag = false
        }else {
            arrowIcon.removeClass("rotate-up")
            arrowIcon.addClass("rotate-down")
            flag = true
        }
    })

    /*下拉框分类tap触摸点击事件*/
    kinds.tap(function () {
        kinds.removeClass() //清空类名
        jQuery(this).addClass('active') //给当前选中分类添加active类名设置选中样式
        jQuery('.search-wrapper .kind input')[0].placeholder = jQuery(this).html()//设置下拉按钮框内容提示信息
        jQuery('.search-wrapper .kind input').val(jQuery(this).html())//设置下拉框按钮框value
        jQuery('.industry-alerts-wrapper').html('') //清空将要加载数据的容器
        //根据当前选中分类加载数据
        if(jQuery(this).html() === '资讯') addIndustryData()
        if(jQuery(this).html() === '专题') addSubjectData()
        if(jQuery(this).html() === '智库') addKnowledgeData()
        if(jQuery(this).html() === '活动') addActivityData()
    })
    //初始化加载数据
    addIndustryData()
    //资讯ajax请求
    function addIndustryData(){
        jQuery.ajax({
            url: '/alerts/info',
            dataType: 'json',
            success: (data)=>{
                add = true
                jQuery.each(data.industry,function (i,o) {
                    jQuery('.industry-alerts-wrapper').append(`
                    <li class="media information-item">
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
    //专题ajax请求
    function addSubjectData(){
        jQuery.ajax({
            url: '/alerts/info',
            dataType: 'json',
            success: (data)=>{
                add = true
                jQuery.each(data.subject,function (i,o) {
                    jQuery('.industry-alerts-wrapper').append(`
                    <li class="media subject-item">
                        <a href="subject-details.html">
                            <div class="media-left media-img radius">
                                <img class="media-object"
                                     src="${o.img}" alt="">
                            </div>
                            <div class="media-body media-text">
                                <h4 class="media-heading">【${o.info}】</h4>
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
    //智库ajax请求
    function addKnowledgeData() {
        jQuery.ajax({
            url: '/alerts/info',
            dataType: 'json',
            success: (data)=>{
                add = true
                jQuery.each(data.knowledge,function (i,o) {
                    jQuery('.industry-alerts-wrapper').append(`
                    <li class="media knowledge-item">
                        <a href="knowledge-details.html">
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
    //活动ajax请求
    function addActivityData() {
        jQuery.ajax({
            url: '/alerts/info',
            dataType: 'json',
            success: (data)=>{
                add = true
                jQuery.each(data.activity,function (i,o) {
                    jQuery('.industry-alerts-wrapper').append(`
                    <li class="media activity-item">
                        <a href="knowledge-details.html">
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