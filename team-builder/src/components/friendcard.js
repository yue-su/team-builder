import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, } from 'react-bulma-components';

const FriendCard = props => {

    const { friend, memberToEdit } = props
    
    const editHandler = event => {
        event.preventDefault()
        memberToEdit(friend)
    }

    return (
        <div>
            <h2>{friend.firstname} {friend.lastname}</h2>
            <p>{friend.yearofborn}</p>
            <Button onClick={editHandler}>Edit</Button>
        </div>
    )
}

export default FriendCard