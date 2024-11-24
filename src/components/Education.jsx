import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section class="education" id="education">
      <h2 className='heading'>.education</h2>

      <div class="timeline-items">

        <div class="timeline-item">
          <div class="timeline-dot"></div>

            <div class="timeline-date">2018</div>
            <div class="timeline-content">
              <h3>High School</h3>
              <p>Completed secondary education at Captain Albert Aguilar National High School, 
                where I built a strong foundation in math and science that 
                inspired my interest in technology and problem-solving.
               </p>
            </div>
        </div>

        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
            <div class="timeline-date">2020</div>
            <div class="timeline-content">
              <h3>Senior High</h3>
              <p>
              Completed Senior High School at Southville International School in Las Piñas, specializing in ICT. This experience built a strong foundation in technology and digital skills, sparking my passion for innovation and problem-solving.
             </p>
            </div>
      
        </div>

        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
            <div class="timeline-date">2022</div>
            <div class="timeline-content">
              <h3>College</h3>
              <p>
              Graduated with an Associate Degree from Southville International School under the ASAT program, completing two years of college in Information System Technology (IST) and Information System Management (ISM). Achieved Dean’s List honors and received the Best Research Award and Best System Proposal, showcasing my dedication to academic excellence and innovative problem-solving
             </p>
            </div>
          
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
            <div class="timeline-date">2024</div>
            <div class="timeline-content">
              <h3>College</h3>
              <p>After earning my Associate Degree from Southville International School, I transferred to Saint Bernadette College of Alabang to continue my studies and graduated with a Bachelor’s Degree in Information Technology (BSIT), prio on Software Engineering. This allowed me to deepen my expertise in software development and advance my technical skills.</p>
            </div>
          
        </div>



      </div>
    </section>
  )
}

export default Education