import React from 'react'

function Button() {
  return (
    <div>
        <button type='button' onClick={() => alert('Button clicked!')}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            
            >Submit</button>
    </div>
  )
}

export default Button