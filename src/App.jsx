import { Link } from "wouter";

import { cupcakes } from "./cupcakes.js";

function App() {
  return (
    <div className="max-w-3xl m-auto py-10 px-8">
      <h1 className="text-5xl font-bold mb-10">Cupcakes</h1>
      <div className="grid grid-cols-2 gap-6">
        {cupcakes.map((cupcake) => {
          return (
            <div key={cupcake.id} className="card bg-base-100 shadow-xl p-0">
              <div>
                <img src={cupcake.image} alt="" />
              </div>
              <div className="px-8 py-4 pb-6">
                <h2 className="card-title mb-4 text-2xl font-bold">
                  {cupcake.title}
                </h2>
                <div className="card-actions">
                  <Link href={`/cupcakes/${cupcake.id}`}>
                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
