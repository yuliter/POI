import React, { Component } from 'react';
import {Rate,Select} from 'zent'
import './App.css';
import 'zent/css/index.css';
import '../src/css/index.css'
import Checkins from "./Checkins"
import GetPOI from "./GetPOI"
import Like from "./Like"
import Self from "./Self";

class App extends Component {
  render() {
      const Option = Select.Option;
      const businessArea=["街道口","徐东","光谷"];
      return (
          <div>
              {!true && <Checkins/>}
              {!true && <div className="App">
                  <div className="head">
                      <div className="searchBox">
                          <div className="textLeft">
                              <Select placeholder="请选择商圈" width="100px">
                                  {
                                      businessArea.map(function (item,index) {
                                          return <Option value={index} key={index}>{item}</Option>
                                      })
                                  }
                              </Select>
                              <i className="iconfont iconyonghu"></i>
                          </div>
                      </div>
                      <div className="mt50">
                          <ul>
                              {
                                  POIlabel.map(function (item,index) {
                                      return <li key={index} className="labelBox">
                                          <div>
                                              <div className="disBlock icDiv">
                                                  <i className={`${item.ic} iconfont icBox`}></i>
                                              </div>
                                          </div>
                                          <div className="mt10">
                                              {item.name}
                                          </div>
                                      </li>
                                  })
                              }
                          </ul>
                      </div>
                  </div>
                  <div className="showList">
                      <ul className="showUl">
                          {
                              POI.map(function (item,index) {
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
                                      </div>
                                      <div className="disBlock check">
                                          <i className="iconfont iconqiandao f45"></i>
                                          <div className="textCenter">签到</div>
                                      </div>
                                  </li>
                              })
                          }
                      </ul>
                  </div>
              </div>}
              {
                  !true && <GetPOI/>
              }
              {
                 !true && <Like/>
              }
              {
                  true && <Self/>
              }
          </div>
    );
  }
}
const POIlabel=[{name:"景点",ic:"iconjingdian"},{name:"酒店",ic:"iconjiudian"},
    {name:"娱乐",ic:"iconyule"},{name:"美食",ic:"iconmeishi"}];
const POI=[{"itemId":"1454239","title":"老村长私募菜（光谷天地店）",
    "imgUrl":"https://p1.meituan.net/mogu/e80f50c00102ab4d6eadd041fba4920272713.jpg@190w_106h_1e_1c",
    "score":"3.1","consumeNum":null,"areaName":"光谷天地",
    "lowPrice":"95.0","saleNum":null,"commentNum":691,"detailUrl":"",
    "firstCate":[1,20632,20426,20557],"avgPrice":55},
    {"itemId":"72421184","title":"争鲜回转寿司（永旺经开店）",
        "imgUrl":"https://p1.meituan.net/mogu/5dafe4edaccabe84e17fbc357cb8824218961.jpg@190w_106h_1e_1c",
        "score":"3.7","consumeNum":null,"areaName":"沌口","lowPrice":"90.0","saleNum":null,
        "commentNum":2935,"detailUrl":"","firstCate":[1,20632,20426,20557],"avgPrice":41},
    {"itemId":"75542546","title":"james詹姆仕芝士排骨（银泰创意城店）",
        "imgUrl":"https://p0.meituan.net/apiback/52317567f8df38a1515ece5b885445d356538.jpg@190w_106h_1e_1c",
        "score":"4.0","consumeNum":null,"areaName":"石碑岭/街道口","lowPrice":"10.0","saleNum":null,
        "commentNum":8277,"detailUrl":"","firstCate":[1,20632,20426,20557],"avgPrice":80},
    {"itemId":"101212428","title":"合利家炭火烤肉（经济学院店）",
        "imgUrl":"https://p1.meituan.net/msmerchant/c39fd53903a68cb6a9dcfc2bd6b4b2a2105321.jpg@190w_106h_1e_1c",
        "score":"4.0","consumeNum":null,"areaName":"藏龙岛","lowPrice":"50.0","saleNum":null,
        "commentNum":1287,"detailUrl":"","firstCate":[1,20632,20426,20557],"avgPrice":54},
    {"itemId":"100801049","title":"zoolung zoolung（壹方购物中心店）",
        "imgUrl":"https://p0.meituan.net/wedding/0f548387209f7fd0e9fe31b81f1b5979398669.jpg@190w_106h_1e_1c",
        "score":"4.2","consumeNum":null,"areaName":"武汉天地","lowPrice":"115.0","saleNum":null,
        "commentNum":1337,"detailUrl":"","firstCate":[3,20630,20007,20632,20873,20426,20557],
        "avgPrice":191},
    {"itemId":"158456168","title":"俄士厨房（街道口未来城店）",
        "imgUrl":"https://p0.meituan.net/msmerchant/f119902112e0bf8dadb04fed8dc2f8e4170473.jpg@190w_106h_1e_1c",
        "score":"5.0","consumeNum":null,"areaName":"石碑岭/街道口","lowPrice":"92.0",
        "saleNum":null,"commentNum":4480,"detailUrl":"","firstCate":[1,20632,20426,20557],
        "avgPrice":82},
    {"itemId":"169372162","title":"紫燕百味鸡（北湖正街店）",
        "imgUrl":"https://p0.meituan.net/deal/819446eff057d02a0fa5327fe13c56ea96254.jpg@190w_106h_1e_1c",
        "score":"4.0","consumeNum":null,"areaName":"","lowPrice":"18.8","saleNum":null,
        "commentNum":8,"detailUrl":"","firstCate":[1,20426,20557],"avgPrice":20},
    {"itemId":"117246330","title":"MG美贯造型（经开万达店）",
        "imgUrl":"https://p0.meituan.net/wedding/a0c5933fa056fe80cb2f9126959d108c164645.jpg@190w_106h_1e_1c",
        "score":"5.0","consumeNum":null,"areaName":"江汉大学","lowPrice":"48.0","saleNum":null,
        "commentNum":1843,"detailUrl":"","firstCate":[22,20630,20426],"avgPrice":197},
    {"itemId":"178753449","title":"热带雨林主题乐园（万豪世纪天街店）",
        "imgUrl":"https://p0.meituan.net/joymerchant/-644852466971749307-42888684-1531285967720.jpg@190w_106h_1e_1c",
        "score":"4.3","consumeNum":null,"areaName":"纸坊","lowPrice":"9.9","saleNum":null,
        "commentNum":505,"detailUrl":"","firstCate":[2,3,20611,20632,20873,20426],"avgPrice":0},
    {"itemId":"165033165","title":"苏梅花园（汉街店）",
        "imgUrl":"https://p1.meituan.net/msmerchant/76fa223a5f6cbafcd617ae7a965ad3521952538.jpg@190w_106h_1e_1c",
        "score":"3.4","consumeNum":null,"areaName":"汉街","lowPrice":"29.9","saleNum":null,
        "commentNum":487,"detailUrl":"","firstCate":[1,20632,20426,20557],"avgPrice":76}]
export default App;
