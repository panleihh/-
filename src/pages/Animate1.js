import React, { Component } from 'react';
// import logo from './logo.svg';

import img1 from '../img/001.jpg';
import img2 from '../img/sun_flower.jpg';
import img3 from '../img/tree.jpg';

import './Animate1.less';

class Animate1 extends Component {
  render() {
    return (
      <section className="animation_wrap">

        <figure className="pic1">
          <img className="pic1-img" src={img3} alt="图片加载中" />
          <figcaption className="pic1-figcaption">
            <h2>平移动画</h2>
            <p>图片注解1</p>
            <p>图片注解2</p>
            <p>图片注解3</p>
          </figcaption>
        </figure>

        <figure className="pic2">
          <img className="pic2-img" src={img1} alt="图片加载中" />
          <figcaption className="pic2-figcaption">
            <h2>旋转动画</h2>
            <p>飞来飞去，飞来飞舞</p>
            <div></div>
          </figcaption>
        </figure>

        <figure className="pic3">
          <img className="pic3-img" src={img2} alt="图片加载中" />
          <figcaption className="pic3-figcaption">
            <h2>斜切动画</h2>
            <p>斜切动画图片注解</p>
          </figcaption>
        </figure>

        <figure className="pic4">
          <img className="pic4-img" src={img2} alt="图片加载中" />
          <figcaption className="pic4-figcaption">
            <h2>缩放动画</h2>
            <p>缩放动画图片注解</p>
            <div></div>
          </figcaption>
        </figure>
      </section>
    );
  }
}

export default Animate1;
