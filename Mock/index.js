Mock.mock('/user/userinfo','get',{
    id: "@id()",//得到随机的id,对象
    username: "@cname()",//随机生成中文名字
    date: "date()",//随机生成日期
    avatar: "@image('200x200','red','#fff','avatar')",//生成图片,参数:size,background,foreground,text
    description: "@paragraph",//描述
    ip: "@ip()",//ip地址
    email: "@email()"//email
})