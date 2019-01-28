import React from 'react'

import Layout from '../../components/layout/layout'

import IntroImg from '../../images/headbutt/headbutt-header.jpg'
import SecImg1 from '../../images/headbutt/headbutt01.jpg'
import SecImg2 from '../../images/headbutt/headbutt02.jpg'
import SecImg3 from '../../images/headbutt/headbutt03.jpg'
import SecImg4 from '../../images/headbutt/headbutt04.jpg'


const Blog3 = () => (
  <Layout>
    <section className='section-double section-intro'>
      <div className='section-content'>
        <h2>Game Concept</h2>
        <p>
          Headbutt is based around one simple idea….trivia can be entertaining, but only if it is fun. A group of us had grown frustrated at how amazingly un-fun 
          most trivia games/apps are. We set ourselves on a goal to find out if it was possible to make a trivia app that was actually fun to play. After some 
          research and testing we came up with three key ingredients that when mixed properly help make the game we had been searching for.
        </p>
      </div>
      <div className='section-img'>
        <img src={IntroImg} alt="Headbutt Trivia" />
      </div>
    </section>
    <section className='section-single'>
      <div>
        <h2>Timing is Everything</h2>
        <p>
          Let’s face it, Google is the best trivia player ever and anyone who possesses this power is unstoppable. The only way to stop someone from cheating is 
          to make each question time-based, however I just couldn’t see designing a regular, boring timer. I decided instead to pit players head to head. But 
          to do that requires actually having to play live against each other, and who has the time for that? Enter asynchronous live play. By playing headed to 
          head, it is important to answer questions correct, but also in less time than the opponent
        </p>
      </div>
    </section>
    <section className='section-single-image'>
      <img src={SecImg1} alt="Headbutt screens" />  
    </section>
    <section className='section-single'>
      <div>
        <h2>Good Questions</h2>
        <p>
          This one may seems obvious, but it’s a bit tricky. Players need questions that are challenging but not impossible, interesting without being obvious, 
          and relevant enough to appeal to the masses. I don’t pretend to be an expert question writer, so I enlisted some trivia professionals. I made 
          agreements with trivia hosts to get the right question database.  Implementing user feedback, I was able to tailor questions and grow the question database 
          with the types of questions players wanted to interact with.
        </p>
      </div>
    </section>
    <section className='section-single-image'>
      <img src={SecImg2} alt="Headbutt homescreen" />  
    </section>
    <section className='section-single'>
      <div>
        <h2>Interactive</h2>
        <p>
          Triva is the basis for almost every television game show ever made with the only major difference being how the contestants answer questions. The 
          ones with good formats make good shows; it’s that simple. I took this idea and applied it to the app. Gone are the days of the monotony of 4 multiple 
          choices to pick from. I looked at today’s smartphones with all the taps, swipes, pinches, shakes and every way else people can interact with a phone 
          and said “Now, that’s how I would want to answer a question.” Each game has 10 questions, each with its own “interactive mini game.” I applied all 
          the user interface, graphics, and animation skills I have learned over the years into making lots of question types that test both the player’s 
          knowledge and their finger dexterity.
        </p>
      </div>
    </section>
    <section className='section-single-image'>
      <img src={SecImg3} alt="Headbutt game types" />  
    </section>
    <section className='section-single-image'>
      <img src={SecImg4} alt="Headbutt game screens" />  
    </section>

  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "Headbutt",
  written: "03/22/2014",
  layoutType: "portfolio",
  category: "#ux #job",
  path: 'p-headbutt.jpg'
}