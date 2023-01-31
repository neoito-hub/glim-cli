import Head from "next/head";
import React from "react";

function overview() {
  return (
    <>
      <Head>
        <title>Glim | Overview</title>
      </Head>
      <div className="p-10">
        <h2>Overview</h2>
        <p>
          Glim cli is the react native boilerplate that provide hassle-free
          architecture for developing react native applications. It&#39;s an all
          in one library kit for react native developers. Through glim cli we
          can create components, screens, redux components etc.
        </p>

        <h4 className="mt-5">Prerequisites</h4>
        <ul className="list-disc list-inside">
          <li>Node</li>
          <li>WatchMan</li>
          <li>Xcode</li>
          <li>CocoaPods</li>
          <li>Ruby</li>
        </ul>

        <h4 className="mt-5">Glim Boilerplate</h4>
        <p>
          Glim boilerplate includes with different set of libraries, so you can
          just start coding without doing any configurations.
        </p>
        <table className="w-full mt-5">
          <thead>
            <tr>
              <th className="text-left">Library</th>
              <th className="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((obj, index) => {
              return (
                <tr key={index}>
                  <td className="py-3">kjgjh</td>
                  <td>sjhdg shgdj sjhgd</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default overview;
