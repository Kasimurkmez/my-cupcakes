import { cupcakes } from "./cupcakes.js";

function Cupcake({ id }) {
  const cupcake = cupcakes.find((cupcake) => cupcake.id === id);
  return (
    <div className="max-w-3xl m-auto py-10 px-8">
      {cupcake && (
        <>
          <h1 className="text-5xl font-bold mb-10">{cupcake.title}</h1>
          <figure>
            <img src={cupcake.image} alt="" />
          </figure>
          <div className="mt-10">
            <p className="text-lg">{cupcake.description}</p>
          </div>
        </>
      )}
      {!cupcake && <p>This is not the cupcake you are looking for.</p>}
    </div>
  );
}

export default Cupcake;
