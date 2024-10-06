import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: 'Krishna' , lastName: 'Karodiwal' , email:"contact@kk.com"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type = 'greeting'
            title = "Welcome"
            user={loggedIn?.firstName || 'Guest' }
            subtext = "Access and manage your account and transaction efficiently"
          />


          <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={767989.12}
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks = {[ {currentBalance : 1234.1234} , { currentBalance: 4234.54} ]}
      />
    </section>
  )
}

export default Home
