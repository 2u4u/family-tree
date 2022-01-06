import React, { useState } from 'react';
import OrgChart from './components/MyChart';
import ModalAdd from './components/ModalAdd';
import ModalRemove from './components/ModalRemove';
import { addPerson, removePerson } from './utils';

const initialNodes = [          
  { id: 1, tags: ["m"], name: "King George VI", img: "https://ui-avatars.com/api/?name=King+George"},
  { id: 2, pid: 1, tags: ["partner"], name: "Queen Elizabeth", img: "https://ui-avatars.com/api/?name=Queen+Elizabeth" },
  { id: 3, pid: 1, ppid: 2, name: "Queen Elizabeth II", img: "https://ui-avatars.com/api/?name=Queen+Elizabeth"},
  { id: 4, pid: 3, tags: ["partner", "m"], name: "Prince Philip", img: "https://ui-avatars.com/api/?name=Prince+Philip"},
  { id: 5, pid: 1, ppid: 2, name: "Princess Margaret", img: "https://ui-avatars.com/api/?name=Princess+Margaret"},
  { id: 6, pid: 3, tags: ["m"], ppid: 4, name: "Charles", img: "https://ui-avatars.com/api/?name=Charles"},
  { id: 7, pid: 6, tags: ["partner"] , name: "Diana", img: "https://ui-avatars.com/api/?name=Diana"},
  { id: 8, pid: 6, tags: ["partner"], name: "Camila", img: "https://ui-avatars.com/api/?name=Camila" },
  { id: 9, pid: 3, ppid: 4, name: "Anne", img: "https://ui-avatars.com/api/?name=Anne"},
  { id: 10, pid: 3, ppid: 4, tags: ["m"], name: "Prince Andrew", img: "https://ui-avatars.com/api/?name=Prince+Andrew"},
  { id: 11, pid: 3, ppid: 4, tags: ["m"], name: "Prince Edward", img: "https://ui-avatars.com/api/?name=Prince+Edward"},
  { id: 12, pid: 6, ppid: 7, tags: ["m"], name: "Prince William", img: "https://ui-avatars.com/api/?name=Prince+William"},
  { id: 13, pid: 6, ppid: 7, tags: ["m"], name: "Prince Harry", img: "https://ui-avatars.com/api/?name=Prince+Harry"},
  { id: 14, pid: 12, tags: ["partner"], name: "Catherine", img: "https://ui-avatars.com/api/?name=Catherine"},
  { id: 15, pid: 13, tags: ["partner"], name: "Meghan Markle", img: "https://ui-avatars.com/api/?name=Meghan+Markle"},
  { id: 16, pid: 12, ppid: 14, tags: ["m"], name: "Prince George of Cambridge", img: "https://ui-avatars.com/api/?name=Prince+George"},
  { id: 17, pid: 12, ppid: 14, tags: ["m"], name: "Prince Charlotte of Cambridge", img: "https://ui-avatars.com/api/?name=Prince+Charlotte"},
  { id: 18, pid: 12, ppid: 14, tags: ["m"], name: "Prince Louis of Cambridge", img: "https://ui-avatars.com/api/?name=Prince+Louis"},
]

function App() {
  const [nodes, setNodes] = useState([...initialNodes]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const showAddNewMember = () => {
    setShowAddModal(true);
  }
  const hideAddNewMember = () => {
    setShowAddModal(false);
  }
  const addNewMember = (neWode) => {
    const newNodes = addPerson(nodes, neWode);
    setNodes(newNodes);
    setShowAddModal(false);
  };
  const showRemoveMember = () => {
    setShowRemoveModal(true);
  }
  const hideRemoveMember = () => {
    setShowRemoveModal(false);
  }
  const removeMember = (id) => {
    const newNodes = removePerson(nodes, id);
    setNodes(newNodes);
    setShowRemoveModal(false);
  };

  return (
    <div className="app">
      <OrgChart nodes={nodes} />
      <button className="app-btn-add btn btn-primary" onClick={showAddNewMember}>Add new family member</button>
      <button className="app-btn-remove btn btn-danger" onClick={showRemoveMember}>Remove family member</button>
      {showAddModal ? <ModalAdd nodes={nodes} hide={hideAddNewMember} add={addNewMember} /> : null}
      {showRemoveModal ? <ModalRemove nodes={nodes} hide={hideRemoveMember} remove={removeMember} /> : null}
    </div>
  );
}

export default App;