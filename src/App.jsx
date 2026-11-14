
import React, { useState } from 'react'

const App = () => {

  // 1. Ye state input ke heading ko store karegi
  const [title, setTitle] = useState('')

  // 2. Ye state input ki details ko store karegi
  const [title2, setTitle2] = useState('')

  // 3. Ye state hamare saare notes ko store karegi
  // Initially empty array hai, kyunki abhi koi notes nahi hai
  const [task, setTask] = useState([])

  // Form submit hone par ye function chalega
  const submiteHandler = (e) => {
    e.preventDefault() // Page reload hone se rokta hai

    // Purane notes ki ek copy bana rahe hain
    const copyTask = [...task]

    // Naya note object ke form mein array mein add kar rahe hain
    copyTask.push({ title, title2 })

    // Updated array ko state mein save kar rahe hain
    setTask(copyTask)

    // Submit hone ke baad dono input empty kar do
    setTitle('')
    setTitle2('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
     copyTask.splice(idx,1)

     setTask(copyTask)
  }

  return (
    <div className='min-h-screen bg-black text-white flex flex-col lg:flex-row'>

      {/* LEFT SIDE - Add Notes Form */}
      <form
        onSubmit={submiteHandler}
        className='flex flex-col gap-4 p-10 w-full lg:w-1/2'
      >
        <h1 className='text-purple-200 text-3xl'>🕮 NoteSpace</h1>

        <div className='bg-gray-900 p-10 rounded-2xl '>
        <h2 className='text-4xl  text-blue-200 font-bold '> Create Notes</h2>
        <h2 className='text-gray-400'>Write down your thoughts and ideas.</h2>
        
        {/* Heading input */}
        <div className='p-2 font-bold'>Note Heading</div>
        <input
          type='text'
          placeholder='Enter Your Note Heading'
          className='px-5 bg-gray-800 py-2 w-full border-2 rounded outline-none font-medium'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          required
        />

        {/* Details input */}
        <h2 className='p-2 mt-5 font-bold '>Note Details</h2>
        <textarea
          placeholder='Write Your Thoughts Here....!'
          className='px-5 bg-gray-800 mb-5 py-5 h-32 w-full border-2 rounded outline-none font-medium'
          value={title2}
          onChange={(e) => {
            setTitle2(e.target.value)
          }}
          required
        />

        <button className='bg-purple-400 active:scale-95 text-white px-5 py-2 w-full rounded font-medium'>
          + Add New Note
        </button>
        </div>
      </form>

      {/* RIGHT SIDE - Display Notes */}
      <div className='w-full lg:w-1/2 p-10 border-t-2 lg:border-t-0 lg:border-l-2 border-white'>
        <div className='flex justify-between items-center'>

          <h1 className='text-xl text-white underline font-bold'>
            My Notes
          </h1>

          <button className='bg-purple-400 text-black ml-auto px-4 py-2 rounded-lg font-semibold'>
            Total Notes : {task.length}
          </button>

        </div>

        <h5 className='text-gray-400 mb-20 mt-2'>
          All your ideas in one place
        </h5>
        {task.length ===0 ? (
        <div className='p-20 bg-gray-900 flex flex-col justify-center rounded-2xl border-dashed border-2 items-center text-center '>
        <div className='text-5xl mb-4'>📝</div>
          <div className='font-bold'>
            No Notes Yet
            <div className='text-gray-500 font-normal'>
              Create Your First Note & It Will Appear Here
            </div>
        </div>
        </div>
        ) : (

        <div className='flex flex-wrap gap-5 mt-5'>

          {/* Map array ke har note par chalega aur ek note card banayega */}
          {task.map(function(elem, idx) {

            // Har baar ek note card return hoga
            return (
             
              <div
                key={idx}
                className='h-60 w-50 rounded-xl text-black p-6 pt-12 flex flex-col justify-start items-stretch bg-cover bg-center bg-[url(https://static.vecteezy.com/system/resources/previews/014/204/069/original/digital-sticky-notes-cute-paper-png.png)]'
              >
                {/* Heading - Top Center */}
                <h3 className='text-center w-full text-xl underline font-bold'>
                  {elem.title}
                </h3>

                {/* Details - Left Side */}
                <p className='mt-4 text-left w-full font-medium text-gray-700'>
                  {elem.title2}
                </p>
                <button  onClick={()=>{
                  deleteNote(idx)
                  }} className='bg-red-900 active:scale-90 text-white text-center font-bold mb-2 mt-auto w-full '>Delete notes</button>

                </div>

            )
          })}

        </div>
        )}
      </div>
    </div>
  )
}

export default App
