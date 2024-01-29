
export default function Project({ project, index }) {
  return (
    <li>
      <h3>{project.type}</h3>
       <ul>
          <li>{project.desc1}</li>
          <li>{project.desc2}</li>
        </ul>
    </li>
  );
}