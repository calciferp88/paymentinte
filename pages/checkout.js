import Head from 'next/head'
import Header from '../components/Header';
import Checkout from '../components/Checkout';

export default function Home() {
  return (
 
      <div className="bg-gray-800 h-screen
      overflow-y-scroll scrollbar-hide">
        {/* Header */}
        <Header/>

        <Checkout/>
      </div>
  )
}
