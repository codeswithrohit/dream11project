/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'
import  { useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'


const signup = () => {

  
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [price, setPrice] = useState('')
  const [remainingtime, setRemainingtime] = useState('')
  const [slug, setSlug] = useState('')
  

  const handleChange = (e) => {
    if (e.target.name == 'team1') {
      setTeam1(e.target.value)
    }
    else if (e.target.name == 'team2') {
      setTeam2(e.target.value)
    }
    else if (e.target.name == 'slug') {
      setSlug(e.target.value)
    }
    else if (e.target.name == 'price') {
      setPrice(e.target.value)
    }
   
       if (e.target.name == 'remainingtime') {
        setRemainingtime(e.target.value)
      }
    
     
     
   
  }

  console.log(team1,team2,slug,price,remainingtime)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { team1,team2,slug,price,remainingtime}

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addcontest`, {
      method: 'POST', // or 'PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)
    setTeam1('')
    setSlug('')
    setTeam2('')
    setPrice('')
    setRemainingtime('')
   
  }

  return (


    <div className="bg-gray-100 min-h-screen">
      <Head>
      <title>Add Projects</title>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      <link rel="icon" href="/icon.png" />
    </Head>
     
      <section className="px-6 py-4   ">

      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
      
     

        <form onSubmit={handleSubmit} method="POST">
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={team1}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="team1"
                    name="team1"
                    placeholder="Team 1"
                  />
            </div>

            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={slug}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="slug"
                    name="slug"
                    placeholder=" Slug"
                  />
            </div>

            

            
            
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={team2}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="team2"
                    name="team2"
                    placeholder="Team 2"
                  />
            </div>
          
           
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={price}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="price"
                    name="price"
                    placeholder="Project Price"
                  />
            </div>
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="text"
                    value={remainingtime}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="remainingtime"
                    name="remainingtime"
                    placeholder="Remaining Time"
                  />
            </div>

            <div className="flex items-center justify-between mt-4">
            <button
                    type="Submit"
                    className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                  >
                    Submit
                  </button>

                
            </div>
        </form>
    </div>

   
</div>









      
      </section>
    </div>






    
  )
}

export default signup