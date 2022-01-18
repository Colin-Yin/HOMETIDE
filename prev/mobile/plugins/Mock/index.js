Mock.mock('/user/userinfo','get',{
    id: "@id()",//得到随机的id,对象
    username: "@cname()",//随机生成中文名字
    date: "date()",//随机生成日期
    avatar: "@image('200x200','red','#fff','avatar')",//生成图片,参数:size,background,foreground,text
    description: "@paragraph",//描述
    ip: "@ip()",//ip地址
    email: "@email()"//email
})
//轮播
Mock.mock('/banner/bannerImg','get',{
    "bigBanner|5":[//顶部广告轮播大图
        {
            img:"@image('200x100')",
            csentence: "@csentence(10,25)"
        }
    ],
    "smallBanner|10":[//顶部轮播小图
        {
            img:"@image('200x100')"
        }
    ],
    "bottomBanner|3":[//底部轮播图
        {
            img:"@image('200x100')"
        }
    ]
})

//资讯
Mock.mock('/alerts/info','get',{
    "fast|10-20":[
        {
            title:"@csentence(3,7)",
            info:"'@cparagraph(1, 3)'",
            time:'@datetime("H")'
        }
    ],
    "industry|10-20":[
        {
            img:"@image('200x100')",
            info:"'@cparagraph(1, 3)'",
            time:'@datetime'
        }
    ],
    "subject|10-20":[
        {
            img:"@image('200x100')",
            info:"@csentence(2,5)",
            time:'@datetime'
        }
    ],
    "knowledge|10-20":[
        {
            img:"@image('200x100')",
            title:"@csentence(2,5)",
            info: "@csentence(10,25)",
            time:'@date'
        }
    ],
    "activity|10-20":[
        {
            img:"@image('200x100')",
            title:"@csentence(2,5)",
            info: "@csentence(10,25)",
            time:'@date'
        }
    ]
})