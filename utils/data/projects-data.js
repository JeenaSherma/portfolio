import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    "id": 1,
    "name": "Recipe App",
    "description": "A simple and efficient app that allows users to add, edit, and delete their favorite recipes. Manage your personal recipe collection with ease. Built for quick and intuitive use.",
    "tools": ["DotNet MVC", "SQL Server", "Entity Framework"],
    "role": "Dotnet Intern",
    "code": "",
    "demo": "",
    "image": crefin
  },
  
  {
    "id": 2,
    "name": "Complain App",
    "description": "An efficient app for managing user complaints. It allows users to submit, track, and resolve complaints seamlessly. The app features role-based authentication, enabling secure user management, and provides admins with tools to address and resolve issues effectively.",
    "tools": ["DotNet API", "SQL Server", "Entity Framework", "JWT", "Identity"],
    "role": "DotNet Developer",
    "code": "",
    "demo": "",
    "image": travel
  },
  
  {
    id: 3,
    name: "Sifaris App",
    description:
      "Sifaris is a app for government tailored specifically for government entities, designed to streamline legal procedures and bolster governance efficacy",
    tools:  ["Dot Net Api","Sql Server", "EntityFramework","JWT","Identity"],
    code: "",
    role: "DotNet Developer",
    demo: "",
    image: realEstate,
  },
  {
    "id": 4,
    "name": "Real Estate Management",
    "description": 
      "My team and I developed a Real Estate management dashboard application called Ghaderi Freema. As a back-end developer, I was responsible for designing and implementing the server-side logic using .NET Core API, managing the database with SQL Server and Entity Framework, and securing the API with JWT authentication. The front end was built with React, but my focus was on creating scalable APIs, optimizing database queries, and ensuring smooth integration between the front and back end.",
    "tools": ["Dot Net Core API", "SQL Server", "Entity Framework", "JWT"],
    "code": "",
    "demo": "",
    "image": "ayla",
    "role": "Back-end Developer"
  }
  
]
// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
