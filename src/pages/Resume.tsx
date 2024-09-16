import ExperienceItem from "@/components/resume/ExperienceItem"
import ResumeContainer from "@/components/resume/ResumeContainer"
const experience = [
  {
    title: "React frontend developer, Qredo LTD, Remote",
    date: "December 2022 — February 2024",
    points: [
      "Collaborated closely with cross-functional teams to develop and implement intuitive user interfaces using ReactJS.",
      "My responsibilities included translating design mockups into functional components, optimizing application performance, and ensuring seamless user experiences across various devices and browsers.",
      "Developed a custom UI library that increased developer productivity and code reuse",
      "Contributed to enhancing existing features, implementing new functionalities, and troubleshooting technical issues to maintain the high standards of Qredo's platform.",
      "Typescript, Material UI, Zod, styled components, Storyblok, Redux Toolkit, RTK Query.",
      "https://www.qredo.com/"
    ]
  },
  {
    title: "Full-stack developer, Tipico LTD, St Julian's, Malta",
    date: "August 2018 — November 2022",
    points: [
      "Tipico is the biggest sports betting provider in Germany (https://sports.tipico.com/en).",
      "Technologies: React, Typescript, Sass, Redux, Redux Toolkit, RxJs, Jest, Enzyme, React Testing Library, ESLint, Webpack, git, npm. ",
      "On the back-end side - Java spring framework."
    ]
  },
  {
    title: "Full-stack and Java Developer",
    date: "December 2022 — February 2024",
    points: [
      "Worked on various projects using Java.",
    ]
  },
]

const Resume = () => {
  return (
    <div className="my-6">
      <div className="space-y-8">
        <ResumeContainer title="Experience">
          <a href="https://drive.google.com/file/d/1c0rKunVFKSsDlmmm30jCS-bNZvY66Gn2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 block">
            View Full Resume
          </a>
          {experience.map((item, index) => (
            <ExperienceItem
              key={index}
              title={item.title}
              date={item.date}
              points={item.points}
              showBorder={index !== experience.length - 1}
            />
          ))}
        </ResumeContainer>
        <ResumeContainer title="Skills">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
              <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript" />
              <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
              <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" />
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
              <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" />
              <img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" />
              <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="Material UI" />
              <img src="https://img.icons8.com/color/48/000000/redux.png" alt="Redux Toolkit" />
            </div>
          </div>
        </ResumeContainer>
      </div>
    </div>
  )
}

export default Resume