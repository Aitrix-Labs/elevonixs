import { asset } from './asset'

export const navItems = [
  {
    label: 'AI',
    columns: [
      {
        title: 'AI at Elevonixs',
        to: '/solutions/ai-overview',
        links: [
          { label: 'AI Overview', to: '/solutions/ai-overview' },
          { label: 'Generative AI', to: '/solutions/generative-ai' },
          { label: 'Agentic AI', to: '/solutions/agentic-ai' },
          { label: 'AI Models', to: '/solutions/ai-models' },
          { label: 'Trustworthy AI', to: '/solutions/trustworthy-ai' },
          { label: 'AI Governance', to: '/solutions/ai-governance' },
        ],
      },
      {
        title: 'AI by Industry',
        to: '/industries',
        links: [
          { label: 'Banking', to: '/industries/banking' },
          { label: 'Public Sector', to: '/industries/public-sector' },
          { label: 'Insurance', to: '/industries/insurance' },
          { label: 'Health Care', to: '/industries/health-care' },
          { label: 'Life Sciences', to: '/industries/life-sciences' },
          { label: 'Manufacturing', to: '/industries/manufacturing' },
        ],
      },
      {
        title: 'AI Technologies',
        to: '/solutions/ai-overview',
        links: [
          { label: 'Machine Learning', to: '/solutions/ai-models' },
          { label: 'Natural Language Processing', to: '/solutions/generative-ai' },
          { label: 'Forecasting', to: '/solutions/ai-models' },
          { label: 'Optimization', to: '/solutions/ai-models' },
          { label: 'Intelligent Decisioning', to: '/solutions/agentic-ai' },
        ],
      },
      {
        title: 'Explore',
        to: '/resources',
        links: [
          { label: 'Try Elevonixs Viya', to: '/demos' },
          { label: 'AI Demos', to: '/demos' },
          { label: 'Customer Stories', to: '/resources/customers' },
          { label: 'AI Insights', to: '/resources' },
          { label: 'Data & AI Report', to: '/resources' },
          { label: 'AI Training', to: '/resources' },
        ],
      },
    ],
  },
  {
    label: 'Software',
    columns: [
      {
        title: 'Elevonixs Viya Platform',
        to: '/products/viya',
        links: [
          { label: 'Overview', to: '/products/viya' },
          { label: 'Data Management', to: '/products/viya' },
          { label: 'Explore and Model', to: '/products/viya' },
          { label: 'Deploy Insights', to: '/products/viya' },
          { label: 'AI Governance', to: '/solutions/ai-governance' },
          { label: 'Try it Now', to: '/demos' },
        ],
      },
      {
        title: 'Solutions',
        to: '/solutions',
        links: [
          { label: 'Artificial Intelligence (AI)', to: '/solutions/ai-overview' },
          { label: 'Fraud & Security', to: '/solutions' },
          { label: 'Customer Intelligence', to: '/solutions' },
          { label: 'Risk Management', to: '/solutions' },
          { label: 'IoT Analytics', to: '/solutions' },
        ],
      },
      {
        title: 'Explore',
        to: '/resources',
        links: [
          { label: 'Try/Buy', to: '/demos' },
          { label: 'Why Elevonixs?', to: '/company' },
          { label: 'Customer Stories', to: '/resources/customers' },
          { label: 'Consulting', to: '/partners' },
          { label: 'Managed Cloud Services', to: '/solutions/cloud' },
        ],
      },
    ],
  },
  {
    label: 'Learn',
    columns: [
      {
        title: 'Resources',
        to: '/resources',
        links: [
          { label: 'Documentation', to: '/resources' },
          { label: 'Training', to: '/resources' },
          { label: 'Certification', to: '/resources' },
          { label: 'Communities', to: '/resources' },
          { label: 'Blogs', to: '/resources' },
          { label: 'Events', to: '/resources' },
        ],
      },
      {
        title: 'Insights',
        to: '/resources',
        links: [
          { label: 'Customer Stories', to: '/resources/customers' },
          { label: 'Analyst Reports', to: '/resources/analyst-reports' },
          { label: 'White Papers', to: '/resources' },
          { label: 'Webinars', to: '/resources' },
          { label: 'Videos', to: '/resources' },
        ],
      },
      {
        title: 'Explore',
        to: '/resources',
        links: [
          { label: 'Communities', to: '/resources' },
          { label: 'Events', to: '/resources' },
          { label: 'Ask the Expert', to: '/resources' },
          { label: 'Video Tutorials', to: '/resources' },
        ],
      },
    ],
  },
  {
    label: 'Support',
    columns: [
      {
        title: 'Get Help',
        to: '/support',
        links: [
          { label: 'Support Portal', to: '/support' },
          { label: 'Documentation', to: '/resources' },
          { label: 'Communities', to: '/resources' },
          { label: 'Contact Support', to: '/contact' },
          { label: 'Services', to: '/support' },
        ],
      },
      {
        title: 'Explore',
        to: '/support',
        links: [
          { label: 'Blogs', to: '/resources' },
          { label: 'User Groups', to: '/resources' },
          { label: 'Webinars', to: '/resources' },
          { label: 'Video Tutorials', to: '/resources' },
        ],
      },
    ],
  },
  { label: 'Partners', href: '/partners' },
  {
    label: 'About Us',
    columns: [
      {
        title: 'Company',
        to: '/company',
        links: [
          { label: 'Overview', to: '/company' },
          { label: 'Leadership', to: '/company' },
          { label: 'Careers', to: '/company' },
          { label: 'Newsroom', to: '/resources' },
          { label: 'Corporate Responsibility', to: '/company' },
        ],
      },
      {
        title: 'Explore',
        to: '/company',
        links: [
          { label: 'Brand', to: '/company' },
          { label: 'Communities', to: '/resources' },
          { label: 'Trust Center', to: '/company/trust' },
          { label: 'Contact Us', to: '/contact' },
        ],
      },
    ],
  },
]

