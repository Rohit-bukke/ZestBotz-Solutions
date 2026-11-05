export const faqCategories = [
  'All',
  'General & Services',
  'Process, Technology & Engagements',
  'Security, Data Governance & Getting Started',
]

export const faqs = [
  // --- Category: General & Services ---
  {
    id: 'what-does-zestbotz-do',
    category: 'General & Services',
    question: 'What does ZestBotz do?',
    summary:
      'ZestBotz designs and implements practical technology solutions that automate repetitive operational tasks, build reliable data pipelines, and deliver actionable business analytics.',
    answer: [
      'ZestBotz designs and implements practical technology solutions that automate repetitive operational tasks, build reliable data pipelines, and deliver actionable business analytics. Rather than deploying technology for its own sake, the company focuses on three core operational promises: automating manual work, connecting fragmented data systems, and improving business decisions.',
      'Key service offerings include intelligent AI workflow automation, Python and RPA scripting, authorized web data extraction, ETL/ELT data engineering, Power BI business intelligence, healthcare revenue cycle management (RCM) analytics, document automation, and custom web application development.',
    ],
  },
  {
    id: 'industries-and-functions',
    category: 'General & Services',
    question: 'Which industries and business functions does ZestBotz serve?',
    summary:
      'ZestBotz works across several operational domains with dedicated solutions tailored to healthcare, SMBs, sales, logistics, and technology teams.',
    answer: [
      'ZestBotz works across several operational domains, with dedicated solutions tailored to:',
    ],
    items: [
      {
        title: 'Healthcare Providers & RCM Teams',
        description:
          'Claims, payment, and denial tracking, EMR export validation, and financial reconciliation workflows.',
      },
      {
        title: 'Small and Medium-Sized Businesses (SMBs)',
        description:
          'Spreadsheet automation, recurring administrative report generation, document extraction, and software integrations.',
      },
      {
        title: 'Sales & Marketing Teams',
        description:
          'Authorized market and directory data extraction, prospect research consolidation, and CRM data enrichment.',
      },
      {
        title: 'Logistics & Operations',
        description:
          'Shipment tracking consolidation, exception alerting, and cross-platform inventory/status reconciliation.',
      },
      {
        title: 'Technology & Service Companies',
        description:
          'Backend ETL pipelines, custom internal management portals, and automated client reporting modules.',
      },
    ],
  },
  {
    id: 'ai-and-intelligent-automation',
    category: 'General & Services',
    question: 'How does ZestBotz approach AI and intelligent automation?',
    summary:
      'We pair deterministic, rules-based logic with modern AI capabilities where AI delivers measurable efficiency, protected by validation layers and human approval checkpoints.',
    answer: [
      'ZestBotz builds workflow-specific automation that pairs deterministic, rules-based logic with modern AI capabilities where AI delivers measurable efficiency. Straightforward operational tasks are built using reliable code-based automations, while large language models (LLMs) and OCR are reserved for unstructured information extraction, classification, and summarization.',
      'All consequential AI workflows include deterministic validation layers, exception handling, execution logging, and human-in-the-loop approval checkpoints to prevent errors and hallucinations.',
    ],
  },
  {
    id: 'healthcare-analytics-and-rcm',
    category: 'General & Services',
    question: 'What specific solutions do you provide for Healthcare Analytics and RCM?',
    summary:
      'Automated data handling, claims and denial tracking, interactive Power BI dashboards, EMR ingestion, and automated reconciliation.',
    answer: [
      'For revenue cycle management teams and healthcare organizations, ZestBotz automates manual data handling to give leadership visibility over cash flow and operational bottlenecks.',
      'Capabilities include automated tracking of charges, payments, adjustments, and denials; interactive Power BI RCM dashboards; authorized EMR export ingestion and validation; automated reconciliation; and proactive alerts for missing transaction files, abnormal volume swings, or data mismatches.',
    ],
  },

  // --- Category: Process, Technology & Engagements ---
  {
    id: 'delivery-process',
    category: 'Process, Technology & Engagements',
    question: 'What does the project delivery process look like?',
    summary:
      'Every engagement follows a structured 5-phase delivery model: Discover, Design, Build & Validate, Deploy & Hand Over, and Support & Improve.',
    answer: ['Every engagement follows a structured 5-phase delivery model:'],
    items: [
      {
        title: 'Discover',
        description:
          'Detailed review of the existing operational workflow, technical dependencies, data sources, constraints, and success criteria.',
      },
      {
        title: 'Design',
        description:
          'Defining the technical architecture, clear project scope, explicit acceptance criteria, and delivery milestones.',
      },
      {
        title: 'Build and Validate',
        description:
          'Developing the automation, pipeline, or dashboard with comprehensive testing against edge cases, failure states, and exceptions.',
      },
      {
        title: 'Deploy and Hand Over',
        description:
          'Releasing the solution into the target environment, complete with documentation, execution logs, and handover sessions.',
      },
      {
        title: 'Support and Improve',
        description:
          'Providing ongoing monitoring, maintenance, bug fixes, and continuous workflow enhancements as business needs evolve.',
      },
    ],
  },
  {
    id: 'engagement-models',
    category: 'Process, Technology & Engagements',
    question: 'What engagement models do you offer?',
    summary:
      'Flexible engagement structures including Fixed-Scope Projects, Proof of Concept (PoC), Ongoing Support & Maintenance, and Custom Software Development.',
    answer: [
      'Engagements are structured around client operational readiness and project scale:',
    ],
    items: [
      {
        title: 'Fixed-Scope Projects',
        description:
          'Well-defined automation workflows, ETL data pipelines, dashboards, or web tools with predetermined deliverables, timelines, and costs.',
      },
      {
        title: 'Proof of Concept (PoC)',
        description:
          'Tightly scoped, rapid implementations designed to evaluate technical feasibility and demonstrate measurable value before a larger rollout.',
      },
      {
        title: 'Ongoing Support & Maintenance',
        description:
          'Retained technical support covering system monitoring, pipeline orchestration, regular report refreshes, and adaptation to external system updates.',
      },
      {
        title: 'Custom Software Development',
        description:
          'Tailored multi-tenant tools, internal admin portals, and API integrations scoped around proprietary business processes.',
      },
    ],
  },
  {
    id: 'core-technologies',
    category: 'Process, Technology & Engagements',
    question: 'What core technologies and tools does ZestBotz utilize?',
    summary:
      'We select technology stacks to fit specific architectural requirements across programming, data engineering, analytics, web dev, and intelligent processing.',
    answer: [
      'Technology stacks are selected to fit specific architectural requirements rather than forcing a single platform:',
    ],
    items: [
      {
        title: 'Programming & Automation',
        description:
          'Python, SQL, Selenium, Scrapy, BeautifulSoup, Requests, PyAutoGUI, and pywinauto.',
      },
      {
        title: 'Data Engineering & Orchestration',
        description:
          'PySpark, Databricks, Azure Data Factory, dbt Core, Airbyte, Prefect, and Apache Airflow.',
      },
      {
        title: 'Analytics & Databases',
        description:
          'Power BI, PostgreSQL, SQL Server, and Microsoft Azure Cloud Storage.',
      },
      {
        title: 'Web & Application Development',
        description:
          'Django REST framework, React, Next.js, and Recharts.',
      },
      {
        title: 'Intelligent Processing',
        description:
          'Targeted LLM integrations, document OCR, and custom classification agents.',
      },
    ],
  },

  // --- Category: Security, Data Governance & Getting Started ---
  {
    id: 'data-security-compliance',
    category: 'Security, Data Governance & Getting Started',
    question: 'How does ZestBotz handle data security, privacy, and compliance?',
    summary:
      'We adhere to strict data governance with least-privilege access, secure secrets management, audit logging, and authorized data extraction.',
    answer: [
      'ZestBotz adheres to strict data governance standards across all engagements. Web extraction workflows are restricted strictly to publicly available or explicitly authorized sources while honoring terms of service and access limits.',
      'For internal business datasets and healthcare applications, architectures are designed with least-privilege access rules, secure secrets management, audit logging, and data-retention controls, ensuring sensitive business data remains protected.',
    ],
  },
  {
    id: 'how-to-get-started',
    category: 'Security, Data Governance & Getting Started',
    question: 'How do we get started on a project?',
    summary:
      'A short discovery conversation followed by a transparent proposal with architecture, deliverables, timeline, or a scoped PoC plan.',
    answer: [
      'Engagement begins with a short discovery conversation to examine the current manual bottleneck, data fragmentation, or software requirement.',
      'Following the call, ZestBotz delivers a clear proposal detailing the proposed architecture, defined deliverables, timeline, assumptions, and acceptance criteria—or a scoped Proof of Concept plan to demonstrate feasibility.',
    ],
  },
]
