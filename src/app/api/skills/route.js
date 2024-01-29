export async function GET() {
  return Response.json([
    {mainLanguage: "Java ,Python, C"},
    {webLanguage: "React, Node.js, HTML/CSS"},
    {databaseLanguage: "mySQL, MongoDB"},
    {tools: "Git, VS Code"}
  ]);
}

export async function POST() {

}