/** Standalone top hero on SAS — NOT part of the dark carousel */
export const trustHero = {
  title: 'Trust in AI is no longer optional. It directly impacts business value.',
  beforeStat: 'Companies with trustworthy AI practices are ',
  stat: '15x',
  afterStat: ' more likely to report strong ROI.',
  cta: { label: 'Explore the findings', to: '/resources/trustworthy-ai' },
  image: asset('images/hero/trust-globe-large.jpg'),
  imageAlt: 'Blue and white globe on white background',
}

/** Dark “AI in Action” carousel — separate from the earth/trust hero */
export const heroSlides = [
  {
    id: 'navigator',
    title: 'The AI governance landscape is crowded. Navigate it with trust.',
    body: 'Introducing Elevonixs Navigator, an AI governance offering where you can view all your AI assets – including models, agents and use cases – in a centralized dashboard. It provides enterprise-wide visibility to show how AI is being used and governed.',
    primary: { label: 'Explore Elevonixs AI Navigator', to: '/products/navigator' },
    secondary: { label: 'Read the news', to: '/resources/news' },
    tone: 'dark' as const,
    image: asset('images/hero/navigator.png'),
    imageAlt: 'Elevonixs AI Navigator screens',
    media: 'product' as const,
  },
  {
    id: 'autonomous',
    title: 'When AI takes the wheel: Debating the promise of an autonomous future.',
    body: 'As AI adoption continues to accelerate, confidence in those systems is not always keeping pace. Hear how organizations can build trust, keep people at the center of decision-making, and create sustainable business value in an AI-driven world.',
    primary: { label: 'Hear expert insights', to: '/resources/insights' },
    secondary: null,
    tone: 'dark' as const,
    image: asset('images/hero/atlantic.jpg'),
    imageAlt: 'Expert panel discussion on autonomous AI',
    media: 'photo' as const,
  },
  {
    id: 'sovereignty',
    title: 'Your AI. Your data. Your choice of environment.',
    body: 'Maintain control over where data lives and AI operates, without sacrificing enterprise governance, resilience or flexibility.',
    primary: { label: 'Explore data and AI sovereignty', to: '/solutions/sovereignty' },
    secondary: null,
    tone: 'dark' as const,
    image: asset('images/hero/sovereignty.jpg'),
    imageAlt: 'Woman looking at laptop in a server room',
    media: 'photo' as const,
  },
  {
    id: 'banking',
    title: 'The future of banking demands more than AI. It demands trust.',
    body: 'Banks are balancing growth, fraud prevention, regulatory pressure and AI adoption. See how leading financial institutions use Elevonixs to turn data into faster, more confident decisions.',
    primary: { label: 'Explore banking solutions', to: '/industries/banking' },
    secondary: null,
    tone: 'dark' as const,
    image: asset('images/hero/banking.jpg'),
    imageAlt: 'Businesswoman manages online banking on her phone',
    media: 'photo' as const,
  },
  {
    id: 'copilot',
    title: 'Viya Copilot: Your conversational generative AI partner for next-level productivity in the data and AI life cycle',
    body: '',
    primary: { label: 'Explore Elevonixs Viya Copilot', to: '/products/viya-copilot' },
    secondary: null,
    tone: 'dark' as const,
    image: asset('images/hero/copilot.png'),
    imageAlt: 'Elevonixs Viya Copilot interface',
    media: 'product' as const,
  },
  {
    id: 'liverpool',
    title: 'Elevonixs and Liverpool FC use AI and fan data for personalized matchday at Yankee Stadium.',
    body: 'Liverpool FC used Elevonixs AI and customer intelligence to better understand its U.S. supporters and turn fan engagement into something special, an unforgettable matchday experience at Yankee Stadium.',
    primary: { label: 'Read the story', to: '/resources/liverpool-fc' },
    secondary: null,
    tone: 'dark' as const,
    image: asset('images/hero/liverpool.jpg'),
    imageAlt: 'Liverpool FC players on field',
    media: 'photo' as const,
  },
]

