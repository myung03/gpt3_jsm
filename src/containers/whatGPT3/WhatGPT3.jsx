import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3 is a state-of-the art neural network machine learning model trained on billions of parameters. Released in 2020, GPT-3 processes text input to perform a variety of natural language tasks. It uses both natural language generation and natural language processing to understand and generate natural human language text. Generating content understandable to humans has historically been a challenge for machines that don't know the complexities and nuances of language, but GPT-3 is trained to generate realistic human text."/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possiblities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 is a chatbot based model. It takes input text transform it to create anything with a text-like structure; not just human language text. It has been used to create articles, poetry, stories, and more using input text."/>
        <Feature title="Knowledge Base" text="Trained on nearly 180 billion paramters, GPT-3 has analyzed over 40GB of text data. It is available in over 46 human languages and 13 coding languages."/>
        <Feature title="Education" text="Take education to the next level with GPT-3. With accurate responses and in-depth answers, GPT-3 can solve most problems with ease at any time of the day."/>
      </div>
    </div>
  )
}

export default WhatGPT3