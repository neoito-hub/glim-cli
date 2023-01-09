import React from "react";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";

function ComponentGenerator() {
  const code = `
    console.log('hello world)
`;
  return (
    <div className="mt-6">
      <CodeSnippet label="Bash" code={code} />
    </div>
  );
}

export default ComponentGenerator;
