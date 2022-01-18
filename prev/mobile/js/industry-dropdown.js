const jQuery=$.noConflict()
window.$$=window.Zepto = Zepto

jQuery(function () {
    const select = $$("div.select")
    let num
    select.tap(function () {//设置点击事件
        let ins = jQuery(this).index()
        if (num === ins-1){
            jQuery('.dropdown').eq(ins-1).toggleClass("dropdown-on")
        }else {
            jQuery('.dropdown').eq(num).removeClass("dropdown-on")
            jQuery('.dropdown').eq(ins-1).addClass("dropdown-on")
            num = ins-1
        }
    })
})
