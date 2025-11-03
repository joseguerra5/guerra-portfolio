'use client'

import { BookOpenText, Briefcase, Star } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline() {
  return (
    <div className="flex items-center flex-col gap-5">
      <div className="flex flex-col items-center justify-center pt-10 ">
        <h2 className="text-xl text-[#0A5AD9]">My trajectory</h2>
        <h1 className="text-3xl font-bold text-white text-center">How I developed my life</h1>
      </div>

      <VerticalTimeline className="h-full">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="07/2024 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Briefcase size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Web developer Freelancer </h3>
          <h4 className="vertical-timeline-element-subtitle">Porto, PT</h4>
          <ul className="list-disc ml-5">
            <li>Acting as a freelancer developing and maintaining two production web applications.</li>
            <li>
              <strong>IT Equipment Management Platform:</strong>
              <ul className="list-disc ml-5">
                <li>Complements my Help Desk work by managing company computer loans, equipment inventory, and employee records.</li>
                <li>Sends automated notifications for equipment returns and supports full asset life-cycle tracking.</li>
              </ul>
            </li>
            <li>
              <strong>Beauty Studio Scheduling System:</strong>
              <ul>
                <li>Full appointment booking system for aesthetic services, including service and staff management.</li>
                <li>Focused on enhancing the end-user experience while enabling business reporting and data-driven decision-making for the studio.</li>
              </ul>
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="08/2024 - 07/2025"
          iconStyle={{ background: '#82BC4F', color: '#fff' }}
          icon={<BookOpenText size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">MBA Rocketseat Full-stack </h3>
          <h4 className="vertical-timeline-element-subtitle">Porto, PT</h4>
          <p>Rocketseat Education</p>
          <ul className="list-disc ml-5">
            <li>Development of full-stack applications using Node.js and React</li>
            <li>Design and implementation of REST APIs and microservices</li>
            <li>Front-end development with modern React patterns (Hooks, Context, SPA)</li>
            <li>Best practices in software engineering, clean architecture, and deployment</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="10/2023 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Briefcase size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">HelpDesk </h3>
          <h4 className="vertical-timeline-element-subtitle">Porto, PT</h4>
          <ul className="list-disc ml-5">
            <li>
              Hardware and software troubleshooting
            </li>
            Installation and configuration of operating systems and applications
            <li>
              User account and permissions management (Active Directory / Azure AD)
            </li>
            <li>
              Network connectivity support (Wi-Fi, LAN, VPN)
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="2019"
          iconStyle={{ background: '#82BC4F', color: '#fff' }}
          icon={<BookOpenText size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Power BI – Beginner to Advanced Course</h3>
          <h4 className="vertical-timeline-element-subtitle">Online</h4>
          <p>Udemy</p>
          <ul className="list-disc ml-5">
            <li>Building interactive dashboards and data visualizations in Power BI</li>
            <li>Connecting and transforming data using Power Query and DAX</li>
            <li>Creating KPIs and analytical reports for business insights</li>
          </ul>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="06/2021 - 03/2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Briefcase size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Accounting Assistant </h3>
          <h4 className="vertical-timeline-element-subtitle">Feira de Santana, BR</h4>
          <ul className="list-disc ml-5">
            <li>Responsible for processing payroll</li>
            <li>Employee onboarding and offboarding</li>
            <li>Managing and processing vacation requests</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="05/2018 - 12/2019"
          iconStyle={{ background: '#82BC4F', color: '#fff' }}
          icon={<BookOpenText size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Microsoft Excel – Beginner to Advanced Course </h3>
          <h4 className="vertical-timeline-element-subtitle">Online</h4>
          <p>Udemy</p>
          <ul className="list-disc ml-5">
            <li>Advanced Excel skills for data analysis and reporting</li>
            <li>Proficient in formulas, PivotTables, and data validation</li>
            <li>Creation of dashboards and performance tracking spreadsheets</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="06/2019 - 07/2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Briefcase size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Commercial Assistant </h3>
          <h4 className="vertical-timeline-element-subtitle">Feira de Santana, BR</h4>
          <ul className="list-disc ml-5">
            <li>Responsible for document management and spreadsheet processing</li>
            <li>Development of spreadsheets and general reports to support senior management</li>
            <li>Commercial support and file control</li>
            <li>Focused on service optimization and excellence in operations</li>
          </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e2939', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e2939' }}
          date="05/2018 - 12/2023"
          iconStyle={{ background: '#82BC4F', color: '#fff' }}
          icon={<BookOpenText size={32} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Bachelor’s Degree in Accounting </h3>
          <h4 className="vertical-timeline-element-subtitle">Feira de Santana, BR</h4>
          <ul className="list-disc ml-5">
            <li>Solid understanding of accounting principles and financial reporting</li>
            <li>Experience with bookkeeping, ledger management, and bank reconciliations</li>
            <li>Data analysis and spreadsheet</li>
            <li>Development of analytical and problem-solving skills applied to financial decision-making</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: '#EABD5F', color: '#fff' }}
          icon={<Star />}
        />
      </VerticalTimeline>

      <a
        href="https://www.linkedin.com/in/joseguerra5"
        target="_blank"
        className={`
            relative px-6 py-2 rounded-xl font-semibold text-white
            text-center m-auto mt-5 w-90 
            bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
            animate-[gradientShift_3s_linear_infinite]
            bg-[length:200%_200%]
            shadow-[0_0_12px_rgba(255,0,255,0.6)]
            z-30
            cursor-pointer
          `}
      >
        Hire Me
      </a>
    </div>
  )
}
