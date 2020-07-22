import React from 'react'

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
            <button onClick={editHandler}>Edit</button>
        </div>
    )
}

export default FriendCard