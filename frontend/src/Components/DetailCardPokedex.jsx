export default function DetailCardPokedex({
  image = "https://i.pinimg.com/originals/ef/ff/65/efff65ee37b35ea3b4df426ad32b1097.png",
  name
}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col w-full md:flex-row rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h4 className="text-gray-900 text-xl font-sans mb-2">
              <strong>Nombre:</strong> {name}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
