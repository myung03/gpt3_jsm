import React from 'react'
import './blog.css';
import { Article  } from '../../components';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening - <br></br>Let's talk about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26th, 2022" title="Why is GPT-3 and OpenAI the next big thing?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="November 10th, 2022" title="Neural Networks and more"/>
        <Article imgUrl={blog03} date="Febuary 9th, 2023" title="Here's what you need to know"/>
        <Article imgUrl={blog04} date="November 19th, 2022" title="A 5 year roadmap of AI"/>
        <Article imgUrl={blog05} date="January 5th, 2023" title="Jobs that AI will create"/>
        </div>
      </div>
    </div>
  )
}

export default Blog