
export default function Skills({ skill, index }) {
  return (
    <li>
      {skill.mainLanguage}
      {skill.webLanguage}
      {skill.databaseLanguage}
      {skill.tools}
    </li>
  );
}