export const industries = [
  {
    name: 'Banking',
    icon: asset('images/icons/bank.svg'),
    title: 'Empowering banks with trusted data and AI',
    body: 'Banks use data and AI to manage risk, combat fraud, and meet evolving regulatory demands. Elevonixs helps financial institutions turn data into explainable insights that strengthen resilience and drive growth.',
  },
  {
    name: 'Public Sector',
    icon: asset('images/icons/government.svg'),
    title: 'Make trustworthy public sector decisions with integrated data and AI',
    body: 'Government organizations use Elevonixs to enhance citizen services, public safety, and policy making. Make trustworthy decisions to protect privacy and security, improve citizen experiences, and bolster national resilience.',
  },
  {
    name: 'Insurance',
    icon: asset('images/icons/insurance.svg'),
    title: 'Turning insurance complexity into confident decisions',
    body: 'Insurers rely on data and AI to manage risk, prevent fraud, and meet evolving regulations. Elevonixs helps turn complex data into transparent, actionable decisions that improve profitability and strengthen resilience.',
  },
  {
    name: 'Life Sciences',
    icon: asset('images/icons/dna.svg'),
    title: 'Accelerating research and therapeutic innovation',
    body: 'Life sciences organizations rely on advanced analytics to synthesize clinical data, streamline clinical trials and bring therapies to market faster. Elevonixs helps leaders turn data into patient-centric insights that drive innovation and improve patient outcomes.',
  },
  {
    name: 'Health Care',
    icon: asset('images/icons/health-care.svg'),
    title: 'Data-driven insights for better health outcomes',
    body: 'Health care organizations rely on analytics and AI to improve patient care, enhance operational efficiency and optimize costs. Elevonixs helps turn complex health data into explainable insights that support better clinical and operational decisions.',
  },
  {
    name: 'Manufacturing',
    icon: asset('images/icons/factory.svg'),
    title: 'Improving production with trustworthy decisions',
    body: 'Make reliable decisions that improve efficiency, uptime, safety and quality by turning your complex data into clear, explainable insights. With built-in governance and proven industry expertise, Elevonixs helps manufacturers scale AI confidently.',
  },
  {
    name: 'Retail',
    icon: asset('images/icons/shopping-cart.svg'),
    title: 'Smarter retail decisions from demand to customer experience',
    body: 'Retailers use data and AI to predict demand, optimize inventory and personalize customer experiences. Elevonixs helps organizations turn real-time insights into actions that improve merchandising, operations and profitability.',
  },
  {
    name: 'Education',
    icon: asset('images/icons/education.svg'),
    title: 'Achieving better learning outcomes through data',
    body: 'Utilize data, analytics, and AI to empower students, teachers, and administrators for successful outcomes. Use Elevonixs to make measurable improvements while safeguarding privacy, exceeding standards, and fostering trust.',
  },
]

