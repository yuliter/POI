import React, { Component } from 'react';
import {Rate} from "zent";
import {POIArr} from "./POIConst"
import './css/commen.css'
import './css/Like.css'
class Like extends Component {
    render() {
        return (
            <div>
                <div className="guess">
                    <div className="inblock">
                        <i className="iconfont iconfanhui"></i>
                    </div>
                    <div className="inblock ml210">猜你喜欢</div>
                </div>
                <div className="showList">
                    <ul className="showUl">
                        {
                            POIArr.map(function (item,index) {
                                return <li key={index} className="liBox">
                                    <div className="disBlock w200">
                                        <div className="imgBox">
                                            <img src={item.imgUrl}/>
                                        </div>
                                        <div className="f14">
                                            {item.title}
                                        </div>
                                        <div>
                                            <Rate value={item.score}></Rate>
                                        </div>
                                        <div>
                                            所在商圈：{item.areaName}
                                        </div>
                                    </div>
                                    <div className="disBlock">
                                        <div className="textCenter">查看详情</div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>
        );
    }
}
export default Like;
