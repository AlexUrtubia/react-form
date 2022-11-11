import React, {  useContext } from 'react'
import { User } from "../context/User";

export default function Card() {

  const {user, setUser} = useContext(User)
  console.log(user);

  return (
    <div className="flex  justify-center m-0 h-screen bg-bckg">
      <div className="w-3/5 self-start my-10 p-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5 flex w-full h-full text-center justify-center">
          <span className='text-xl'>
          Datos Usuario
          </span>
        </div>
        <hr />
        <h3>Nombre: {user.nombre}</h3>
      </div>
    </div>
  )
}