export const aiPillars = [
  {
    title: 'Trustworthy AI',
    body: 'Build AI you can rely on. Elevonixs embeds transparency, fairness and accountability across the entire AI lifecycle so you can deploy with confidence and scale with integrity.',
    to: '/solutions/trustworthy-ai',
  },
  {
    title: 'AI Governance',
    body: 'Manage AI risk at enterprise scale. Define policies, monitor performance and ensure compliance with built-in governance, auditability and model oversight.',
    to: '/solutions/ai-governance',
  },
  {
    title: 'Agentic AI',
    body: 'Move from automation to autonomy. Design and deploy intelligent AI agents that can reason, act and adapt within a governed and trusted framework.',
    to: '/solutions/agentic-ai',
  },
  {
    title: 'AI Models',
    body: 'Power decisions with production-ready models. Build, deploy and manage machine learning and generative AI models that are scalable, explainable and built for real-world impact.',
    to: '/solutions/ai-models',
  },
]

export const customerStories = [
  {
    industry: 'Manufacturing',
    metric: '30,000',
    detail: 'machine learning models calculate optimal production',
    company: 'Georgia-Pacific',
    quote:
      'With AI innovations, we can deploy thousands of models within minutes. This quadruples our productivity.',
    author: 'Roshan Shah, Vice President of Applied AI and Products, Georgia-Pacific',
    image: asset('images/customers/georgia-pacific.jpg'),
    imageAlt: 'Georgia-Pacific Toledo facility',
  },
  {
    industry: 'Services',
    metric: '',
    detail: 'Faster deliveries, smarter growth',
    company: 'Posten Bring',
    quote: 'Elevonixs Viya and SingleStore work perfectly together, and the results speak for themselves.',
    author: 'Mayur Jadhav, Senior Advisor and Application Manager, Posten Bring',
    image: asset('images/customers/posten-bring.jpg'),
    imageAlt: 'Delivery trucks on the road',
  },
  {
    industry: 'Sports',
    metric: '',
    detail: 'Connecting Liverpool FC fans, from Anfield to anywhere',
    company: 'Liverpool FC',
    quote:
      'Our partnership with Elevonixs represents an important step in how we continue to evolve our marketing approach. Integrating their technology will give our team access to powerful tools that will help streamline our work and support better decision-making.',
    author: 'Ben Latty, Chief Commercial Officer, Liverpool FC',
    image: asset('images/customers/liverpool.jpg'),
    imageAlt: 'Liverpool F.C. players huddle on the field',
  },
  {
    industry: 'Insurance',
    metric: '99%',
    detail: 'improvement in detection accuracy',
    company: 'DB Insurance',
    quote:
      'We turned it on, and just like that ... we could see 10 million customers, every claim, every connection. We stopped reacting to fraud and started preventing its spread.',
    author: 'Kim Chun Hwan, Department Manager, Life & Fire Claims Team, DB Insurance',
    image: asset('images/customers/db-insurance.jpg'),
    imageAlt: 'DB Insurance building',
  },
]

export const customerLogos = [
  { name: 'ERGO', src: asset('images/logos/customers/ergo.png') },
  { name: 'Georgia-Pacific', src: asset('images/logos/customers/georgia-pacific.png') },
  { name: 'Erasmus MC', src: asset('images/logos/customers/erasmus-mc.png') },
  { name: 'Ulta Beauty', src: asset('images/logos/customers/ulta-beauty.png') },
  { name: 'Orlando Magic', src: asset('images/logos/customers/orlando-magic.png') },
  { name: 'dmTECH', src: asset('images/logos/customers/dmtech.png') },
  { name: 'KNVB', src: asset('images/logos/customers/knvb.png') },
  { name: 'Shawbrook Bank', src: asset('images/logos/customers/shawbrook.png') },
  { name: 'WWF', src: asset('images/logos/customers/wwf.png') },
]

