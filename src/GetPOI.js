import React, { Component } from 'react';
import { Input } from 'zent';
import './css/GetPOI.css'
import './css/commen.css'
class GetPOI extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="inblock">
                        <i className="iconfont iconfanhui"></i>
                    </div>
                    <div className="inblock ml20">大爱金工银饰Diy（徐东店）</div>
                    <div className="inblock ml60">发布</div>
                </div>
                <div className="box">
                    <ul className="tc">
                        {
                            score.map(function (item) {
                                return <li className="w65">
                                        <div>{item}</div>
                                        <div>
                                            <i className="iconfont iconpingjia"></i>
                                        </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="box">
                    <Input className="h200" type="textarea" placeholder="设施如何，服务是否周到，环境怎么样？（写够15字，才是好同志）" />
                </div>
                <div className="box">
                    <div className="inblock juxing"></div>
                    <div className="inblock">匿名评价</div>
                </div>
            </div>
        );
    }
}
const score=["差","一般","还不错","很满意","强烈推荐"];
export default GetPOI;
