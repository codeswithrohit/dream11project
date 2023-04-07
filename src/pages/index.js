import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [contestData, setContestData] = useState([]);
 
  

  const handleSubmit = async (event, contest) => {
    event.preventDefault();
    const data = {
      team1: contest.team1,
      team2: contest.team2,
      slug: Math.random().toString(36).substring(7),
      price: contest.price,
      remainingtime: contest.remainingtime,
      username: contest.username,
    };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/submitorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
  };
  
  const handleUsernameChange = (event, contest) => {
    const updatedContest = {...contest, username: event.target.value};
    const updatedContestData = contestData.contest.map((c) => (c._id === contest._id ? updatedContest : c));
    setContestData({...contestData, contest: updatedContestData});
  }

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getcontests`);
        setContestData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContestData();
  }, []);


 

  return (
    <>
      <Head>
        <title>Dream 11</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      {contestData.contest && contestData.contest.map((contest) => (
        <div key={contest._id} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">
            {contest.team1} vs {contest.team2}
          </h2>
          <p className="text-gray-500 text-lg mb-4">Price: {contest.price}</p>
          <p className="text-gray-500 text-lg mb-4">
            {contest.remainingtime}
          </p>
          <form onSubmit={(e) => handleSubmit(e, contest)}>
            <label htmlFor={`username_${contest._id}`}>Username:</label>
            <input type="text" id={`username_${contest._id}`} name="username" value={contest.username} onChange={(e) => handleUsernameChange(e, contest)} />
            <button type="submit" key={Math.random().toString(36).substring(7)}>Save</button>
          </form>
        </div>
      ))}
    </>
  )
}
