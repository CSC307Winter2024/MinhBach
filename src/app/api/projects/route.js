export async function GET() {
  return Response.json([
    {type: "Online Task Manager (Java, MySQL)", 
    desc1: "Developed a task management application in Java, enabling users to create, update, and delete tasks.", desc2: "Integrated a MySQL database for persistent data storage."},

    {type: "Weather App (React, API Integration)", 
    desc1: "Created a weather application using React that fetches real-time weather data from a public API.", desc2: "Implemented responsive design and user-friendly interface."},

    {type: "E-commerce Website (JavaScript, Node.js, MongoDB)", desc1: "Collaborated on the development of a full-stack e-commerce website.", 
    desc2: "Implemented features such as product listing, user authentication, and shopping cart functionality.", desc3: "Used Node.js for server-side scripting and MongoDB for data storage."}
  ]);
}

export async function POST() {

}
