import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Work from './pages/Work'
import Products from './pages/Products'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import BookingPage from './pages/BookingPage'

// Service Pages
import { AgenticAIPage } from './pages/services-page/AgenticAIPage'
import { ProcessWorkflowAutomationPage } from './pages/services-page/ProcessWorkflowAutomationPage'
import WebScrapingPage from './pages/services-page/WebScrapingPage'
import DataEngineeringPage from './pages/services-page/DataEngineeringPage'
import { DataAnalyticsPage } from './pages/services-page/DataAnalyticsPage'
import HealthCarePage from './pages/services-page/HealthCarePage'
import WebSoftwarePage from './pages/services-page/WebSoftwarePage'
import DocumentAutomationPage from './pages/services-page/DocumentAutomationPage'

// Product Detail Pages
import ZestRCM from './pages/products-page/ZestRCM'
import ZestSchool from './pages/products-page/ZestSchool'
import ZestHR from './pages/products-page/ZestHR'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Primary Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/work" element={<Work />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-a-call" element={<BookingPage />} />

        {/* Service 1: AI Agents and Intelligent Workflow Automation */}
        <Route path="/services/ai-automation" element={<AgenticAIPage />} />
        <Route path="/services/agentic-ai-page" element={<AgenticAIPage />} />

        {/* Service 2: Python and RPA Automation */}
        <Route path="/services/python-rpa-automation" element={<ProcessWorkflowAutomationPage />} />
        <Route path="/services/process-workflow-page" element={<ProcessWorkflowAutomationPage />} />

        {/* Service 3: Web Scraping and Business Data Extraction */}
        <Route path="/services/web-scraping-data-extraction" element={<WebScrapingPage />} />
        <Route path="/services/web-scraping-page" element={<WebScrapingPage />} />

        {/* Service 4: Data Engineering and ETL/ELT */}
        <Route path="/services/data-engineering" element={<DataEngineeringPage />} />
        <Route path="/services/erp-page" element={<DataEngineeringPage />} />

        {/* Service 5: Business Intelligence and Power BI Analytics */}
        <Route path="/services/business-intelligence" element={<DataAnalyticsPage />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />

        {/* Service 6: Healthcare Analytics and Revenue Cycle Management */}
        <Route path="/services/healthcare-analytics-rcm" element={<HealthCarePage />} />
        <Route path="/services/healthcare-page" element={<HealthCarePage />} />
        <Route path="/services/healthcare-rcm-page" element={<HealthCarePage />} />

        {/* Service 7: Custom Software and SaaS Development */}
        <Route path="/services/custom-software-development" element={<WebSoftwarePage />} />
        <Route path="/services/web-software-page" element={<WebSoftwarePage />} />
        <Route path="/services/web-software-development" element={<WebSoftwarePage />} />

        {/* Service 8: Document Processing and Business Process Automation */}
        <Route path="/services/document-automation" element={<DocumentAutomationPage />} />
        <Route path="/services/chatbot-page" element={<DocumentAutomationPage />} />
        <Route path="/services/chatbot-integration" element={<DocumentAutomationPage />} />

        {/* Products */}
        <Route path="/products/zestRCM" element={<ZestRCM />} />
        <Route path="/products/zestSchool" element={<ZestSchool />} />
        <Route path="/products/schoolos" element={<ZestSchool />} />
        <Route path="/products/zestHR" element={<ZestHR />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
