"use client"

import { useRouter } from 'next/navigation'

function TaskCard({ task }) {
    const router = useRouter()
    return (
        <div
            onClick={() => {
                router.push(`/tasks/edit/${task.id}`)
            }}
            className='bg-gray-100 p-4 rounded-lg shadow-md mb-4 text-slate-900' key={task.id}>
            <h3 className='text-4xl'>{task.title}</h3>
            <p className='text-gray-600'>{task.description}</p>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard
