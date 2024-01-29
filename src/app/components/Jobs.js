import Link from 'next/link';
export default function Jobs({ job, index }) {
  let link = `/jobs/${index}`;
  return (
        <li>
        <h3>
          <u>
            <Link href={link}>{job.type}</Link>
          </u>
        </h3>
        <ul>
          <li>{job.desc1}</li>
          <li>{job.desc2}</li>
        </ul>
      </li>
    );
}