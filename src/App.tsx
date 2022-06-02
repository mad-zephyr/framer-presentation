import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Header } from './app/components/components';
import cn from 'classnames'
import { MainPage, StreamingPage } from './app/pages/component';

import styles from './app.module.sass'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <div className={cn('App', styles.app)}>
      <Header />
      {/* <AnimatePresence exitBeforeEnter> */}
        <Routes location={location} key={location.key}> 
          <Route path="/" element={<MainPage />} />
          <Route path="/streaming" element={<StreamingPage />} /> 
        </Routes>
      {/* </AnimatePresence> */}
      <Footer />
    </div>
  )
}

export default App;
