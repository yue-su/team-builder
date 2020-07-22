import React from 'react';

const Form = props => {


    const { values, update, submit, } = props
    
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
                    {/*
                    Controlled input
                    when someone types in the input, it triggers the onchange function, the function updates Values by update().
                    The values with new info will feed in the value={values.firstname}
                    Without the onchange callback, the input's value will be empty becasue the initial vaules is an empty formValues obj.
                    */}
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
          <br />
          
        </form>
      </div>
    )
}

export default Form