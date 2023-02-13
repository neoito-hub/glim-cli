import React from "react";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";
import MainLayout from "../layout/MainLayout";

function Gettingstarted() {
  const createProject = `
  npx glim-cli create-app [app-name]
  `;
  return (
    <>
      <MainLayout>
        <div className="pt-5">
          <h2>Getting Started</h2>
          <p className="mb-2">To create new glim project, you can use :</p>
          <CodeSnippet code={createProject} label="Bash" />
          <p className="mt-2">
            Once&#39;s it running, it will create a new glim project with
            corresponding name along with typical folders and configuration
            files.
          </p>

          <h4 className="mt-5">Folder Structure</h4>
          <ul className="list-inside list-disc text-base">
            <li>
              <span className="text-primaryGreen"> index.js</span> - The main
              entry point of application. It is equivalent to React on the web
              mounting the project to the root DOM node
            </li>
            <li>
              <span className="text-primaryGreen"> /android and /ios </span> -
              The folders where all the native code lives. If we needed to add
              or edit any platform specific native code, this is where we&#39;d
              have to look. We also need to go into these folders if we have to
              install any native libraries
            </li>
            <li>
              <span className="text-primaryGreen">.prettierrc.js </span> - Code
              formatter which is again optional, but you can read more about it
              in our code style chapter
            </li>
            <li>
              <span className="text-primaryGreen">/src </span> - Base folder
              which will store all the necessary folders or files
            </li>
            <ul className="list-disc list-inside ml-10">
              <li>
                <span className="text-primaryGreen">/components</span> - Where
                all the reusable components inside the project resides
              </li>
              <li>
                <span className="text-primaryGreen">/config</span> - Contains
                all the configurations of the project
              </li>
              <li>
                <span className="text-primaryGreen">/hooks</span> - Contains all
                the custom hooks inside the project
              </li>
              <li>
                <span className="text-primaryGreen">/navigation</span> -
                Conatains all the navigations
              </li>
              <li>
                <span className="text-primaryGreen"> /redux</span> - Contains
                all the redux components such as store, saga and slice
              </li>
              <li>
                <span className="text-primaryGreen">/screens</span> - Contains
                all the screens inside the project
              </li>
              <li>
                <span className="text-primaryGreen">/utils</span> - Storing
                reusable methods
              </li>
            </ul>
          </ul>
        </div>
      </MainLayout>
    </>
  );
}

export default Gettingstarted;
