import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import FriendCard from './components/friendcard'
import Form from './components/form'

  const friendList = [
    {
      id: uuid(),
      firstname: 'Peter',
      lastname: 'Queen',
      yearofborn: '1905',
    },
  ]

const initialFormValues = {
  firstname: '',
  lastname: '',
  yearofborn: '',
  }

function App() {

  const [friends, setFriends] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const update = (name, value) => {
    const updatedFormValues = { ...formValues, [name]: value }
    setFormValues(updatedFormValues)
  }

  const submit = () => {
    const newFriend = {
      id: uuid(),
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      yearofborn: formValues.yearofborn,
    }
    setFriends([...friends, newFriend])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    setFriends(friendList)
  },[])

  return (
    <div className="App">
      <h1>Team Build</h1>
      <Form
        values={formValues}
        update={update}
        submit={submit} />
      {
        friends.map(item => {
          return <FriendCard key={item.id} friend={item} />
        })
      }
      
    </div>
  );
}

export default App;
