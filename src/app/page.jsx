import TaskCard from '@/components/TaskCard';
import { prisma } from '@/libs/prisma.js'

export default async function HomePage() {
  const tasks = await prisma.task.findMany()

  return (
    <div>
      <h1>Tareas</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9 p-20'>
        {tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}


