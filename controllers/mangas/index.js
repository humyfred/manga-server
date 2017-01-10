

exports.getUser = (ctx) => {
  ctx.body = {a:'111'};
}

exports.getCartoon = (ctx) => {
   ctx.compress = true;
   ctx.type = 'application/json; charset=utf-8';
   ctx.body = Object.assign({id: 0,
     imgSrc: 'http://pic01.ishuhui.com/cartoon/book/thumb/58/DCeAGPK50KVJN7OazdCwlRz.jpg',
     chapter: '阿里巴巴的选择',
     resource: 'http://www.ishuhui.com/post/375940',
     title: '魔笛'
    },{imgs:['//pic04.ishuhui.com/cartoon/book-1/1/851-8152/00.png?87302690',
   '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/03.png?87302690',
   '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/04.png?87302690',
   '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/05.png?87302690',
   '//pic04.ishuhui.com/cartoon/book-1/1/851-8152/06.png?87302690']});
};


exports.getCartoonList = (ctx) => {
   ctx.type = 'application/json; charset=utf-8';
   ctx.body = [{
     id: 0,
     imgSrc: 'http://pic01.ishuhui.com/cartoon/book/thumb/58/DCeAGPK50KVJN7OazdCwlRz.jpg',
     chapter: '阿里巴巴的选择',
     resource: 'http://www.ishuhui.com/post/375940',
     title: '魔笛'
    }, {
     id: 1,
     imgSrc: 'http://pic01.ishuhui.com/cartoon/book/thumb/3/rP2thPkxTa6Eph1qp9sS5B3J.jpg',
     chapter: '調整·2',
     resource: 'http://www.ishuhui.com/post/375935',
     title: '铂金终局 第7话'
    }, {
     id: 2,
     imgSrc: 'http://pic01.ishuhui.com/cartoon/book/thumb/2/zsrxrmqJOE3Lh9prn7gDp5Zn.jpg',
     chapter: '圓木頭既能做武器又能做住宅 還能當成交通工具 方便得很',
     resource: 'http://www.ishuhui.com/post/375940',
     title: '鸭子的天空 第515话 '
    }, {
     id: 3,
     imgSrc: 'http://pic01.ishuhui.com/cartoon/book/thumb/1/YDdFCpDpUAveOWJvxJRusmHb.jpg',
    chapter: '煙頭',
    resource: 'http://www.ishuhui.com/post/375945',
    title: '草帽少年 第825话 '
    }, {
    id: 4,
    imgSrc: 'http://pic01.ishuhui.com/cartoon/book/thumb/58/DCeAGPK50KVJN7OazdCwlRz.jpg',
    chapter: '阿里巴巴的选择',
    resource: 'http://www.ishuhui.com/post/375940',
    title: '鸭子的天空 第515话 '
    }];
}
