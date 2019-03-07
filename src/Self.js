import React, { Component } from 'react';
import "./css/Self.css"
import './css/commen.css'
class Self extends Component {

    render() {
        const userInfo={sex:"男",age:24,loc:"湖北-武汉"}
        return (
            <div>
                <div className="backgroud">
                    {/*<i className="iconfont iconfanhui"></i>*/}
                    <div className="userBox">
                        <div className="inblock imgBox">
                            <img src="https://file.5rs.me/oss/uploadfe/jpeg/4bef869d5720c9cafa2a14cd62e91a84.jpeg"/>
                        </div>
                        <div>腾飞</div>
                    </div>
                </div>
                <div className="bodyContent">
                    <div className="">
                        <i className="iconfont iconyonghu"></i>
                        <div className="inblock ml20">{userInfo.sex}</div>
                        <div className="inblock ml20">{userInfo.age}</div>
                        <div className="inblock ml20">{userInfo.loc}</div>
                    </div>
                    <div className="mt20 labelContent">
                        <i className="iconfont iconbiaoqian "></i>
                        <div className="tc">
                            <ul>
                                {
                                    userLabel.map(function (item,index) {
                                        return <li className="w80">
                                            {/*<div className="labelBox">*/}
                                                {/*<img src={item.ic} />*/}
                                            {/*</div>*/}
                                            <i className={`iconfont ${item.ic}`}></i>
                                            <div>{item.name}</div>
                                        </li>

                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const userLabel=[{ic:"iconwenyigongzuozhe",
    name:"文艺工作者"},
    {ic:"iconkeji01",name:"科技"},
    {ic:"iconmeishi1",name:"吃货"}];
export default Self;
