import React, { useState, useContext } from 'react'
import { User } from "../context/User";

export default function Formulario() {

  const {user, setUser} = useContext(User)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setUser ({...user,
      'nombre': nombre,
      'apellido': apellido,
      'telefono': telefono,
      'email': email,
    })

    // window.location.href="/card"
  }
  if (user.nombre.length < 1 && user.apellido.length < 1) {
    return (
      <div className="flex  justify-center m-0 h-screen bg-bckg">
        <div className="w-2/5 self-start my-10 p-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <form className='w-full justify-center self-center mt-6' onSubmit={handleSubmit}>
            <div className="flex items-center mb-6">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">
                  Nombre
                </label>
              </div>
              <div className="w-3/5 ">
                <input className="bg-gray-100 border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" type="text" name="name" value={nombre} required 
                onChange={(event) => {setNombre(event.target.value)}}/>            
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">Apellido</label>
              </div>
              <div className="w-3/5">
                <input className="bg-gray-100 border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" type="text" name="apellido" value={apellido} required 
                onChange={(event) => {setApellido(event.target.value)}} />                        
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">Teléfono</label>
              </div>
              <div className="w-3/5">
                <input className="bg-gray-100 border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" type="text" name="telefono" value={telefono} required 
                onChange={(event) => {setTelefono(event.target.value)}} />                        
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">Email</label>
              </div>
              <div className="w-3/5">
                <input className="bg-gray-100 border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" type="email" name="email" value={email} required 
                onChange={(event) => {setEmail(event.target.value)}} />            
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-2/5"></div>
              <div className="w-1/5 self-center">
                <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type='submit'>
                  Enviar
                </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex  justify-center m-0 h-screen bg-bckg">
        <div className="w-1/3 self-start my-10 p-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <form className='w-full justify-center self-center mt-6' onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">
                  Nombre
                </label>
              </div>
              <div className="w-3/5">
                <p className='mb-1 px-4 font-bold'>{user.nombre}</p>         
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">Apellido</label>
              </div>
              <div className="w-3/5">
                <p className='py-2 mb-1 px-4 font-bold'>{user.apellido}</p>                         
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">Teléfono</label>
              </div>
              <div className="w-3/5">
                <p className='py-2 mb-1 px-4 font-bold'>{user.telefono}</p>                        
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label className="block text-gray-500 font-bold text-right mb-1  pr-4">Email</label>
              </div>
              <div className="w-3/5">
                <p className='py-2 mb-1 px-4 font-bold'>{user.email}</p>             
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5"></div>
              <div className="w-1/5 self-center">
                <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => window.location.reload()}>
                  Recargar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