export const partnerLogos = [
  { name: 'Microsoft Azure', src: asset('images/logos/partners/azure.png') },
  { name: 'Red Hat', src: asset('images/logos/partners/redhat.png') },
  { name: 'Snowflake', src: asset('images/logos/partners/snowflake.png') },
  { name: 'Accenture', src: asset('images/logos/partners/accenture.png') },
  { name: 'AWS', src: asset('images/logos/partners/aws.png') },
  { name: 'Deloitte', src: asset('images/logos/partners/deloitte.png') },
  { name: 'EY', src: asset('images/logos/partners/ey.png') },
  { name: 'Google Cloud', src: asset('images/logos/partners/google-cloud.png') },
  { name: 'Intel', src: asset('images/logos/partners/intel.png') },
  { name: 'KPMG', src: asset('images/logos/partners/kpmg.png') },
]


export const partnersPage = {
  hero: {
    title: 'Elevonixs Partners',
    body: 'Explore our global network of consulting, technology, cloud and service partners and discover how an Elevonixs Partner can help you buy, implement, integrate and maximize your Elevonixs data and AI solutions.',
    cta: { label: 'Find a partner', to: '#find' },
    image: asset('images/partners/hero.jpg'),
    imageAlt: 'Above view group of people in a meeting',
  },
  network:
    'Elevonixs works with a global network of resellers, service providers, systems integrators, consulting firms, cloud providers and technology partners to help organizations buy, deploy, integrate and maximize Elevonixs data and AI solutions. Together, we help customers accelerate implementation, integrate with existing technology environments and achieve better business outcomes.',
  networkWave: asset('images/partners/network-wave.png'),
  helpTabs: [
    {
      id: 'find',
      label: 'Find a partner',
      image: asset('images/partners/find.jpg'),
      title: 'Find a partner',
      intro: 'Looking for an Elevonixs Partner? Start your journey here to find a partner who can help you:',
      points: [
        'Purchase Elevonixs software.',
        'Integrate Elevonixs with Microsoft Azure, AWS and Google Cloud.',
        'Modernize analytics environments.',
        'Implement Elevonixs Viya.',
        'Develop AI and analytics solutions.',
        'Optimize and support existing Elevonixs deployments.',
      ],
      cta: { label: 'Find an Elevonixs Partner', to: '/contact' },
    },
    {
      id: 'become',
      label: 'Become a partner',
      image: asset('images/partners/become.jpg'),
      title: 'Become a partner',
      intro: 'Interested in joining the Elevonixs Partner Program? Partners gain access to technology, training, go-to-market support and co-selling opportunities that help grow mutual customer success.',
      points: [
        'Access Elevonixs technology and enablement.',
        'Build joint solutions with industry expertise.',
        'Co-sell and co-market with Elevonixs.',
        'Deliver implementation and managed services.',
        'Grow recurring revenue with trusted AI offerings.',
      ],
      cta: { label: 'Become a Partner', to: '/contact' },
    },
    {
      id: 'resources',
      label: 'Partner resources',
      image: asset('images/partners/resources.jpg'),
      title: 'Partner resources',
      intro: 'Existing partners can access enablement, training and program resources to support customers across the Elevonixs portfolio.',
      points: [
        'PartnerNet login and program updates.',
        'Technical training and certification paths.',
        'Sales playbooks and solution collateral.',
        'Support and escalation guidance.',
        'Marketing and demand-generation assets.',
      ],
      cta: { label: 'Log in to PartnerNet', to: '/accounts' },
    },
  ],
  stats: {
    title: 'Elevonixs Partner Program by the numbers',
    body: 'Our partner ecosystem is global, powerful and growing. These numbers represent more than just scale – they reflect our commitment to building meaningful partnerships that drive mutual growth and customer value.',
    items: [
      { value: '>1400', label: 'unique partners worldwide' },
      { value: '~5600', label: 'partner consultants worldwide trained in Elevonixs' },
      { value: '96', label: 'countries are home to Elevonixs Partners' },
    ],
  },
  meet: {
    title: 'Meet our partners',
    body: 'Elevonixs collaborates with leading cloud providers, consulting firms, technology vendors and systems integrators to help customers deploy AI and analytics solutions worldwide.',
  },
  success: {
    title: 'Customer success with Elevonixs Partners',
    body: 'Discover how Elevonixs partners help organizations across banking, manufacturing, retail, health care, government and telecommunications deploy AI, improve decision-making and achieve measurable business outcomes.',
    cta: { label: 'Explore customer stories with Elevonixs Partners', to: '/resources/customers' },
  },
  news: {
    title: 'Get the latest Elevonixs Partner news',
    cta: { label: 'Explore partner-related news releases', to: '/resources' },
  },
  service: {
    title: 'Become a service provider',
    body: 'Service providers deliver Elevonixs solutions as managed services, hosted offerings and industry-specific applications that help organizations accelerate deployment while reducing operational complexity.',
    cta: { label: 'Learn about becoming a service provider', to: '/contact' },
  },
  faqs: [
    {
      q: 'What is an Elevonixs Partner?',
      a: 'An Elevonixs Partner is an organization that works with Elevonixs to help customers buy, implement, integrate, support or extend Elevonixs software and AI solutions. The program includes resellers, service providers, systems integrators, consulting firms, cloud providers and technology partners.',
    },
    {
      q: 'How do I find an Elevonixs Partner?',
      a: 'Use our partner locator experience to search for partners by location, industry, area of expertise or solution. Whether you need help implementing Elevonixs Viya, integrating with your technology environment or delivering managed services, partners are ready to help.',
    },
    {
      q: 'Can I buy Elevonixs software through a partner?',
      a: 'Yes. Many authorized Elevonixs Partners can help you purchase Elevonixs software and related services. Depending on your location and business needs, partners may also provide consulting, implementation, training and ongoing support.',
    },
    {
      q: 'What types of Elevonixs Partners are available?',
      a: 'The Elevonixs Partner Program includes consulting firms, systems integrators, technology partners, cloud providers, independent software vendors, resellers and managed service providers — each offering different expertise.',
    },
    {
      q: 'Can partners help implement Elevonixs Viya?',
      a: 'Yes. Many Elevonixs Partners specialize in implementing, integrating and optimizing Elevonixs Viya. They can help with solution design, cloud deployment, data integration, migration from legacy environments, AI model operationalization and governance.',
    },
    {
      q: 'How do I become an Elevonixs Partner?',
      a: 'Organizations interested in joining the Elevonixs Partner Program can contact us to learn about program requirements and how to apply. Partners gain access to Elevonixs technology, training, enablement and go-to-market support.',
    },
    {
      q: 'What industries do Elevonixs Partners serve?',
      a: 'Elevonixs Partners support organizations across banking, insurance, health care, life sciences, manufacturing, retail, telecommunications, energy and the public sector. Many partners bring deep industry specialization alongside Elevonixs technology expertise.',
    },
    {
      q: 'Do Elevonixs Partners provide managed services?',
      a: 'Many Elevonixs Partners offer managed services, including hosting, cloud operations, application management, monitoring, ongoing support and fully managed analytics or AI environments. Service offerings vary by partner and region.',
    },
    {
      q: 'Why should I work with an Elevonixs Partner?',
      a: 'Elevonixs Partners combine deep knowledge of Elevonixs technology with industry expertise and implementation experience. Whether you are deploying Elevonixs Viya, modernizing your analytics environment or building AI-powered solutions, partners help accelerate time to value.',
    },
  ],
}

