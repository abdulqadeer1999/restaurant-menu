import { useState } from 'react';
import './App.css';

function App() {

  const [name, setname] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, msg:"",type:""})
  return (

   <section className="section-center">
     
     </section>
  );
}

export default App;
