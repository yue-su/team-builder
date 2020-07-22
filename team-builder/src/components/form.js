import React from 'react';

const Form = props => {


    const { values, update, submit } = props
    
    const changeHandler = event => {
        const name = event.target.name
        const value = event.target.value
        update(name, value)
    }

    const submitHandler = event => {
        event.preventDefault()
        submit()
    }

    return (
      <div>
        <form onSubmit={submitHandler}>
          <label>
            Name: &nbsp;
            <input
              id="fnameInput"
              name="firstname"
              type="text"
              onChange={changeHandler}
              placeholder="First Name"
              value={values.firstname}
              maxLength="20"
            ></input>
            <input
              htmlFor="lnameInput"
              id="lnameInput"
              name="lastname"
              type="text"
              onChange={changeHandler}
              placeholder="Last Name"
              value={values.lastname}
            ></input>
          </label>
          <br></br>
          <lable>
            Year of born:&nbsp;
            <input
              id="yearInput"
              type="number"
              name="yearofborn"
              placeholder="1900"
              onChange={changeHandler}
              value={values.yearofborn}
            ></input>
                </lable>
                <br></br>
          <button>Submit</button>
        </form>
      </div>
    )
}

export default Form