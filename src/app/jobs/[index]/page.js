'use client';

import Link from "next/link";
import { useState, useEffect } from "react"

export default function Job({ params }) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handler = async function() {
    const response = await fetch('/api/jobs');
    const jobs = await response.json();
    setJobs(jobs);
    setLoading(false);
  };

  useEffect(() => {
    handler();
  }, []);

  if (loading) {
    return <div> Loading </div>
  } else {
    return (
      <>
      <section>
        <h2><Link href="/">Home</Link></h2>
      </section>
      
      <section>
        <h2><u>{jobs[params.index].type}</u></h2>
        <h3><u>Description:</u></h3>
        <p>
          {jobs[params.index].fullDescription}
        </p>

        <h3><u>Key Contributions:</u></h3>
        <ul>
          <li>{jobs[params.index].keyContribute1}</li>
          <li>{jobs[params.index].keyContribute2}</li>
          <li>{jobs[params.index].keyContribute3}</li>
        </ul>
      
        
      </section>
      </>
    );
  }g
}