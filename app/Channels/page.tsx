import React from 'react'
import ChannelHeader from '../components/ChannelHeader'
import ChannelsList from '../components/ChannelsList'

const Channels = () => {
  return (
    <div className='flex flex-col'>
      <ChannelHeader />
      <ChannelsList />
    </div>
  )
}

export default Channels