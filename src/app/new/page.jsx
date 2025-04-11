"use client"
import { CiTrash } from "react-icons/ci";

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


function NewPage({ params }) {
  const router = useRouter('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState()

  console.log(params)

  const handlechange = (e) => {
    setTitle(e.target.value)


  }
  const handleDescription = (e) => {
    setDescription(e.target.value)

  }

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title)
          setDescription(data.description)
        })


    }

  }, [])


  const onSubmit = async (e) => {
    e.preventDefault()

    if (params.id) {

      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data)

    } else {

      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    router.refresh()
    router.push('/')

  }

  return (
    <div className='flex flex-col items-center'>
      <form action="" className='w-1/2 sm:w-full bg-slate-800 p-20 flex flex-col items-start' onSubmit={onSubmit}>
        <h1>CONTACTANOS</h1>
        <p>nombre:  </p>
        <input className='border  border-gray-300 focus:border-3 focus:shadow- focus:shadow-base-100 rounded px-4 py-2' type="text" name="title" id="name" placeholder='luis fernandez'
          value={title}
          onChange={handlechange} />

        <p>descripcion:</p>
        <textarea className=' border h-40 border-gray-600 rounded-lg  ' name="description" cols="30" rows="30" id="" onChange={handleDescription}
          value={description}></textarea>

        <div className="flex items-center justify-between w-60">
          <button type='submit' className='btn btn-info mt-10 w-fit mx-auto' >crear</button>

          {params.id && (<button onClick={() => console.log('eliminando')}> <CiTrash className="text-3xl text-red-800 stroke-2"
            onClick={async () => {
              const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'DELETE'
              })
              const data = await res.json()
              console.log(data)

              router.push('/');
            }}
          /></button>)}

        </div>
      </form>

    </div>
  )
}

export default NewPage
