import React from 'react'

const FriendCard = props => {

    const { friend } = props
    

    return (
        <div>
            <h2>{friend.firstname} {friend.lastname}</h2>
            <p>{friend.yearofborn}</p>
        </div>
    )
}

export default FriendCard