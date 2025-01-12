import './tasks.css'

export default function Tasks({tasks}) {
  return (
    <ul className='task-list'>      
      {
        tasks.length ?
        tasks.map(task => (
          <li key={task.id} className='task'>
            <p className='task__description'>
              {task.description}
            </p>
          </li>
        )) :
        <p className='task__description'>          
          {'[List of your job responsibilities]'}
        </p>
      }
    </ul>
  )
}