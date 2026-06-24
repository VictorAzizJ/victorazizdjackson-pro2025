/**
 * Centralized project data for the Project Portal and detail pages.
 * Loaded via script tag; consumed by project-detail.html and index.html portal.
 */

const projectCategories = [
  {
    slug: "civic-intelligence",
    title: "Civic Intelligence",
    tagline: "Tools that turn infrastructure data into action.",
    icon: "bi-building-gear",
    accentColor: "#4A90D9",
    featuredProject: "plothole",
    description:
      "Civic intelligence for contractors, cities, and communities.",
    projects: ["plothole"],
  },
  {
    slug: "community-systems",
    title: "Community Systems",
    tagline: "Dashboards and workflows for organizations doing real work.",
    icon: "bi-people",
    accentColor: "#5CB88A",
    featuredProject: "campfire",
    description:
      "Custom operations software for nonprofits and community teams.",
    projects: ["campfire"],
  },
  {
    slug: "archives-memory",
    title: "Archives & Memory",
    tagline:
      "Digital spaces for cultural record, community media, oral history, and the people's memory — designed to be searched, felt, preserved, and passed on.",
    icon: "bi-archive",
    accentColor: "#C49B6A",
    featuredProject: "thread",
    description:
      "Archive strategy, design systems, and full-stack cultural platforms.",
    projects: ["ourchive", "thread", "peoples-media-record"],
  },
  {
    slug: "emotional-interfaces-creative",
    title: "Emotional Interfaces & Creative Systems",
    tagline:
      "Products and experiences where emotion, AI, motion, and storytelling meet.",
    icon: "bi-stars",
    accentColor: "#9B6DD7",
    featuredProject: "channel-orange-digital-exhibition",
    description:
      "Warm human connection tools, reflective AI, and experimental digital exhibitions.",
    projects: [
      "luvbomba",
      "mediator",
      "channel-orange-digital-exhibition",
      "black-boys-weather",
    ],
  },
  {
    slug: "ai-systems-privacy",
    title: "AI Systems & Privacy-First Architecture",
    tagline:
      "AI systems designed around privacy, usefulness, and trust — from RAG workflows and browser-based memory to multilingual translation research and zero-retention architecture.",
    icon: "bi-shield-lock",
    accentColor: "#5B7FA6",
    featuredProject: "multilingual-ai-document-assistant",
    description:
      "Privacy-first AI architecture, RAG infrastructure, and compliance-aware research.",
    projects: ["multilingual-ai-document-assistant"],
  },
];

