import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import FriendCard from './components/friendcard'
import Form from './components/form'
import styled from 'styled-components'

const StyledApp = styled.div`
background-color:#f2f7f5;
height: 100vh;
padding: 3rem;
color: #475d5b;

h1{
  color: #00473e;
  font-size: 300%;
  margin: 3rem;
  text-transform: uppercase;
}

`

/*
friendlist here is to simulate a data set retrived from an API or database. In this case, it is an array of obj.
usually this type of data will be retrived by axios and used as a initial value for a state(in this case, it is the 'friend' state)
typically this data will be set to the initial value by setState method (in this case it is the setFriends())
*/
  const friendList = [
    // {
    //   id: uuid(),
    //   firstname: 'Peter',
    //   lastname: 'Queen',
    //   yearofborn: '1905',
    // },
  ]

/*
initialFormValues here is to set up the initial value for the state used by a form.
The key pairs are set to be empty and will be used as a template.
*/

const initialFormValues = {
  firstname: '',
  lastname: '',
  yearofborn: '',
  }

//Main function, App only consists of two components for simplifying the structure
function App() {

  /*
  Two states are used here:
  friends is the one used for rerendering the friends componenet once there is a state change triggered by setFriends()
  formValues is the one used for managing the values returned from the Form component.
  */
  const [friends, setFriends] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  /*
  update is a callback function that will be used by the Form component as a prop in changeHandler.
  A new updatedFormValues is set to hold the value return from Form, which is a new friend item created by the user input data
  setformValues will refresh the formValues with the new data.
  formValues now holds the new data and prepared for the submit callback to consume.
  [name] is the syntax when a variable is used as the key.
  */
  const update = (name, value) => {
    const updatedFormValues = { ...formValues, [name]: value }
    setFormValues(updatedFormValues)
  }

  /*
  sumbit is another callback that will be passed to Form and used by the submitHandler
  It extracts the information stored in formValues and feeds them into a newFriend container
  setFriends refresh the friends array by copying it first and then atttch the newFriend.
  at last, a reset to the formvalues will reset the key values to empty
  */
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

  /*
  This function is to update the friends state with a inner varable so it will remove the member
  */
  const memberToEdit = (friend) => {
    setFormValues(friend)
    let toBeEditFriend = [...friends]
    for (let i = 0; i < toBeEditFriend.length; i++) {
      if (toBeEditFriend[i].id === friend.id)
        toBeEditFriend.splice(i, 1)
    }
    setFriends(toBeEditFriend)
  }
  //here useEffect is to mimic the process when the page renders the first time and gets info from database
  useEffect(() => {
    setFriends(friendList)
  }, [])

  return (
    <StyledApp className="App">
      <h1>Team Build</h1>

      {/*still not quite clear about passing formValues as a props in Form*/}
      <Form
        values={formValues}
        update={update}
        submit={submit} />
      {
        friends.map(item => {
          return <FriendCard key={item.id} friend={item} memberToEdit={memberToEdit} />
        })
      }
      
    </StyledApp>
  );
}

export default App;
