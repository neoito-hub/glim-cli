import React from "react";

interface Props {
  label: string;
  code: string;
}
function CodeSnippet({ label, code }: Props) {
  return (
    <div>
      <div className="text-primaryGreen text-base border-b-[1.5px] border-b-primaryGreen w-min mb-2">
        <code>
          <pre>{label}</pre>
        </code>
      </div>
      <div className="bg-surface p-8 font-mono rounded-xl">{code}</div>
    </div>
  );
}

export default CodeSnippet;
