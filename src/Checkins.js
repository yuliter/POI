import React, { Component } from 'react';
import { Rate } from 'zent';

import './css/commen.css'
import './css/Checkins.css'
import 'zent/css/index.css';
class Checkins extends Component {
    render() {
        let dataArr=[];
       const imgSrc="http://p0.meituan.net/deal/c58b04f944952b90a087301c6c30eb23122442.jpg@600w_600h_1l"
        comment.map(function (item) {
            let date=new Date(parseInt(item.commentTime));
            let dateString=date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日";
            dataArr.push(dateString);
            console.log(dataArr)
        })
        return (
            <div>
                <div className="head">
                    <img className="banner" src={imgSrc}/>
                </div>
                <div className="desc f14">
                    <div className="name">
                        <div className="inblock">
                            辣上瘾麻辣香锅
                            <div>
                                <Rate value={3.9} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="inblock ml70">
                            <i className="iconfont iconqiandao f45"></i>
                            <div className="textCenter">签到</div>
                        </div>

                    </div>
                    <div className="loc">
                        <p>地址：洪山区虎泉街创意坊负1楼</p>
                        <p >电话：15871717639</p>
                        <p>营业时间：周一至周日 全天 非营业时段 2018-02-10至2018-02-27 全天</p>
                    </div>
                </div>
                <div className="comment">
                    {
                        comment.map(function (item,index) {
                            return <div className="commentBox pt20">
                                <div className="inblock userImg">
                                    <img src={item.userUrl} className="imgBox"/>
                                </div>
                                <div className="inblock w250 ml20">
                                    <p className="userName">
                                        {item.userName}
                                    </p>
                                    <div className="mt10">
                                        <Rate value={item.star/10}/>
                                    </div>
                                    <div className="h100 mt20">
                                        {item.comment}
                                        <div className="tr time">
                                            <span>{dataArr[index]}</span>
                                        </div>
                                    </div>
                                </div>
                            <div className="line mt30"></div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}
const comment= [{"userName":"_qqsc71437262941","userUrl":"https://img.meituan.net/avatar/581a9702b4456c497d2f4d0c868b02012806.jpg","avgPrice":24,"comment":"吃了好几次了，每次两个人去吃其实也没点多少荤的，差不多花了五六十，有点贵","merchantComment":"","picUrls":[],"commentTime":"1524929886285","replyCnt":0,"zanCnt":0,"readCnt":8706,"hilignt":"","userLevel":3,"userId":"233585149","uType":2,"star":30,"quality":false,"alreadyZzz":false,"reviewId":"1664345776","menu":null,"did":0,"dealEndtime":null,"anonymous":false},
                {"userName":"匿名用户","userUrl":"https://www.dpfile.com/ugc/user/anonymous.png","avgPrice":24,"comment":"不错哟","merchantComment":"","picUrls":[],"commentTime":"1511407916579","replyCnt":0,"zanCnt":0,"readCnt":9396,"hilignt":"","userLevel":0,"userId":"0","uType":2,"star":50,"quality":false,"alreadyZzz":false,"reviewId":"1161285859","menu":null,"did":0,"dealEndtime":null,"anonymous":true},{"userName":"hr18771073092","userUrl":"https://img.meituan.net/avatar/d164624cbd668f0721a2204362cfdaf54855.jpg","avgPrice":24,"comment":"分量极少，明明自己动手夹东西的时候满满一大盆，最后做出来端盘子在面前的时候就那么一点点。怎么回事大家自己心知肚明！","merchantComment":"","picUrls":[],"commentTime":"1505225409282","replyCnt":0,"zanCnt":2,"readCnt":10459,"hilignt":"","userLevel":3,"userId":"106191928","uType":2,"star":20,"quality":false,"alreadyZzz":false,"reviewId":"1109909219","menu":"50元代金券1张，全场通用","did":28712733,"dealEndtime":"1553148000","anonymous":false},{"userName":"嘣吓咔啦咔","userUrl":"https://img.meituan.net/avatar/88a214e9a3fc928b51f11037bcb338d734046.jpg","avgPrice":24,"comment":"很好，回头客无数次！很喜欢，隔一段时间就不错了","merchantComment":"","picUrls":[],"commentTime":"1503656216057","replyCnt":0,"zanCnt":0,"readCnt":4249,"hilignt":"","userLevel":3,"userId":"127777565","uType":2,"star":50,"quality":false,"alreadyZzz":false,"reviewId":"1097439995","menu":"超值麻辣香锅套餐，建议2-3人使用","did":28712731,"dealEndtime":"1553148000","anonymous":false},{"userName":"匿名用户","userUrl":"https://www.dpfile.com/ugc/user/anonymous.png","avgPrice":24,"comment":"这个就真的很贵了~","merchantComment":"","picUrls":[],"commentTime":"1501478701156","replyCnt":0,"zanCnt":0,"readCnt":2053,"hilignt":"","userLevel":0,"userId":"0","uType":2,"star":40,"quality":false,"alreadyZzz":false,"reviewId":"1080815400","menu":null,"did":0,"dealEndtime":null,"anonymous":true},{"userName":"爱你的心，","userUrl":"https://img.meituan.net/avatar/ff3fc01e07121b5d1fbaa9cc381b7dfb206432.jpg","avgPrice":24,"comment":"途径解决具体看看咯哦哦哦健健康康快快乐乐","merchantComment":"","picUrls":[],"commentTime":"1496290723037","replyCnt":0,"zanCnt":0,"readCnt":2518,"hilignt":"","userLevel":3,"userId":"298401981","uType":2,"star":50,"quality":false,"alreadyZzz":false,"reviewId":"1039181056","menu":null,"did":0,"dealEndtime":null,"anonymous":false},{"userName":"ccnuck","userUrl":"","avgPrice":24,"comment":"感觉一般吧 也许是自己不怎么喜欢吃这种类型的","merchantComment":"","picUrls":[],"commentTime":"1491877281978","replyCnt":0,"zanCnt":0,"readCnt":7716,"hilignt":"","userLevel":3,"userId":"50133295","uType":2,"star":40,"quality":false,"alreadyZzz":false,"reviewId":"1007442294","menu":"超值麻辣香锅套餐，建议2-3人使用","did":28712731,"dealEndtime":"1553148000","anonymous":false},{"userName":"匿名用户","userUrl":"https://www.dpfile.com/ugc/user/anonymous.png","avgPrice":24,"comment":"口味非常差。菜都没有熟。香锅做的非常差。","merchantComment":"","picUrls":[],"commentTime":"1489902840556","replyCnt":0,"zanCnt":0,"readCnt":9138,"hilignt":"","userLevel":0,"userId":"0","uType":2,"star":10,"quality":false,"alreadyZzz":false,"reviewId":"994815247","menu":"超值麻辣香锅套餐，建议2-3人使用","did":28712731,"dealEndtime":"1553148000","anonymous":true},{"userName":"_qqtfd1439620055","userUrl":"","avgPrice":24,"comment":"还好","merchantComment":"","picUrls":[],"commentTime":"1489505397824","replyCnt":0,"zanCnt":0,"readCnt":2634,"hilignt":"","userLevel":2,"userId":"246439071","uType":2,"star":40,"quality":false,"alreadyZzz":false,"reviewId":"992303297","menu":null,"did":0,"dealEndtime":null,"anonymous":false},
                {"userName":"张钰saam","userUrl":"https://img.meituan.net/avatar/a43c2f585feab544c2dca46d44ba299838976.jpg","avgPrice":24,"comment":"口味很好，来了很多次了之前都忘记评价了，好吃点赞！","merchantComment":"","picUrls":[],"commentTime":"1488887588259","replyCnt":0,"zanCnt":0,"readCnt":5117,"hilignt":"","userLevel":3,"userId":"257173608","uType":2,"star":50,"quality":false,"alreadyZzz":false,"reviewId":"988164868","menu":"超值麻辣香锅套餐，建议2-3人使用","did":28712731,"dealEndtime":"1553148000","anonymous":false}]
export default Checkins;
