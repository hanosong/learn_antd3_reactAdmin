import React from "react";
import TypingCard from "@/components/TypingCard";
import wechat from "@/assets/images/wechat.jpg";
const About = () => {
  const cardContent = `
    <p>大家好，我是小哈</p>
    <p>如果你有四根铅笔</p>
    <p>我有七个苹果</p>
    <p>那么，房顶上可以放下几个煎饼？</p>
    <p>......</p>
    <p>正确答案： 紫色</p>
    <p>因为外星人不带帽子</p>
    <img src="${wechat}" alt="wechat" style="height:550px"/>
  `;
  return (
    <div className="app-container">
      <TypingCard title="关于作者" source={cardContent} />
    </div>
  );
};

export default About;
