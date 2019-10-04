import { useState } from 'react';
import React from 'react'
import './App.css';
import TaskForm from './TaskForm/TaskForm.component';




function App() {

  const [tasks, setTasks] = useState(
    [{
      title: 'Cut off the student sign from the branch tree.',
      description: 'first birch at the walking path in the wood close to male dining room / pierwsza brzoza przy sciezce w lasku przy jadalni meskiej',
      reporter: 'Tomasz',
      contactPhone: '599-000-000',
      contactemail: 'tomasz@test.pl',
      area: 'A1',
      tools: 'All needed to this task can be found in Maitanace room. Tool: Nife, any sharp tool.',
      comments: [],
      coordinator: 'No coordinator',
      department: 'maitanance',
      priority: 'high',
      date: '12.08.2019',
      id: '1'
    },
    {
      title: 'Fence on rubbish containers ',
      description: 'Build Fance around rubbis container',
      reporter: 'Zbyszek',
      contactPhone: '577-888-245',
      contactemail: 'Zbyszek@test.pl',
      area: 'B1',
      tools: 'Maitanance Room',
      coordinator: 'Marek',
      comments: [],
      priority: 'medium',
      date: '13.08.2019',
      id: '2'
    },
    {
      title: 'Water to the sewage plant!',
      description: 'first birch at the walking path in the wood close to male dining room / pierwsza brzoza przy sciezce w lasku przy jadalni meskiej',
      reporter: 'Tomasz',
      contactPhone: '599-000-000',
      contactemail: 'tomasz@test.pl',
      area: 'A1',
      tools: 'All needed to this task can be found in Maitanace room. Tool: Nife, any sharp tool.',
      coordinator: 'Marek',
      comments: [],
      priority: 'low',
      date: '17.07.2019',
      id: '3'
    },
    {
      title: 'Protective net on the pump station',
      description: 'need something to keep wild roses in the right place ',
      reporter: 'Wanda',
      contactPhone: '665-234-456',
      contactemail: 'wanda.kotek@test.pl',
      area: 'B4',
      tools: '',
      coordinator: '',
      date: '12.08.2019',
      priority: 'medium',
      comments: [],
      id: '4'
    }]
  )

  return (
    <div className="App">
      <TaskForm tasks={tasks} setTasks={setTasks}></TaskForm>
    </div>
  );
}

export default App;
