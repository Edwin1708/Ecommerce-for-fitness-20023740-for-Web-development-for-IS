import { useState } from "react";
import "./About.css";
import Tilt from "react-parallax-tilt"

const callouts = [ 
 
  {

    name: "Lokesh Bgaul",
    description: "Developer 💻 | Competitive programmer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/95273095?v=4",
    imageAlt: "Lokesh Bgaul",
    href: "https://github.com/lokesh745",
    languages: ["JavaScript",
      "Python",
      "C++","java"]
      
  },
  {

    name: "Darshan HT",
    description: "Developer 💻 | Coder👨‍💻",
    imageSrc:
      "https://avatars.githubusercontent.com/u/86676352?v=4",
    imageAlt: "Darshan HT",
    href: "https://github.com/DarshanHT123",
    languages: ["JavaScript",
      "Python",
      "C++","java"]
      
  },
  {

    name: "Shreyas Gosavi",
    description: "Developer 💻 | Data Scientist",
    imageSrc:
      "https://avatars.githubusercontent.com/u/95286635?v=4",
    imageAlt: "Shreyas Gosavi",
    href: "https://github.com/ShreyasG482",
    languages: ["JavaScript",
      "Python",
      "C++","java"]
      
  },
  {

    name: "Irish Mattoo",
    description: "Developer 💻 | AI/ML",
    imageSrc:
      "https://avatars.githubusercontent.com/u/110155914?v=4",
    imageAlt: "Irish Mattoo",
    href: "https://github.com/irish-16-dev",
    languages: ["JavaScript",
      "Python",
      "C++","java"]
      
  },




];


export default function AboutUs() {
    const [val, setval] = useState("");
    return (
      <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">
              Contributors
            </h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 ">
              {callouts.map((callout) =>
                callout.name.toLowerCase().includes(val.toLowerCase()) ? (
                <Tilt><div
                    key={callout.name}
                    className="group relative py-6 profile-card text-center"
                  >
                    <div className="relative w-48 h-48 overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 ">
                      <img
                        style={{ objectFit: "contain" }}
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="contributor-name mt-6 text-xl font-bold text-black ">
                      <div className="contributor">{callout.name}</div>
                    </h3>
                    <a href={callout.href} target="_blank" rel="noreferrer">
                      <span className="absolute inset-0" />
                    </a>
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-500">
                      {callout.description}
                    </p>
                    
                  
                  </div>
                  </Tilt> 
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
