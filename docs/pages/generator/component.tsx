import React from "react";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";

function ComponentGenerator() {
  const code = `
  npx glim-cli generate
`;
  return (
    <>
      <div className="mt-6">
        <h2 className="mt-5">Component Generator</h2>
        <p className="mb-4">
          For creating each component in glim project, you can use:
        </p>
        <CodeSnippet label="Bash" code={code} />
        <p className="mt-4">
          glim generate --componentcommand creates a folder with component name
          inside the componentsfolder in the src folder.
        </p>
        <h4 className="mt-5">It contains</h4>
        <ul className="list-disc list-inside">
          <li>[component-name].component.tsx</li>
          <li>[component-name].style.ts</li>
          <li>[component-name].tests.js</li>
          <li>[component-name].stories.js</li>
        </ul>
      </div>
    </>
  );
}

export default ComponentGenerator;