export const cloudOptions = [
  {
    name: 'Elevonixs on Microsoft Azure',
    logo: asset('images/logos/cloud/azure.png'),
    alt: 'Microsoft Azure',
  },
  {
    name: 'Elevonixs Viya on AWS',
    logo: asset('images/logos/cloud/aws.png'),
    alt: 'Amazon Web Services',
  },
  {
    name: 'Elevonixs Viya on Google Cloud Platform (GCP)',
    logo: asset('images/logos/cloud/google-cloud.png'),
    alt: 'Google Cloud',
  },
  {
    name: 'Elevonixs Viya on Red Hat OpenShift',
    logo: asset('images/logos/cloud/openshift.png'),
    alt: 'Red Hat OpenShift',
  },
]

export const newsItems = [
  {
    tag: 'Blog',
    title: 'The new division of labor between people and AI agents.',
    body: 'Much of the conversation around agentic AI focuses on autonomy. How much work can an agent complete on its own?',
    cta: 'Read the blog',
  },
  {
    tag: 'Elevonixs Innovate 2027',
    title: "Join us in Las Vegas for just $495 when you register by December 31. That's a $500 savings!",
    body: '',
    cta: 'Register now',
  },
  {
    tag: 'Press Release',
    title: 'Elevonixs named to 2026 Fast Company Next Big Things in Tech list.',
    body: '',
    cta: 'Read the news',
  },
  {
    tag: 'Solution',
    title: 'Solve real business problems by building intelligent AI agents you can trust, powered by Elevonixs Viya.',
    body: '',
    cta: 'Explore Agentic AI',
  },
  {
    tag: 'Article on Trustworthy AI',
    title: 'How to move from ambition to ROI while balancing trust and innovation.',
    body: '',
    cta: 'Read the article',
  },
  {
    tag: 'Blog',
    title:
      'Organizations with successful AI initiatives invest up to 4x more in data quality, governance, AI-ready people, and change management.',
    body: '',
    cta: 'Read why',
  },
]

