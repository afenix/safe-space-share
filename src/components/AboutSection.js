import React from 'react'
import ScrollArrow from './ScrollArrow'
import '../App.css'

//Comment from Devin Carlson for the Midterm Peer Review assignment 7/13/24
//Wow!!! This is amazing!  First, well done on this site.  Love the idea and I love the branding.
//I am not a natural coder and rely heavily on course material, so your structure of your project gave me a view into an organized and robust program
//Truthfully, I had a hard time finding something to critique/improve/change.
//I shared this with my 15 year old son to ask him to help me find something that could be improved.
//his only response was that he could have used more context as to what your goals are for this
//and what this could be used for.
//Overall, excellent job and thanks for sharing!!!

const AboutSection = () => {
  return (
    <div className="background-container">
      <div className='content'>
      <h1 id='about-header'>What is <br/>SafeSpaceShare?</h1>
      <p>
        We all navigate public spaces in our unique ways, influenced by who we
        are and how others see us. These experiences shape our sense of safety,
        well-being, and belonging, yet they often go unseen, especially as a
        collective.
      </p>
      <br/>
      <p>
        SafeSpaceShare (S3) is here to change that. Anonymously share your
        stories, explore how your identity influences your experiences, and
        connect with the diverse perspectives of others. With S3's interactive
        map, you can uncover patterns and similarities across different
        communities, helping us all gain deeper insights into our shared and
        diverse worlds.
      </p>
      <h2 id='about-subtitle'>
        Let's get started!
      </h2>
      </div>
    </div>
  )
}

export default AboutSection
