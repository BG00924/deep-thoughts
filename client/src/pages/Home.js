import React from 'react';

//importing so we can query
import { useQuery } from '@apollo/react-hooks'
import { QUERY_THOUGHTS } from '../utils/queries'

//thoughtlist component
import ThoughtList from '../components/ThoughtList'

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS)
  // optionsl chaining to access data.thoughts
  const thoughts = data?.thoughts || []
  console.log(thoughts)

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}  
        </div>
      </div>
    </main>
  );
};

export default Home;
