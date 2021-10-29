import React from 'react'

const mystyle = {
  border: "1px solid rgb(167, 167, 167)",
  borderRadius: "20px",
};

const labelstyle = {
  color:"rgb(78, 78, 78)"
}

function MobileInput() {
  return (
    <>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" style={mystyle} id="floatingInput" placeholder="Enter Mobile Number" />
        <label for="floatingInput" style={labelstyle} >Mobile Number</label>
      </div>
    </>
  )
}

export default MobileInput;


