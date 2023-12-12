import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Web Programming",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>React.js</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      ),
    },
    {
      title: "Programming Skills",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
     <li>C</li>
     <li>C++</li>
     <li>JAVA</li>
     <li>Python</li>
        </ul>
      ),
    },
    {
      title: "Database Management",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      ),
    },
    {
        title: "Office Tools",
        id: "tools",
        content: (
          <ul className="list-disc pl-2">
            <li>Word</li>
            <li>PowerPoint</li>
            <li>Google Docs(Docs,Sheets,slides)</li>
          </ul>
        ),
      },
      {
        title: "Machine Learning",
        id: "ai",
        content: (
          <ul className="list-disc pl-2">
            <li>Pandas</li>
            <li>Numpy</li>
          </ul>
        ),
      },
      {
        title: "Version Control",
        id: "git",
        content: (
          <ul className="list-disc pl-2">
            <li>Git & Github</li>
          </ul>
        ),
      }
  ];
const Skills = () => {
    const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
    return (
        <section className="text-white bg-black" id="skills">
          
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
      <h2 className="text-6xl font-bold text-white mb-4 ml-11">My Skills</h2>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Web Programming{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Programming Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Database Management{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Office Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ai")}
              active={tab === "ai"}
            >
              {" "}
              Machine Learning{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("git")}
              active={tab === "git"}
            >
              {" "}
              Version Control{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Skills;