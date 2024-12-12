import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="Mohamed nagy"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Mohamed Nagy</h1>
      <p>
        Front end developer and senior software engineering student at uskudar
        university and finally an athelete who trying to do his best to find
        time for both
      </p>
    </div>
  );
}
function SkillList() {
  const mySkills = skills;
  return (
     /* <Skill name="HTML+CSS" emoji="👶" color="blue" />
      <Skill name="Git and Github" emoji="👶" color="red" />
      <Skill name="Dhango" emoji="💪" color="green" />
      <Skill name="Vanilla Js" emoji="👶" color="yellow" />
      <Skill name="Laravel" emoji="💪" color="orange" />
      <Skill name="Php" emoji="💪" color="pink" /> */
     <div className="skill-list">
     {mySkills.map((sk) => (
       <Skill skill={sk.skill} level={sk.level} color={sk.color} />
     ))}
   </div>
  );
}
// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>
//         {props.name}
//         <span>{props.emoji}</span>
//       </span>
//     </div>
//   );
// }
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
