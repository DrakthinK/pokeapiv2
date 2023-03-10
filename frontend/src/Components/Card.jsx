import { Link } from "react-router-dom";

export default function Card({
  image = "https://i.pinimg.com/originals/ef/ff/65/efff65ee37b35ea3b4df426ad32b1097.png",
  name,
  id,
}) {
  return (
    <Link to={`${id}`}>
      <div className="flex-row w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 m-5">
        <span className="flex flex-col justify-center items-center">
          <img className="w-2/3" src={image} />
        </span>
        <div className="flex flex-col justify-center items-center p-3">
          <>
            <span>
              <h5 className="flex flex-col justify-center items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
                {name}
              </h5>
            </span>
          </>
          <span className=" w-full flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700">
            Detalle
          </span>
        </div>
      </div>
    </Link>
  );
}
