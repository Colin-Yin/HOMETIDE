const jQuery=$.noConflict()
window.$$=window.Zepto = Zepto

jQuery(function () {
    const select = $$("div.select")
    console.log(jQuery('.dropdown'))
    select.tap(function () {
        let ins = jQuery(this).index()
        if (jQuery('.dropdown').eq(ins-1).css('display') == "block"){
            jQuery('.dropdown').eq(ins-1).animate({
                height: 0 ,

            },200,function () {
                opacity: 0,
                jQuery('.dropdown').eq(ins-1).css('display','none')
            })
        }
        if (jQuery('.dropdown').eq(ins-1).css('display') == "none"){
            jQuery('.dropdown').eq(ins-1).css('display','block')
            jQuery('.dropdown').eq(ins-1).animate({
                height: 275 ,
                opacity: 1
            },200)
        }

    })
})
