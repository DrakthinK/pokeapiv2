export default function Pokedex() {
    return (
      <div className="flex-row w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 m-5">
        <a className="flex flex-col justify-center items-center" href="#">
          <img className="w-2/3" src="https://i.pinimg.com/originals/ef/ff/65/efff65ee37b35ea3b4df426ad32b1097.png"/>
        </a>
        <div className="flex flex-col justify-center items-center p-3">
          <a href="#">
            <h5 className="flex flex-col justify-center items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
              Charmeleon
            </h5>
          </a>
          <a
            href="#"
            className=" w-full flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700"
          >
            Detalle
          </a>
        </div>
      </div>
    );
  }