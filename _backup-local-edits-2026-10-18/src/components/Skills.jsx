const groups = [
  ["Frontend", "React · Next.js · JavaScript · TypeScript · HTML · CSS · Tailwind CSS"],
  ["Backend", "Node.js · Express.js · NestJS · REST APIs · JWT foundations"],
  ["Data", "PostgreSQL · Prisma · MongoDB · SQL"],
  ["Tools & delivery", "Git · GitHub · AWS Amplify · Cloudflare · Postman"],
];

function Skills() {
  return <section className="section-shell skills-section" id="skills"><div className="skills-intro"><span className="eyebrow">The toolkit</span><h2>Enough range to<br /><em>follow the problem.</em></h2></div><div className="skills-list">{groups.map(([name, items], index) => <div className="skill-row" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{items}</p></div>)}</div></section>;
}

export default Skills;
