import React, { useState } from 'react'
import { TaskContext } from '../context/taskContext';
import { useContext } from 'react';

const Home = () => {
  const [task, setTask] = useState([]);
  const {hello} = useContext(TaskContext);

  return (
    <div>
      Hello world, {hello}
    </div>
  )
}

export default Home;