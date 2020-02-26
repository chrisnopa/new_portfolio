// import React from 'react'

// //import compStyle from './css/nielsen.module.css'
// import Layout from '../../components/layout/layout'

// import HeaderImg from '../../images/nielsen/nielsen-header.jpg'
// import SecImg1 from '../../images/nielsen/nielsen-step1.jpg'
// import SecImg2 from '../../images/nielsen/nielsen-step2.jpg'
// import SecImg3 from '../../images/nielsen/nielsen-step3.jpg'
// import SecImg4 from '../../images/nielsen/nielsen-step4.jpg'
// import SecImg6 from '../../images/nielsen/nielsen-parallax.jpg'

// const Blog3 = () => (
//   <Layout>
//     <section className='section-double section-intro'>
//       <div className='section-content'>
//         <h3>Nielsen</h3>
//         <h2>UX Architect</h2>
//         <p>
//         When I tell people I worked at Nielsen, the response I usually get is, “oh the TV ratings people.” While it is true that they 
//         are the “TV ratings people,” a more accurate description of them would probably be the consumer data people. If you need help
//         deciding where the best location to open a new store is, or what demographics might be interested in your product Nielsen has
//         the data to help answer those questions. 
//         </p>
//       </div>
//       <div className='section-img'>
//         <img src={HeaderImg} alt="Nielsen Screen" />
//       </div>
//     </section>
//     <section className='section-single'>
//       <div >
//         <h2>My Role</h2>
//         <p>
//         Data doesn’t do you any good unless you can interpret it. And that is where I
//         came in. I worked as part of the team tasked with developing the tools to allow users to analyze and understand data.
//         The team I joined was part of a mature user experience design practice, one that I would describe as ‘doing it the right way.” 
//         With data being at the core of Nielsen’s business, it was naturally a driving force in the practice as well. The design process 
//         was heavily dependent on user testing and feedback. It wasn’t enough to think we improved the user experience, we needed to prove 
//         it with data. As a UX Architect, it was my primary responsibility to translate the business needs into designs that could then be 
//         user tested, interpret those tests, and use them to deliver better designs.
//         </p>
//       </div>
//     </section>
//     <section className='section-double section-reverse'>
//       <div className='section-content'>
//         <h3>
//           The Design Process<br/><br/>
//           Step 1
//         </h3>
//         <h2>Understanding Business Needs</h2>
//         <p>
//         Each component of the Nielsen products is essentially a different way to look at data; each with its own goals, 
//         challenges, and nuances. To understand these nuances required working with a BA and a business stakeholder. The knowledge gained here would be essential 
//         for driving a design that meets the business needs.  I learned to leverage business’s product expertise to not only answer the “what’s” but the “why’s”
//          leading to designs that more closely met the business needs, and also helped develop a good working relationship with business stakeholders.
//         </p>
//       </div>
//       <div className='section-img'>
//         <img src={SecImg1} alt="Nielsen Screen" />  
//       </div>
//     </section>
//     <section className='section-double'>
//       <div className='section-content'>
//         <h3>Step 2</h3>
//         <h2>Translate business needs into designs</h2>
//         <p>
//         The next step was to generate wireframes to outline the necessary UI to accomplish the business needs. 
//         In an iterative process of design, review, and redesign – we would move from low fidelity to high fidelity wireframes.
//         </p>
//       </div>
//       <div className='section-img'>
//         <img src={SecImg2} alt="Nielsen Flowmap" /> 
//       </div>
//     </section>
//     <section className='section-double section-reverse'>
//       <div className='section-content'>
//         <h3>Step 3</h3>
//         <h2>Test the designs</h2>
//         <p>
//         Even in a user driven design practice, it is not possible to test every aspect of a design. 
//         I would identify and prioritize areas that could benefit most from user testing, choose an appropriate methodology for testing, 
//         and establish the scheduling of user tests. I would build the prototype to simulate that portion of the application based on the wireframes. 
//         I then facilitated screenshare + clickable prototype + voice call sessions with users.  I learned that there’s an art to creating a user test 
//         to achieve appropriate feedback. For instance, in a typical A/B scenario user test, I came to realize that users tend to like the first scenario 
//         better and randomizing the presentation of these scenarios became critical in avoiding data compromise from user’s instinctual reactions.
//         </p>
//       </div>
//       <div className='section-img'>
//         <img src={SecImg3} alt="Nielsen UX Design" /> 
//       </div>
//     </section>
//     <section className='section-double'>
//       <div className='section-content'>
//         <h3>Step 4</h3>
//         <h2>Interpret and apply user feedback</h2>
//         <p>
//         User testing is only beneficial if you can understand how to use it to improve the design. 
//         I would use the results of the data to make updates to the wireframes and prototypes. This was done in an iterative process until I was confident 
//         the design met the users needs. The results of the user testing and the final design were presented to business stakeholders for approval.
//         </p>
//       </div>
//       <div className='section-img'>
//         <img src={SecImg4} alt="Nielsen Screen" />  
//       </div>
//     </section>
//     <section className='section-single'>
//       <div>
//         <h3>Step 5</h3>
//         <h2>Package the design for development</h2>
//         <p>
//           The design holds little value to the company unless development is able to execute on it. The next step was to work
//           with business analysts to put together a package that would set development for success. This package included high fidelity wireframes, flow maps, style
//           guides and functional specifications. I would conduct handoff meetings with development to ensure understanding of what was being delivered.  I learned 
//           how important collaboration and building a good working relationship with business analysts is to producing one streamlined, comprehensive requirements 
//           package.
//         </p>
//       </div>
//     </section>
//     <section className='section-single-image'>
//       <img src={SecImg6} alt="Nielsen Final Screens" /> 
//     </section>
//     <section className='section-single'>
//       <div>
//         <h2>Challenge</h2>
//         <p>
//           Learning how to “hide the seams.” CPL, the main product I worked on while at Nielsen was an existing product that had a large number of components to it 
//           and we had team members working in parallel on different work streams. Our task was both to enhance existing components and also to add new features while 
//           staying within the technical limitations of the application. This presented a challenge of maintaining consistency across the application from the old to 
//           the new, and across components.
//           <br /><br />
//           We were able to meet this challenge by:
//           <br /><br />
//         </p>
//         <ul>
//           <li>Designing and utilizing a shared design library</li>
//           <li>Frequent design meetings</li>
//           <li>Peer reviews across work streams</li>
//           <li>Working closely with development to understand technical limitation</li>
//         </ul>
//       </div>
//     </section>
//     <section className='section-single'>
//       <div>
//         <h2>Accomplishments</h2>
//         <p>
//           Longevity. The project was largely staffed by contractors. My initial contract was only for 50 hours. My contract continued to 
//           get extended for 2 years. At the end of the project, I was the last of the contractors to be let go, only when the project was completed.
//           <br /><br />
//           Of the entire UX Architect Team; I was the only one permitted to do their own visual design, most worked with a dedicated visual designer.
//         </p>
//       </div>
//     </section>
//     <section className='section-single'>
//       <div>
//         <h2>What did I enjoy about working at Nielsen?</h2>
//         <p>
//           Working with a well established, mature UX team. I had great mentors that taught me a lot of about the right way to do user experience design. 
//           A few times a year we would have internal UX Summits to talk about the craft of user experience as an art and as a science. We shared presentations, 
//           had team building activities, and discussed ways to improve.
//         </p>
//       </div>
//     </section>
//   </Layout>
// )

// export default Blog3

// export const frontmatter = {
//   title: "Nielsen - UX Architect",
//   written: "01/27/2014",
//   layoutType: "portfolio",
//   category: "#ux #design #job",
//   path: 'p-nielsen.jpg'
// }