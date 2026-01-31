import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import WhatWeDo from './pages/WhatWeDo'
import ContractManufacturing from './pages/services/ContractManufacturing'
import PowerUtilities from './pages/services/PowerUtilities'
import Facades from './pages/services/Facades'
import OutdoorInfrastructure from './pages/services/OutdoorInfrastructure'
import Capabilities from './pages/Capabilities'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/what-we-do/contract-manufacturing" element={<ContractManufacturing />} />
          <Route path="/what-we-do/power-utilities" element={<PowerUtilities />} />
          <Route path="/what-we-do/eni-facades" element={<Facades />} />
          <Route path="/what-we-do/outdoor-infrastructure" element={<OutdoorInfrastructure />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/our-projects" element={<Projects />} />
          <Route path="/our-projects/:slug" element={<ProjectDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/resources/insights/:slug" element={<InsightDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
