
interface cardData {
    name:string,
    age:number
}
const Card = ({name,age}:cardData) => {
  return (
    <div className="flex flex-col m-5 border border-gray-900 w-52 items-center ">
        <h1 className="font-bold text-2xl text-gray-700 p-5">{name}</h1>
        <p className="font-bold text-xl text-orange-300 p-5">{age}</p>
    </div>
  )
}

export default Card