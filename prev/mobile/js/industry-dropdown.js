const jQuery=$.noConflict()
window.$$=window.Zepto = Zepto

jQuery(function () {
    const select = $$("div.select")
    select.tap(function () {//设置点击事件
        let ins = jQuery(this).index()
        if (jQuery('.dropdown').eq(ins-1).css('display') == "block"){
            jQuery('.dropdown').eq(ins-1).animate({
                height: 0 ,

            },200,function () {
                jQuery('.dropdown').eq(ins-1).css('display','none')
            })
        }
        if (jQuery('.dropdown').eq(ins-1).css('display') === "none"){
            jQuery('.dropdown').eq(ins-1).css('display','block')
            jQuery('.dropdown').eq(ins-1).animate({
                height: 275 ,
                opacity: 1
            },200)
        }

    })
})
