// import React from 'react'
// import { cdImg } from '../../../assets/mediaCall'

// const WorkFlow = () => {
//   return (
//     <div>
//       <div className='w-[80%] mx-auto my-[7%]'>
//         <h1 className='font-bold text-[50px] text-center mb-8 gradient-text'>How development through Alcaline works</h1>

//         <img src={cdImg.WF} alt="" />
//       </div>
//     </div>
//   )
// }

// export default WorkFlow


import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

const WorkFlow = () => {
  return (
    <div className="bg-gray-100 py-10">
    <div className='w-[90%] mx-auto'>
    <h1 className="font-bold text-[60px] text-center mb-8 gradient-text xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px]">How development through Alcaline works</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">#1 Assemble the right team</h3>
          <p className="mt-2">
          We handle all aspects of vetting and choosing the right team, saving you time and leveraging our expertise to find the best fit for your needs
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
     
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">#2 Sprint Planning</h3>
          <p className="mt-2">
          Sprint planning is a collaborative process where team members work together to clarify tasks and ensure a shared understanding of the project goals.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">#3 Tech architecture</h3>
          <p className="mt-2">
          We break monolithic applications into microservices. This approach helps teams move faster and work more independently by decoupling the code.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
         
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">#4 Standups & weekly demos</h3>
          <p className="mt-2">
          Standups, weekly demos, and weekly reviews ensure that everyone is on the same page and can raise their concerns.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">#5 Code reviews</h3>
          <p className="mt-2">
          Code reviews before release help detect issues like memory leaks, file leaks, performance problems, and general bad practices.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
        
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold ">#6 Iterative delivery</h3>
          <p className="mt-2">
          We break the implementation process into several checkpoints rather than having a single deadline.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>
  )
}

export default WorkFlow