const projects = {
  plothole: {
    title: "Plothole",
    category: "civic-intelligence",
    tagline:
      "Civic infrastructure intelligence for contractors, cities, and communities.",
    date: "2024 – Present",
    status: "Piloting · In Development",
    piloting: true,
    client: null,
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      "assets/img/portfolio/portfolio-1.webp",
      "assets/img/portfolio/portfolio-7.webp",
      "assets/img/portfolio/portfolio-10.webp",
    ],
    overview:
      "Plothole is a civic intelligence platform that turns scattered public infrastructure data—311 reports, weather patterns, bid listings, grant signals, and maintenance records—into actionable maps, forecasts, and opportunity insights. Built for contractors, city staff, and community advocates who need a clearer picture of what is breaking, where investment is heading, and who can respond.",
    problem:
      "Infrastructure data lives in silos: 311 portals, PDF bid documents, weather APIs, and grant databases rarely talk to each other. Contractors miss opportunities, cities duplicate effort, and residents report the same potholes without seeing resolution patterns. There is no unified layer that connects civic signals to the people who can act on them.",
    solution:
      "Plothole aggregates and normalizes civic infrastructure signals into a single intelligence layer. Heat maps surface recurring issue clusters, contractor dashboards highlight bid and grant opportunities aligned to geography, and predictive views help stakeholders anticipate where maintenance demand will spike. The platform is designed to serve both public agencies and private contractors with role-appropriate views of the same underlying data.",
    role:
      "Founder and lead engineer. I defined the product thesis, designed the data model for multi-source civic ingestion, and am building the full-stack platform—from API integrations and geospatial processing to the map-first frontend experience.",
    techStack: [
      "Node.js",
      "React",
      "PostgreSQL",
      "PostGIS",
      "REST APIs",
      "Mapbox",
      "Python",
      "AWS",
    ],
    features: [
      {
        icon: "bi-geo-alt",
        title: "Issue Reporting",
        description:
          "Capture and geolocate infrastructure issues with community-submitted reports tied to resolution tracking.",
      },
      {
        icon: "bi-briefcase",
        title: "Contractor Opportunity Intelligence",
        description:
          "Surface relevant bids, grants, and RFP signals mapped to the contractor's service area and specialty.",
      },
      {
        icon: "bi-thermometer-half",
        title: "Infrastructure Heat Maps",
        description:
          "Visualize recurring failure patterns across neighborhoods to prioritize maintenance and investment.",
      },
      {
        icon: "bi-cash-stack",
        title: "Bid & Grant Signals",
        description:
          "Aggregate public procurement and funding announcements into a searchable, location-aware feed.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Predictive Civic Insights",
        description:
          "Forecast infrastructure stress using weather, seasonality, and historical repair data.",
      },
      {
        icon: "bi-grid-3x3-gap",
        title: "Stakeholder Dashboards",
        description:
          "Role-based views for city staff, contractors, and community organizers on shared civic data.",
      },
    ],
    outcomes:
      "Plothole is in active development with a validated thesis around contractor opportunity intelligence and civic heat mapping. Early prototypes demonstrate the ability to cross-reference 311-style issue density with seasonal weather data and public bid activity—giving stakeholders a view of infrastructure that did not exist in any single public tool.",
    improvements:
      "Next I would deepen real-time ingestion from municipal open-data feeds, add authenticated contractor profiles with alert subscriptions, and pilot with a single Philadelphia neighborhood to validate predictive maintenance forecasts against actual repair timelines.",
  },

  campfire: {
    title: "Campfire",
    displayTitle: "Tree House Books · Campfire",
    category: "community-systems",
    tagline:
      "A universal operations dashboard replacing costly SaaS for Tree House Books.",
    date: "June 2024 – Present",
    status: "Live",
    client: "Tree House Books",
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      "assets/img/portfolio/portfolio-2.webp",
      "assets/img/portfolio/portfolio-5.webp",
      "assets/img/portfolio/portfolio-6.webp",
    ],
    overview:
      "Campfire is a custom internal dashboard built for Tree House Books, a Philadelphia nonprofit that distributes free books and runs youth literacy programs. It replaces a patchwork of third-party subscriptions, disconnected spreadsheets, and manual data entry with a single Node.js and React application tailored to how staff and volunteers actually work day to day.",
    problem:
      "Tree House Books relied on expensive SaaS tools and fragmented workflows to manage volunteers, track book distribution, monitor attendance, and audit program data. Staff spent hours reconciling exports across systems, and there was no unified view of operations accessible to different role levels across the organization.",
    solution:
      "I designed and built Campfire as an in-house universal dashboard using Node.js, MongoDB, and React. The platform centralizes volunteer management, real-time analytics, data auditing, and book checkout tracking into role-based views—giving leadership, staff, and volunteers the specific tools they need without paying for features they do not use.",
    role:
      "Instructional Software Engineer and sole builder. I scoped requirements with organizational leadership, eliminated third-party dependencies, built the full-stack application, and provide ongoing mentorship in digital literacy for the teens who use and contribute to the platform.",
    techStack: [
      "Node.js",
      "React",
      "MongoDB",
      "Express",
      "REST APIs",
      "CSV Export",
      "Role-Based Access Control",
    ],
    features: [
      {
        icon: "bi-speedometer2",
        title: "Volunteer & Staff Dashboards",
        description:
          "Centralized home screens for leadership, staff, and volunteers with role-appropriate metrics and actions.",
      },
      {
        icon: "bi-calendar-check",
        title: "Attendance Tracking",
        description:
          "Log and review program attendance across sessions with filterable history and summary views.",
      },
      {
        icon: "bi-person-lines-fill",
        title: "Guest & Member Records",
        description:
          "Maintain searchable profiles for participants, volunteers, and community members in one system.",
      },
      {
        icon: "bi-book",
        title: "Book Checkout Metrics",
        description:
          "Track book distribution and checkout patterns to inform inventory and outreach decisions.",
      },
      {
        icon: "bi-file-earmark-spreadsheet",
        title: "CSV Exports",
        description:
          "Export filtered datasets for grant reporting, board updates, and external audits.",
      },
      {
        icon: "bi-shield-lock",
        title: "Role-Based Views",
        description:
          "Permission-scoped interfaces so each user sees only the data and tools relevant to their role.",
      },
    ],
    outcomes:
      "Campfire eliminated reliance on third-party services, saving the organization approximately $5,000 annually in software fees. Internal tools now provide real-time analytics and data auditing across all staff and volunteer levels, and I have mentored over 30 teens in digital literacy, coding, and professional development through the platform's educational context.",
    improvements:
      "I would add automated grant-reporting templates, mobile-first checkout flows for field volunteers, and deeper integration with the organization's existing CRM to further reduce manual data entry.",
  },

  ourchive: {
    title: "OURCHIVE",
    category: "archives-memory",
    tagline:
      "Philadelphia's first digital open archive for art, activism, and cultural memory.",
    date: "April 2019 – May 2022",
    status: "Completed",
    client: "OURCHIVE (Co-Founder)",
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      "assets/img/portfolio/portfolio-portrait-1.webp",
      "assets/img/portfolio/portfolio-portrait-2.webp",
      "assets/img/portfolio/portfolio-portrait-4.webp",
    ],
    overview:
      "OURCHIVE is a digital archive platform built to preserve, search, and activate Philadelphia's art and activism history. As co-founder and lead engineer, I led a team of five in building Philadelphia's first cloud-based open archive—designed to make cultural memory beautiful, searchable, and accessible to the communities that created it.",
    problem:
      "Grassroots art and activism in Philadelphia was scattered across physical storage, personal hard drives, and inaccessible institutional collections. Communities lacked a platform to digitize, translate, and present their own cultural record—especially work in non-traditional languages, dialects, and oral histories that standard archive tools could not accommodate.",
    solution:
      "We built a full-stack archive platform on AWS and MongoDB with a React frontend designed for browsing, searching, and submitting media. A custom translation middleware—built with Node, Python, and MongoDB—made archived audio available in 200 languages and capable of learning non-traditional words and slang. The system was architected for long-term scalability as both a public-facing collection and an internal digitization pipeline.",
    role:
      "Lead Software Engineer and Co-Founder. I led a team of five on technical implementation, designed the cloud storage architecture, built the translation middleware, and conducted quantitative and qualitative research on youth engagement to inform platform and outreach strategy.",
    techStack: [
      "Node.js",
      "React",
      "MongoDB",
      "Python",
      "AWS",
      "REST APIs",
      "Translation Middleware",
      "Metadata Strategy",
    ],
    features: [
      {
        icon: "bi-collection",
        title: "Archive Browsing",
        description:
          "Curated collection views that present art and activism work with rich media cards and contextual metadata.",
      },
      {
        icon: "bi-search",
        title: "Searchable Collections",
        description:
          "Full-text and metadata-driven search across digitized works, tags, and contributor records.",
      },
      {
        icon: "bi-translate",
        title: "Multilingual Translation",
        description:
          "Audio translation pipeline supporting 200 languages with adaptive learning for slang and dialect.",
      },
      {
        icon: "bi-cloud-upload",
        title: "Submission Flows",
        description:
          "Community-facing intake for digitizing and submitting physical works into the cloud archive.",
      },
      {
        icon: "bi-tags",
        title: "Metadata Strategy",
        description:
          "Structured tagging and cataloging designed for grassroots collections outside traditional archive norms.",
      },
      {
        icon: "bi-diagram-3",
        title: "Full-Stack Archive Roadmap",
        description:
          "Scalable architecture from digitization pipeline through public discovery and community activation.",
      },
    ],
    outcomes:
      "OURCHIVE became Philadelphia's first digital open archive for art and activism, digitizing physical works into a cloud-based system and making translated audio accessible across 200 languages. The platform generated valuable insights on youth engagement and digital campaigning that informed program enhancement and community outreach strategy.",
    improvements:
      "With more time I would expand federated search across partner institutions, add IIIF-compliant image delivery for researchers, and build a public API so other community archives could interoperate with OURCHIVE collections.",
  },

  thread: {
    title: "Thread",
    category: "archives-memory",
    subcategory: "Client Archive Product",
    tagline:
      "A living archive platform for community memory, media, and cultural storytelling.",
    date: "2025 – Present",
    status: "Client Project / Build in Progress",
    client: "Thread",
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      {
        src: "assets/img/portfolio/portfolio-portrait-1.webp",
        alt: "Thread archive interface concept showing collection cards and community media records",
      },
      {
        src: "assets/img/portfolio/portfolio-portrait-2.webp",
        alt: "Thread concept — media cards for audio, video, images, and contributor context",
      },
      {
        src: "assets/img/portfolio/portfolio-portrait-4.webp",
        alt: "Thread concept — story-driven archive browsing with search and metadata",
      },
    ],
    overview:
      "Thread is a client archive and cultural memory project focused on making community stories easier to collect, organize, search, and experience. I'm helping the organization connect archival thinking with modern product design so media, oral histories, writing, images, and records do not just sit in folders — they become usable, navigable, and alive.",
    problem:
      "Community memory is often scattered across hard drives, social media, Google Drive folders, physical archives, and individual people. Without a clear system, important cultural records become hard to access, hard to preserve, and hard to pass on to the next generation.",
    solution:
      "I'm building Thread as a digital archive experience with clean collection pages, media cards, contributor context, metadata, search, and storytelling-focused project pages. The goal is an archive that feels less like a database and more like a living cultural record — warm, intentional, and community-rooted.",
    role:
      "Archive experience designer, product strategist, and technical lead. Responsible for archive structure, user experience, content model, and technical direction on behalf of the client.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "S3 / Supabase Storage",
      "Search Indexing",
      "AI-Assisted Transcription",
    ],
    features: [
      {
        icon: "bi-collection",
        title: "Collection-Based Browsing",
        description:
          "Navigate archives by curated collections that group related media, stories, and cultural records.",
      },
      {
        icon: "bi-card-image",
        title: "Media Cards",
        description:
          "Rich cards for audio, video, images, text, and documents with contributor context and metadata.",
      },
      {
        icon: "bi-person-badge",
        title: "Contributor Profiles",
        description:
          "Profiles that connect archived work to the people and communities who created it.",
      },
      {
        icon: "bi-search",
        title: "Search & Filtering",
        description:
          "Full-text and metadata-driven discovery across collections, tags, and media types.",
      },
      {
        icon: "bi-tags",
        title: "Metadata Fields",
        description:
          "Structured cataloging designed for grassroots collections outside traditional archive norms.",
      },
      {
        icon: "bi-book",
        title: "Story-Driven Pages",
        description:
          "Archive pages built for narrative browsing — not just storage, but cultural storytelling.",
      },
      {
        icon: "bi-cloud-upload",
        title: "Submission Flow",
        description:
          "Community intake for uploading, describing, and submitting records into the archive.",
      },
      {
        icon: "bi-speedometer2",
        title: "Admin Dashboard",
        description:
          "Tools for managing records, reviewing submissions, and maintaining collection integrity.",
      },
      {
        icon: "bi-universal-access",
        title: "Accessible Browsing",
        description:
          "Archive navigation designed with accessibility and long-term preservation in mind.",
      },
      {
        icon: "bi-shield-check",
        title: "Preservation Strategy",
        description:
          "Architecture thinking for durable storage, media optimization, and cultural continuity.",
      },
    ],
    outcomes: [
      "Helped the client define a framework for preserving community memory as a usable product, not just a folder structure.",
      "Designed a product direction for archive-based storytelling that bridges cultural work and technical infrastructure.",
      "Delivered a reusable model for collection pages, search, and contributor context tailored to the client's needs.",
      "Established a bridge between grassroots cultural work and scalable digital infrastructure for the organization.",
    ],
    nextSteps: [
      "Build the first collection flow with media cards and contributor profiles.",
      "Add searchable metadata and filtering across collection types.",
      "Implement upload and intake system for community submissions.",
      "Explore AI-assisted transcription, translation, and tagging for oral history records.",
    ],
    improvements: null,
  },

  "peoples-media-record": {
    title: "The People's Media Record",
    category: "archives-memory",
    subcategory: "Client Web & Archive Design",
    tagline:
      "A website and archive redesign helping community media become easier to browse, understand, and support.",
    date: "2025 – Present",
    status: "Client Project / Redesign in Progress",
    client: "The People's Media Record",
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      {
        src: "assets/img/portfolio/portfolio-2.webp",
        alt: "The People's Media Record website redesign concept with archive and media sections",
      },
      {
        src: "assets/img/portfolio/portfolio-5.webp",
        alt: "The People's Media Record concept — homepage layout with improved navigation and typography",
      },
      {
        src: "assets/img/portfolio/portfolio-6.webp",
        alt: "The People's Media Record concept — archive browsing and collection presentation",
      },
    ],
    overview:
      "The People's Media Record project focuses on redesigning a public-facing website and archive experience for a community media organization. The work includes visual design, archive consulting, homepage structure, content presentation, navigation improvements, and a long-term plan for a stronger full-stack archive experience that positions the collection as part of the organization's public story.",
    problem:
      "The organization had valuable media and archival material, but the website and archive experience needed stronger design, clearer navigation, better readability, and a more cohesive visual system. The archive needed to feel easier to browse and more connected to the organization's mission — not buried as an afterthought.",
    solution:
      "Develop a refreshed visual direction and archive strategy that improves the homepage, archive page, navigation, donation visibility, typography, spacing, and overall user experience. Short-term work strengthens the current WordPress and Elementor site; the long-term plan outlines a custom full-stack archive platform that can better support media, collections, metadata, and organizational storytelling.",
    role:
      "Web designer, archive consultant, frontend designer, and long-term technical strategist. Responsible for visual direction, CSS improvements, archive UX recommendations, client-facing planning, and full-stack architecture thinking.",
    techStack: [
      "WordPress",
      "Elementor",
      "Custom CSS",
      "HTML",
      "Archive UX Strategy",
      "Design Systems",
      "Next.js / React (Roadmap)",
      "Avalon Integration Planning",
    ],
    features: [
      {
        icon: "bi-house",
        title: "Homepage Redesign",
        description:
          "Restructured homepage narrative that connects mission, media, and archive access in one clear entry point.",
      },
      {
        icon: "bi-archive",
        title: "Archive Page Improvements",
        description:
          "Archive browsing and collection presentation redesigned for clarity, readability, and cultural context.",
      },
      {
        icon: "bi-search",
        title: "Search & Browse Strategy",
        description:
          "Recommendations for search, filtering, and browse patterns that make the collection easier to explore.",
      },
      {
        icon: "bi-palette",
        title: "Visual Identity Refinement",
        description:
          "Cohesive color, spacing, and layout system that reflects the organization's cultural mission.",
      },
      {
        icon: "bi-fonts",
        title: "Typography & Color System",
        description:
          "Readable type hierarchy and color palette applied consistently across public-facing pages.",
      },
      {
        icon: "bi-heart",
        title: "Donation Visibility",
        description:
          "Consistent, accessible donation button placement that supports the organization's sustainability.",
      },
      {
        icon: "bi-phone",
        title: "Mobile Responsiveness",
        description:
          "Layout and navigation improvements for archive browsing on phones and tablets.",
      },
      {
        icon: "bi-list",
        title: "Navigation & Footer Cleanup",
        description:
          "Simplified site structure, footer organization, and wayfinding across archive and program pages.",
      },
      {
        icon: "bi-diagram-3",
        title: "Full-Stack Archive Roadmap",
        description:
          "Long-term plan for a custom platform supporting media, metadata, collections, and public storytelling.",
      },
      {
        icon: "bi-plug",
        title: "Avalon Archive Consulting",
        description:
          "Integration planning around Avalon and existing archive tools for collection presentation.",
      },
    ],
    outcomes: [
      "Created a clearer visual system for the organization's public site with improved readability and navigation.",
      "Improved archive presentation so collections feel connected to the organization's mission and story.",
      "Helped the client understand short-term WordPress improvements versus long-term full-stack archive strategy.",
      "Developed a roadmap for a more powerful archive experience beyond the current platform limits.",
      "Positioned the archive as part of public storytelling — not just a storage system.",
    ],
    nextSteps: [
      "Finalize the visual system and apply it consistently across homepage and archive pages.",
      "Improve archive browsing and search presentation on the current site.",
      "Strengthen homepage narrative to connect mission, media, and collection access.",
      "Build out the long-term full-stack archive plan with the client.",
      "Explore deeper integration with Avalon and existing archive infrastructure.",
    ],
    improvements: null,
  },

  "black-boys-weather": {
    title: "Black Boys Are Made of Good Weather",
    category: "emotional-interfaces-creative",
    tagline:
      "An immersive web experience where climate, memory, and Black boyhood meet.",
    date: "2015 – 2018",
    status: "Completed",
    client: "Urban Affairs Coalition / Philly Youth Poetry Movement",
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      "assets/img/portfolio/portfolio-5.webp",
      "assets/img/portfolio/portfolio-portrait-4.webp",
      "assets/img/portfolio/portfolio-7.webp",
    ],
    overview:
      "Black Boys Are Made of Good Weather is an experimental web experience born from a community outreach campaign that gathered narratives from Philadelphia residents affected by climate change and hazardous conditions in public buildings. The project translates those testimonies into an emotionally intelligent, weather-driven interactive environment—where atmospheric states become storytelling devices for Black boyhood, resilience, and environmental justice.",
    problem:
      "Over 100 stories were collected across every Philadelphia district, but raw testimonies alone could not convey the emotional weight of environmental racism and its impact on young Black lives. The challenge was to build a digital experience that honored those narratives while making the connection between climate, infrastructure failure, and community memory feel visceral—not academic.",
    solution:
      "I designed and developed an interactive web experience that maps collected narratives to dynamic weather states and trigger-based interactions. Each atmospheric condition—sun, storm, heat, stillness—unlocks different story fragments, creating a non-linear journey through memory and place. The interface blends poetic copy, motion design, and environmental metaphor to turn data collection into an immersive act of witness.",
    role:
      "Campaign Lead, Program Coordinator, and Creative Technologist. I formulated the community outreach campaign, gathered narratives across Philadelphia, and translated the collected stories into the interactive web experience—connecting hip-hop, social justice programming, and experimental interface design.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Interactive Animation",
      "Responsive Design",
      "Story-Driven UX",
    ],
    features: [
      {
        icon: "bi-cloud-sun",
        title: "Weather-State Storytelling",
        description:
          "Narrative progression tied to atmospheric conditions that reflect the emotional tone of each testimony.",
      },
      {
        icon: "bi-hand-index",
        title: "Trigger-Based Interaction",
        description:
          "User actions unlock story fragments, creating a non-linear path through community memory.",
      },
      {
        icon: "bi-heart",
        title: "Emotionally Intelligent Interface",
        description:
          "Design choices prioritize feeling and presence over information density.",
      },
      {
        icon: "bi-mic",
        title: "Community Narrative Integration",
        description:
          "Over 100 resident testimonies woven into the experience across all Philadelphia districts.",
      },
      {
        icon: "bi-phone",
        title: "Responsive Immersive Layout",
        description:
          "Full-screen atmospheric environments that adapt across desktop, tablet, and mobile.",
      },
      {
        icon: "bi-palette",
        title: "Creative Coding",
        description:
          "Custom animation and interaction logic built without heavy frameworks to keep the experience lightweight and poetic.",
      },
    ],
    outcomes:
      "The underlying outreach campaign successfully amassed over 100 compelling stories from diverse communities spanning every district in Philadelphia. The broader initiative reached 700,000 digital users within a year and contributed to a 20% increase in parental and youth membership. The web experience stands as a prototype for how climate justice narratives can live as interactive art—not just reports.",
    improvements:
      "I would rebuild the experience with WebGL or Three.js for richer atmospheric rendering, add audio narration from original storytellers, and create a companion archive mode so each testimony is permanently accessible beyond the interactive journey.",
  },

  luvbomba: {
    title: "Luvbomba",
    category: "emotional-interfaces-creative",
    tagline:
      "A relationship commerce and message delivery platform for sending care with intention.",
    date: "2024 – Present",
    status: "Piloting · Rebuild in Progress",
    piloting: true,
    client: null,
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      {
        src: "assets/img/portfolio/portfolio-2.webp",
        alt: "Luvbomba concept — warm message and gift delivery flow interface",
      },
      {
        src: "assets/img/portfolio/portfolio-5.webp",
        alt: "Luvbomba concept — partner shop dashboard for orders and care messages",
      },
      {
        src: "assets/img/portfolio/portfolio-6.webp",
        alt: "Luvbomba concept — scheduled love note and flower add-on experience",
      },
    ],
    overview:
      "Luvbomba started as a fundraising and community care idea, but it is being rebuilt into a more professional application. The new version keeps its emotional core — helping people send thoughtful love, apologies, encouragement, and celebration — while structuring the product as a service that flower shops, gift shops, and small businesses can plug into for their customers.",
    problem:
      "People often want to send love, appreciation, apologies, encouragement, or celebration, but the process is scattered across texting, gift ordering, flower delivery, and manual follow-up. Local flower and gift shops also need simple digital add-ons that help them offer more personal, message-driven customer experiences without building custom software from scratch.",
    solution:
      "Luvbomba is being built as a lightweight relationship commerce and message delivery platform. Customers choose a message type, write or generate a note, select gifts or flowers, schedule delivery, and send a meaningful experience. Shops use it as a plug-in service layer for existing customers — turning transactional orders into intentional moments of care.",
    role:
      "Founder, product strategist, and technical lead. Responsible for product direction, service model design, user flows, messaging experience, partner onboarding strategy, and technical architecture.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Twilio",
      "Email & SMS Notifications",
    ],
    features: [
      {
        icon: "bi-envelope-heart",
        title: "Intentional Message Types",
        description:
          "Send love notes, care messages, apologies, birthday wishes, congratulations, or encouragement through a guided emotional flow.",
      },
      {
        icon: "bi-shop",
        title: "Partner Shop Flow",
        description:
          "Flower and gift shops plug in as partners, offering message-driven ordering without rebuilding their existing operations.",
      },
      {
        icon: "bi-calendar-event",
        title: "Message Scheduling",
        description:
          "Schedule notes and deliveries for the right moment — anniversaries, recoveries, milestones, or just because.",
      },
      {
        icon: "bi-flower1",
        title: "Gift & Flower Add-Ons",
        description:
          "Attach flowers, gifts, or care packages to any message in a single cohesive checkout experience.",
      },
      {
        icon: "bi-phone",
        title: "Messaging Middleware",
        description:
          "Twilio or alternative SMS/email delivery so recipients receive the message when and how it matters most.",
      },
      {
        icon: "bi-robot",
        title: "AI-Assisted Writing",
        description:
          "Help users find the right words when emotion is high and the blank page feels impossible.",
      },
      {
        icon: "bi-speedometer2",
        title: "Shop Dashboard",
        description:
          "Partner dashboard for tracking orders, messages, delivery status, and customer intake in one place.",
      },
      {
        icon: "bi-box-seam",
        title: "White-Label Embed",
        description:
          "Embeddable partner option so shops can offer Luvbomba flows under their own brand experience.",
      },
    ],
    outcomes: [
      "Validated the emotional thesis that people want to send care but lack a unified, intentional flow to do it.",
      "Identified a viable B2B2C model where local flower and gift shops become distribution partners rather than competitors.",
      "Mapped core user journeys for message types, scheduling, and partner onboarding ahead of the professional rebuild.",
    ],
    nextSteps: [
      "Complete the Next.js rebuild with polished partner and customer-facing flows.",
      "Pilot with one Philadelphia flower shop to validate the partner dashboard and order-to-message pipeline.",
      "Integrate Stripe checkout and Twilio delivery for end-to-end scheduled care message sending.",
      "Explore Shopify or Square integration for shops already managing inventory elsewhere.",
    ],
    improvements: null,
  },

  mediator: {
    title: "Mediator",
    category: "emotional-interfaces-creative",
    tagline:
      "A DBT-informed conversation analysis tool for understanding triggers, tone, and repair.",
    date: "2025 – Present",
    status: "Piloting · Concept / Prototype",
    piloting: true,
    client: null,
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      {
        src: "assets/img/portfolio/portfolio-7.webp",
        alt: "Mediator concept — calm conversation analysis interface with structured insight panels",
      },
      {
        src: "assets/img/portfolio/portfolio-10.webp",
        alt: "Mediator concept — trigger detection and escalation pattern breakdown view",
      },
      {
        src: "assets/img/portfolio/portfolio-1.webp",
        alt: "Mediator concept — reflective repair suggestions and next-message guidance",
      },
    ],
    overview:
      "Mediator is a conversation analysis project focused on helping users understand the emotional and relational dynamics inside communication. Inspired by DBT-informed frameworks, the system identifies elements like volume triggers, word triggers, repeated conflict patterns, escalation moments, and opportunities for repair — not to assign blame, but to slow the moment down into clarity.",
    problem:
      "Difficult conversations often move too fast for people to understand what happened. Tone, word choice, emotional triggers, and escalation patterns can create conflict before either person can name what is going on. Most tools either ignore the emotional layer entirely or offer generic advice that does not reflect the specific dynamics of the exchange.",
    solution:
      "Mediator is being built as a reflective conversation analysis tool. Users input or review conversation text and receive structured insights about triggers, emotional shifts, communication patterns, and possible repair language. The goal is not to judge who is right or wrong, but to help users understand the pattern, communicate with more care, and choose their next words intentionally.",
    role:
      "Founder, product strategist, AI workflow designer, and interface designer. Responsible for concept development, DBT-informed analysis structure, prompt chain design, emotional logic, privacy model, and product direction.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "OpenAI API",
      "Structured Prompt Chains",
      "PostgreSQL",
      "Privacy-First Storage",
    ],
    features: [
      {
        icon: "bi-chat-left-text",
        title: "Conversation Input",
        description:
          "Upload or paste conversation text for structured analysis without judgment or side-taking.",
      },
      {
        icon: "bi-diagram-2",
        title: "DBT-Informed Framework",
        description:
          "Analysis organized around emotional regulation, triggers, escalation, and repair — not winning the argument.",
      },
      {
        icon: "bi-exclamation-circle",
        title: "Trigger Detection",
        description:
          "Identify word triggers, intensity shifts, and recurring phrases that escalate or shut down communication.",
      },
      {
        icon: "bi-graph-up",
        title: "Escalation Mapping",
        description:
          "Surface the moments where tone, volume, or framing shifted the conversation off course.",
      },
      {
        icon: "bi-bandaid",
        title: "Repair Suggestions",
        description:
          "Offer calm, specific language for de-escalation and reconnection based on what actually happened in the text.",
      },
      {
        icon: "bi-question-circle",
        title: "What Happened Here?",
        description:
          "A plain-language breakdown of the conversation arc so users can reflect before responding.",
      },
      {
        icon: "bi-send",
        title: "Suggested Next Message",
        description:
          "Draft options for the next message that prioritize clarity, care, and boundary-setting.",
      },
      {
        icon: "bi-shield-lock",
        title: "Privacy-First Handling",
        description:
          "Sensitive conversation data handled with zero-retention or minimal-storage options by design.",
      },
    ],
    outcomes: [
      "Defined a DBT-informed analysis framework that translates clinical concepts into accessible product language.",
      "Built prompt chain architecture for trigger detection, escalation mapping, and repair suggestion without adversarial framing.",
      "Validated demand for reflective conversation tools that prioritize understanding over verdicts.",
    ],
    nextSteps: [
      "Build a functional prototype with conversation upload, analysis summary, and repair suggestion output.",
      "User-test with trusted cohorts to calibrate tone, accuracy, and emotional safety of AI-generated insights.",
      "Implement zero-retention mode for users who need maximum privacy with sensitive conversations.",
      "Explore therapist-informed review of analysis categories before public release.",
    ],
    improvements: null,
  },

  "channel-orange-digital-exhibition": {
    title: "Channel Orange: A Frank Ocean Digital Exhibition",
    category: "emotional-interfaces-creative",
    tagline:
      "An interactive digital diorama translating music into motion, memory, and atmosphere.",
    date: "2025 – Present",
    status: "Piloting · Creative Prototype",
    piloting: true,
    client: null,
    accentColor: "#E8824A",
    links: {
      live: "https://challenge-orange.vercel.app/",
      github: null,
      caseStudy: null,
    },
    images: [
      {
        src: "assets/img/projects/channel-orange-hero.png",
        alt: "No Signal Still Feeling — homepage with animated orange tile mosaic and exhibition navigation",
      },
      {
        src: "assets/img/projects/channel-orange-themes.png",
        alt: "Exhibition Essays — theme-based browsing with essays on love, excess, nostalgia, and the television frame",
      },
      {
        src: "assets/img/projects/channel-orange-objects.png",
        alt: "Recurring Objects — visual vocabulary cards for Television, Static, and other symbolic elements",
      },
    ],
    overview:
      "Channel Orange: A Frank Ocean Digital Exhibition is a creative web experience that treats the album as a visual and emotional environment. Instead of a traditional fan page or playlist, the project becomes a digital diorama — floating assets, weather, movement, memory objects, and immersive scene design that feel like walking through the atmosphere of the music itself.",
    problem:
      "Music-based web experiences are often static tribute pages or simple streaming embeds. They rarely translate the emotional world of an album into interactive space, movement, object, and memory. Channel Orange in particular carries a cinematic, nostalgic, and symbolic visual language that deserves more than a tracklist.",
    solution:
      "The exhibition is being built as an interactive digital diorama with animated floating objects, atmospheric backgrounds, and scene-based navigation. Symbolic references — a phone, cassette, tornado, record, window, space helmet — move through the composition like artifacts from the album's emotional landscape. React, Three.js, and motion design turn listening into exploration.",
    role:
      "Creative technologist, art director, prompt designer, and frontend developer. Responsible for concept, visual system, AI asset generation prompts, scene planning, implementation architecture, and interactive direction.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "Framer Motion",
      "Spline",
      "AI-Generated Visual Assets",
    ],
    features: [
      {
        icon: "bi-easel",
        title: "Digital Diorama Layout",
        description:
          "Exhibition-style spatial composition where the album becomes an explorable environment, not a flat page.",
      },
      {
        icon: "bi-layers",
        title: "Floating Object System",
        description:
          "PNG and WebP assets — phone, cassette, tornado, record, window, helmet — drift through scenes with choreographed motion.",
      },
      {
        icon: "bi-tornado",
        title: "Animated Movement",
        description:
          "Tornado, weather, and atmospheric animation systems that carry the album's emotional temperature through the space.",
      },
      {
        icon: "bi-door-open",
        title: "Album-Inspired Rooms",
        description:
          "Distinct visual rooms keyed to tracks and themes, each with its own color temperature and object vocabulary.",
      },
      {
        icon: "bi-hand-index",
        title: "Interactive Objects",
        description:
          "Hover and click interactions that reveal narrative fragments, lyrics-adjacent copy, and scene transitions.",
      },
      {
        icon: "bi-box",
        title: "Three.js Scene Structure",
        description:
          "React Three Fiber component architecture for 3D-inspired compositions with performant web delivery.",
      },
      {
        icon: "bi-arrows-move",
        title: "Scroll & Hover Motion",
        description:
          "Framer Motion and scroll-driven animation tie user movement to scene depth and object parallax.",
      },
      {
        icon: "bi-palette",
        title: "AI Asset Pipeline",
        description:
          "Prompt-designed visual asset generation for symbolic objects, atmospheres, and exhibition textures.",
      },
    ],
    outcomes: [
      "Developed a visual system and scene vocabulary that translates Channel Orange's emotional palette into interactive space.",
      "Built prompt libraries for AI-generated exhibition assets including symbolic objects and atmospheric backgrounds.",
      "Established a component-based scene architecture ready for Three.js and motion integration.",
    ],
    nextSteps: [
      "Implement the first navigable diorama room with floating object animation and orange-tinted atmospheric lighting.",
      "Integrate React Three Fiber for depth, parallax, and 3D-inspired object placement.",
      "Add audio-reactive or scroll-driven scene transitions between album-inspired rooms.",
      "Optimize PNG/WebP asset delivery for performance across mobile and desktop exhibition viewing.",
    ],
    improvements: null,
  },

  "multilingual-ai-document-assistant": {
    title: "Multilingual AI Document Assistant",
    category: "ai-systems-privacy",
    subcategory: "RAG, Translation, and Zero-Retention AI",
    tagline:
      "A privacy-first AI document assistant where documents are processed but never stored on the server.",
    date: "2025",
    status: "Fellowship Flagship Build",
    client: "Resilient Coders AI Engineering Fellowship",
    links: {
      live: null,
      github: null,
      caseStudy: null,
    },
    images: [
      {
        src: "assets/img/portfolio/portfolio-1.webp",
        alt: "Multilingual AI Document Assistant interface showing document Q&A and privacy-first processing",
      },
      {
        src: "assets/img/portfolio/portfolio-7.webp",
        alt: "Zero-retention architecture diagram showing stateless API routes and browser-based EntityDB storage",
      },
    ],
    overview:
      "A privacy-first multilingual document assistant built during the Resilient Coders AI Engineering Fellowship. The system was designed around a zero-retention architecture: documents are processed but never stored on the server, the backend remains stateless, and persistent data lives in the user's browser through EntityDB.",
    problem:
      "AI document assistants are powerful, but they often introduce serious privacy risks by storing sensitive documents, embeddings, conversations, or user state on servers. This is especially concerning for legal, medical, immigration, and government documents.",
    solution:
      "The project uses a stateless API pattern where backend routes process and return results without storing data. Persistent state is handled client-side through EntityDB, which uses IndexedDB under the hood and supports embeddings and semantic search through Transformers.js.",
    architecture: [
      "No Redis",
      "No server-side database persistence",
      "No raw IndexedDB usage",
      "EntityDB for browser-based persistence",
      "Transformers.js for embeddings and semantic search",
      "Stateless API routes",
      "Documents processed but never stored server-side",
      "Persistent state kept inside the user's browser",
    ],
    role:
      "AI Engineering Fellow, RAG contributor, translation-data researcher",
    roleDetail:
      "I contributed through core sprint work across both the Q&A/RAG system and the Translation team. On the Q&A side, I owned conversation-state storage, query validation and preprocessing, and context-builder/token-management work. On the Translation side, I led data-prep research for the NLLB fine-tuning effort, focusing on parallel corpora, segmentation, EntityDB storage, and privacy boundaries.",
    contributionsDetail: {
      intro:
        "During the Resilient Coders AI Engineering Fellowship, I contributed to the cohort's Multilingual AI Document Assistant through core sprint work across the Q&A/RAG system and the Translation team.",
      sections: [
        {
          title: "On the Q&A / RAG side, I owned three key ticket areas:",
          items: [
            "Conversation State Storage",
            "Query Validation & Preprocessing",
            "Context Builder & Token Management",
          ],
          outro:
            "These pieces supported the stateful memory layer of the RAG chat experience while still respecting the project's zero-retention architecture. My work focused on making the assistant feel continuous and useful without relying on server-side storage.",
        },
        {
          paragraphs: [
            "On the Translation side, I took the Data Prep / Inputs role for the team's NLLB fine-tuning effort. I drove the translation-data research track by sourcing and specifying legal, medical, government, and immigration parallel-text corpora.",
          ],
          title: "Key research and data work:",
          items: [
            "Researched CUAD and LexGLUE as legal-domain corpora",
            "Proposed LLM-pretranslation as a path for creating synthetic parallel data",
            "Defined how parallel text should be segmented",
            "Proposed how translation data should be stored client-side in EntityDB",
            "Helped keep translation data inside the zero-retention boundary",
            "Surfaced HIPAA considerations for the medical-translation data track",
            "Produced a translation-data research deliverable used by the fine-tuning and evaluation work",
          ],
        },
      ],
    },
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "EntityDB",
      "IndexedDB",
      "Transformers.js",
      "RAG",
      "Stateless API Routes",
      "NLLB",
      "CUAD",
      "LexGLUE",
      "Client-Side Semantic Search",
    ],
    features: [
      {
        icon: "bi-shield-lock",
        title: "Zero-Retention Document Processing",
        description:
          "Documents are processed but never stored on the server — no files, embeddings, or chat history persisted backend-side.",
      },
      {
        icon: "bi-chat-dots",
        title: "Privacy-First Document Q&A",
        description:
          "RAG-style document question answering designed for sensitive legal, medical, immigration, and personal records.",
      },
      {
        icon: "bi-hdd",
        title: "Client-Side Persistence",
        description:
          "EntityDB handles browser-based storage using IndexedDB within the privacy boundary.",
      },
      {
        icon: "bi-search",
        title: "Semantic Search",
        description:
          "Client-side embeddings and semantic search powered by Transformers.js.",
      },
      {
        icon: "bi-chat-left-text",
        title: "Conversation-State Storage",
        description:
          "Stateful memory layer for continuous RAG chat without server-side storage.",
      },
      {
        icon: "bi-funnel",
        title: "Query Validation",
        description:
          "Input validation and preprocessing pipeline before context retrieval.",
      },
      {
        icon: "bi-layers",
        title: "Context Building & Token Management",
        description:
          "Context assembly and token budgeting for better RAG retrieval quality.",
      },
      {
        icon: "bi-translate",
        title: "Translation Data Research",
        description:
          "Parallel corpora research for NLLB fine-tuning across legal, medical, government, and immigration domains.",
      },
      {
        icon: "bi-scissors",
        title: "Parallel Text Segmentation",
        description:
          "Client-side segmentation strategy for parallel text stored in EntityDB.",
      },
      {
        icon: "bi-clipboard2-pulse",
        title: "Compliance-Aware Research",
        description:
          "HIPAA considerations surfaced during medical-translation data track planning.",
      },
    ],
    impact: [
      "Helped shape the stateful memory layer of a privacy-first RAG chat experience",
      "Contributed to both Q&A infrastructure and translation-data research",
      "Researched legal-domain corpora including CUAD and LexGLUE",
      "Proposed client-side segmentation and storage for parallel text using EntityDB",
      "Surfaced HIPAA considerations during the medical-data research phase",
      "Produced a research deliverable used by the translation fine-tuning and evaluation team",
      "Demonstrated range across AI architecture, RAG workflows, data curation, and compliance-aware product thinking",
    ],
    outcomes: [
      "Helped define the stateful memory layer of the RAG chat experience",
      "Contributed to privacy-first AI architecture",
      "Supported the translation team's fine-tuning and evaluation direction",
      "Brought a compliance lens to medical translation data research",
      "Worked across both engineering implementation and AI data research",
    ],
    nextSteps: [
      "Add stronger UI screenshots and architecture diagrams",
      "Document the zero-retention data flow",
      "Show EntityDB client-side storage flow visually",
      "Add a RAG pipeline diagram",
      "Add translation-data research artifacts if shareable",
    ],
    improvements: null,
  },
};

window.projectCategories = projectCategories;
window.projects = projects;