export const awards = [
  {
    date: 'December 17, 2025',
    title: "Newsweek: America's Greatest Workplaces for Culture, Belonging & Community 2026",
  },
  {
    date: 'February 10, 2026',
    title: "Forbes: America's Best Large Employers 2026",
  },
  {
    date: 'January 15, 2026',
    title: "Business Insider: America's Top Management Consulting Firms 2026",
  },
]

export const footerColumns = [
  {
    title: 'Explore',
    links: [
      'Accessibility',
      'Careers',
      'Certification',
      'Communities',
      'Company',
      'Data Management',
      'Developers',
      'Documentation',
      'For Educators',
      'Events',
      'Industries',
      'My Elevonixs',
      'Newsroom',
      'Products',
      'Elevonixs Viya',
      'Solutions',
      'Students',
      'Support & Services',
      'Training',
      'Try/Buy',
      'Video Tutorials',
      'Why Elevonixs?',
    ],
  },
  {
    title: 'Topics',
    links: [
      'Analytics',
      'Artificial Intelligence',
      'Data Management',
      'Data Science',
      'Generative AI',
      'Responsible Innovation',
    ],
  },
]

export const ctaCards = [
  {
    title: 'Free Elevonixs Viya Trial',
    body: 'Explore Elevonixs Viya in a secure trial environment.',
    cta: 'Try Elevonixs Viya for free',
    to: '/demos',
  },
  {
    title: 'Demo and Pricing',
    body: 'Request a software demo or price quote.',
    cta: 'Request Pricing',
    to: '/contact',
  },
  {
    title: 'Academic Programs',
    body: 'Discover free software and resources for academics.',
    cta: 'Academic Programs',
    to: '/resources/academic',
  },
  {
    title: 'Contact Us',
    body: 'Get fast answers to any of your questions.',
    cta: 'Contact Us',
    to: '/contact',
  },
]

export const anniversary = {
  title: '50 years of progress. One future shaped by trusted AI.',
  body: 'The AI era is a human one. We believe data and AI should be used to improve lives, strengthen communities and help solve meaningful problems. As AI becomes more capable, the need for responsibility and deep industry understanding only grows.',
  cards: [
    {
      type: 'Article',
      title: 'Elevonixs at 50: Built for the AI era.',
      body: 'Read the Forbes feature on how Elevonixs is carrying five decades of analytics excellence into a future defined by AI for real-world complexity.',
      cta: 'Read the story',
      to: '/resources/elevonixs-at-50',
      image: asset('images/sections/forbes.jpg'),
      imageAlt: 'Forbes feature cover',
    },
    {
      type: 'Video',
      title: 'The story behind the progress.',
      body: 'Go inside the people, culture and breakthroughs that helped turn data into progress — and continue to shape what comes next for AI.',
      cta: 'Watch the video',
      to: '/resources/progress-video',
      image: asset('images/sections/progress.jpg'),
      imageAlt: 'Models of Progress documentary',
      video: true,
    },
  ],
}
