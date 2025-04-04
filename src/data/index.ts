export interface ProjectProcess {
  name: string;
  description: string;
}
export interface ProjectHighlight {
  original: any;
  thumbnail: any;
}
export enum ProjectType {
  MOBILE,
  WEBSITE
}
export interface Project {
  id: string;
  type: ProjectType;
  mainTitle: string;
  secondaryTitle: string;
  primaryColor: string;
  transparentColor: string;
  tagline: string;
  role: string;
  year: string;
  services: string;
  industry: string;
  description: string;
  featureImage: any;
  featureClean: any;
  challenge: string;
  approach: string;
  process: ProjectProcess[];
  highlights: ProjectHighlight[];
  webLink: string | null;
  github: string | null;
}

export const projectsData: Project[] = [
  {
    id: "nfluencer-01",
    type: ProjectType.WEBSITE,
    mainTitle: "Nfluencer",
    secondaryTitle: "Nfluencer Web Platform",
    primaryColor: "#5c3ec7",
    transparentColor: "#e0cbfd",
    tagline: "Exchange services for NFTs and cash",
    role: "Full Stack Developer",
    year: "2023",
    services: "UI Design, Frontend & Backend Development, Server & Database Management",
    industry: "NFTs, Gig Economy, Blockchain",
    description:
      "NFLUENCER is a web-based marketplace where users can create, buy, sell, and exchange NFTs for services or cash. The platform makes it simple for influencers, freelancers, and other creative professionals to offer gigs and manage orders. It features an NFT marketplace integrated with smart contracts on the Ethereum network, ensuring secure and transparent transactions. Users can easily list their services, connect with buyers, and even exchange NFTs as rewards. The system also includes order management and a payment system that brings everything together on one convenient website.",
    challenge: "I was asked to build a digital platform that lets creators, freelancers, and artists make money by offering services and selling NFTs. The idea was to mix traditional gig services with a cool NFT twist. The platform needed to let users create service packages, handle payments securely, and offer a smooth, easy-to-use experience for both sellers and buyers.",
    approach: "I decided to build the platform as a full-stack MERN application with some blockchain features mixed in. My goal was to combine familiar e-commerce ideas with the emerging NFT space so that even people who aren’t used to blockchain could join in easily. I split the system into two parts: one for regular service transactions and one for NFT-based offerings.",
    process: [
      {
        name: "plan",
        description: "I worked out the user journeys for both service providers and buyers, and sketched some wireframes to see how the two sides of the platform would work together.",
      },
      {
        name: "build",
        description: "I developed the platform as a full-stack MERN application with blockchain elements. The frontend was built with React and Redux, while Node.js and Express handled the backend. MongoDB stored user data, and I integrated Stripe and PayPal for payments. NFT features were enabled using IPFS for decentralized asset storage, and Tailwind CSS kept the interface modern and responsive.",
      },
      {
        name: "refine",
        description: "During this phase, I focused on performance and usability. I implemented code-splitting and lazy loading in React, which sped up the initial load time significantly. I also built a simple abstraction for blockchain interactions so creators could mint NFTs without needing technical know-how, while ensuring both traditional and crypto transactions worked seamlessly.",
      },
      {
        name: "launch",
        description: "The final platform supports both gig services and NFT assets in one marketplace, handling over 100 secure transactions daily. It provides a friendly experience for new and experienced users alike, combining reliable payment processing with innovative NFT features to create a trusted digital space for creators and buyers.",
      },
    ],
    featureImage: require("../assets/portfolio/nfluencer/feature.png"),
    featureClean: require("../assets/portfolio/nfluencer/featureclean.png"),
    highlights: [
      {
        original: require("../assets/portfolio/nfluencer/2.png"),
        thumbnail: require("../assets/portfolio/nfluencer/2.png"),
      },
      {
        original: require("../assets/portfolio/nfluencer/1.png"),
        thumbnail: require("../assets/portfolio/nfluencer/1.png"),
      },
      {
        original: require("../assets/portfolio/nfluencer/3.png"),
        thumbnail: require("../assets/portfolio/nfluencer/3.png"),
      },
      {
        original: require("../assets/portfolio/nfluencer/4.png"),
        thumbnail: require("../assets/portfolio/nfluencer/4.png"),
      },
      {
        original: require("../assets/portfolio/nfluencer/5.png"),
        thumbnail: require("../assets/portfolio/nfluencer/5.png"),
      },
    ],
    webLink: "https://nfluencer-website.vercel.app/",
    github: "https://github.com/joharkhan99/Nfluencer-Website",
  },
  {
    id: "movieland-02",
    type: ProjectType.MOBILE,
    mainTitle: "MovieLand",
    primaryColor: "#E83928",
    transparentColor: "#fdcbcb",
    secondaryTitle: "Mobile Cinema Experience",
    tagline: "Seamless movie streaming on your mobile",
    role: "Mobile App Developer",
    year: "2025",
    services: "Mobile App Development, React Native, Expo.io, Tailwind CSS, App Design",
    industry: "Entertainment, Movie Streaming",
    description: "Created a React Native/Expo movie streaming app that connects to TheMovieDB API and vidsrc. The app offers personalized recommendations, watchlists, and offline viewing with a clean, intuitive interface styled using Tailwind CSS. It overcame performance issues on lower-end devices through smart image optimization and virtualized lists, resulting in 40% higher user acquisition than expected. The design focuses on simplicity and ease of use so that anyone can enjoy a smooth streaming experience regardless of their device. Within the first week, the app reached over 500 downloads on the Play Store.",
    challenge: "There was a need for a cross-platform mobile app that allowed users to discover and stream movies from different sources. The app had to be visually attractive, perform well on a wide range of devices, and meet a strict timeline while handling third-party API limits. The challenge was to balance rich features with optimal performance in a simple and effective way.",
    approach: "The project focused on three main aspects: creating an engaging interface, establishing a robust system for API calls, and incorporating offline features. React Native with Expo was chosen for its efficiency in building cross-platform apps, and Tailwind CSS helped keep the design consistent and easy to maintain. This approach ensured that the app was not only visually appealing but also reliable and fast.",
    process: [
      {
        name: "Planning",
        description: "Mapped out user journeys and sketched wireframes, setting clear priorities for the app features."
      },
      {
        name: "Architecture",
        description: "Built a clean system that connects to TheMovieDB API, integrates vidsrc for streaming, and uses local storage for offline viewing."
      },
      {
        name: "Design",
        description: "Designed a dark-themed, user-friendly interface with smooth navigation and dynamic content displays."
      },
      {
        name: "Development",
        description: "Developed key features like personalized recommendations, custom watchlists, social sharing, and offline playback."
      }
    ],
    featureClean: require("../assets/portfolio/movieland/feature.png"),
    featureImage: require("../assets/portfolio/movieland/featureclean.png"),
    highlights: [
      {
        original: require("../assets/portfolio/movieland/1.jpg"),
        thumbnail: require("../assets/portfolio/movieland/1.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/2.jpg"),
        thumbnail: require("../assets/portfolio/movieland/2.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/3.jpg"),
        thumbnail: require("../assets/portfolio/movieland/3.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/4.jpg"),
        thumbnail: require("../assets/portfolio/movieland/4.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/5.jpg"),
        thumbnail: require("../assets/portfolio/movieland/5.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/6.jpg"),
        thumbnail: require("../assets/portfolio/movieland/6.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/7.jpg"),
        thumbnail: require("../assets/portfolio/movieland/7.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/8.jpg"),
        thumbnail: require("../assets/portfolio/movieland/8.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/9.jpg"),
        thumbnail: require("../assets/portfolio/movieland/9.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/10.jpg"),
        thumbnail: require("../assets/portfolio/movieland/10.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/11.jpg"),
        thumbnail: require("../assets/portfolio/movieland/11.jpg")
      },
      {
        original: require("../assets/portfolio/movieland/12.jpg"),
        thumbnail: require("../assets/portfolio/movieland/12.jpg")
      },
    ],
    webLink: "https://joharkhan.itch.io/movieland",
    github: "https://github.com/joharkhan99/MovieLand"
  },
  {
    id: "influindex-02",
    type: ProjectType.WEBSITE,
    mainTitle: "InfluIndex",
    secondaryTitle: "Influencer Marketing Platform",
    tagline: "Connecting brands with top influencers for real-time collaborations",
    role: "Full Stack Developer",
    year: "2025",
    services: "UI/UX Design, Backend & Frontend Development, Real-time Chat, API Integrations",
    industry: "Digital Marketing, Influencer Marketing",
    description: "InfluIndex is a comprehensive platform that connects brands, influencers, agencies, and admins. It allows brands to view influencer profiles, check their social stats, create campaigns, and invite influencers for collaborations. The platform also supports real-time communication via chat using socket.io, contract management, and detailed campaign tracking. Developed for a South American client with an agency, it was designed to serve local customers with an easy-to-use system that delivers accurate social media insights and streamlined collaboration.",
    challenge: "The project had to handle multiple user roles while integrating various social media APIs for platforms like Instagram, YouTube, and TikTok. Ensuring real-time communication, secure contract management, and efficient API usage within a tight timeline was a major challenge. Balancing simplicity for end users with robust backend functionality required careful planning and execution.",
    approach: "We built a user-friendly system that made it easy for brands and influencers to connect and collaborate. The platform was developed in phases, starting with clear user flows and a solid architecture. We focused on creating a simple interface backed by powerful integrations, real-time chat, and smart API caching to manage data efficiently.",
    process: [
      {
        name: "Plan",
        description: "Mapped out requirements and user flows for brands, influencers, agencies, and admins."
      },
      {
        name: "Architecture",
        description: "Defined the system architecture, selecting the right tools for social media integrations and real-time chat."
      },
      {
        name: "Design",
        description: "Created a simple, intuitive interface and prototypes to ensure smooth user experience."
      },
      {
        name: "Build",
        description: "Developed the platform in phases, integrating key features like chat, contracts, and API caching."
      },
      {
        name: "Test",
        description: "Conducted thorough testing with real users to validate reliability and ease of use."
      }
    ],
    primaryColor: "#1651ee",
    transparentColor: "rgb(203, 218, 253)",
    featureClean: require("../assets/portfolio/influindex/feature.png"),
    featureImage: require("../assets/portfolio/influindex/featureclean.png"),
    highlights: [
      {
        original: require("../assets/portfolio/influindex/3.png"),
        thumbnail: require("../assets/portfolio/influindex/3.png")
      },
      {
        original: require("../assets/portfolio/influindex/17.gif"),
        thumbnail: require("../assets/portfolio/influindex/17.gif")
      },
      {
        original: require("../assets/portfolio/influindex/4.png"),
        thumbnail: require("../assets/portfolio/influindex/4.png")
      },
      {
        original: require("../assets/portfolio/influindex/5.png"),
        thumbnail: require("../assets/portfolio/influindex/5.png")
      },
      {
        original: require("../assets/portfolio/influindex/18.gif"),
        thumbnail: require("../assets/portfolio/influindex/18.gif")
      },
      {
        original: require("../assets/portfolio/influindex/6.png"),
        thumbnail: require("../assets/portfolio/influindex/6.png")
      },
      {
        original: require("../assets/portfolio/influindex/7.png"),
        thumbnail: require("../assets/portfolio/influindex/7.png")
      },
      {
        original: require("../assets/portfolio/influindex/19.gif"),
        thumbnail: require("../assets/portfolio/influindex/19.gif")
      },
      {
        original: require("../assets/portfolio/influindex/8.png"),
        thumbnail: require("../assets/portfolio/influindex/8.png")
      },
      {
        original: require("../assets/portfolio/influindex/9.png"),
        thumbnail: require("../assets/portfolio/influindex/9.png")
      },
      {
        original: require("../assets/portfolio/influindex/10.png"),
        thumbnail: require("../assets/portfolio/influindex/10.png")
      },
      {
        original: require("../assets/portfolio/influindex/11.png"),
        thumbnail: require("../assets/portfolio/influindex/11.png")
      },
      {
        original: require("../assets/portfolio/influindex/12.png"),
        thumbnail: require("../assets/portfolio/influindex/12.png")
      },
      {
        original: require("../assets/portfolio/influindex/13.png"),
        thumbnail: require("../assets/portfolio/influindex/13.png")
      },
      {
        original: require("../assets/portfolio/influindex/14.png"),
        thumbnail: require("../assets/portfolio/influindex/14.png")
      },
      {
        original: require("../assets/portfolio/influindex/15.png"),
        thumbnail: require("../assets/portfolio/influindex/15.png")
      },
      {
        original: require("../assets/portfolio/influindex/16.png"),
        thumbnail: require("../assets/portfolio/influindex/16.png")
      },
    ],
    webLink: "https://influindex.com",
    github: null,
  },
  {
    id: "auto-inventory-01", type: ProjectType.WEBSITE, mainTitle: "Car Management Platform", secondaryTitle: "Car Management Platform", primaryColor: "#503e9d", transparentColor: "rgb(216, 207, 255)", tagline: "Automotive Inventory & Sales Management System", role: "Full Stack Developer", year: "2025", services: "Full Stack Development, System Architecture, Backend & Frontend Development, Financial Module Implementation", industry: "Automotive Sales & Financial Operations", description: "Developed a car management platform for a Japanese dealership while working with Kaspar Consulting Services. The system tracks vehicle inventory, manages sales pipelines, handles payments and invoices, and offers detailed financial reporting.", challenge: "The client needed a complete solution to manage their dealership operations. They wanted to track vehicles, manage the entire sales process, handle financial transactions, and generate clear reports with support for multiple user roles and integration with existing accounting systems.", approach: "I designed a web-based system that digitized their workflows using PHP, Laravel, MySQL, and JavaScript. The solution streamlined operations and integrated smoothly with their current accounting software.", process: [{ name: "Planning", description: "Mapped the client’s workflows and designed a system architecture that digitized and optimized their processes." }, { name: "Implementation", description: "Built a robust backend, created a responsive admin dashboard, and developed modules for vehicle inventory, sales tracking, financial operations, and user management." }, { name: "Testing", description: "Tested the system for accuracy and ease of use, refined features like workflow customization and multilingual support, ensuring the system met the client’s needs." }, { name: "Launch", description: "The platform reduced inventory management time by 65%, cut sales processing time from days to hours, and improved financial reporting accuracy by 40%." }], featureImage: require("../assets/portfolio/automative/feature.png"),
    featureClean: require("../assets/portfolio/automative/feature.png"),
    highlights: [
      {
        original: require("../assets/portfolio/automative/1.png"),
        thumbnail: require("../assets/portfolio/automative/1.png"),
      },
      {
        original: require("../assets/portfolio/automative/2.png"),
        thumbnail: require("../assets/portfolio/automative/2.png"),
      },
      {
        original: require("../assets/portfolio/automative/3.png"),
        thumbnail: require("../assets/portfolio/automative/3.png"),
      },
      {
        original: require("../assets/portfolio/automative/4.png"),
        thumbnail: require("../assets/portfolio/automative/4.png"),
      },
      {
        original: require("../assets/portfolio/automative/5.png"),
        thumbnail: require("../assets/portfolio/automative/5.png"),
      },
      {
        original: require("../assets/portfolio/automative/6.png"),
        thumbnail: require("../assets/portfolio/automative/6.png"),
      },
    ],
    webLink: null,
    github: null,
  },
  {
    id: "bme-realestate-01",
    type: ProjectType.WEBSITE,
    mainTitle: "Beau Monde Estates",
    secondaryTitle: "Digital Platform for Premium Real Estate",
    primaryColor: "#deb06f",
    transparentColor: "rgb(236, 208, 168)",
    tagline: "Showcasing premium real estate in style",
    role: "Full Stack Developer",
    year: "2025",
    services: "Full Stack Development, Front-End & Back-End Development, Responsive Design, Admin Dashboard",
    industry: "Real Estate, Digital Marketing",
    description: "Developed a digital platform for Beau Monde Estates to showcase their premium real estate portfolio. The website features interactive property listings with detailed specs, maps, floor plans, inquiry forms, and a blog for market insights.",
    challenge: "BME needed a modern website to present their high-end properties in a clear and attractive way. They wanted a solution that would allow potential clients to easily explore properties, request quotes, and get detailed information. The site also needed a strong admin dashboard for managing listings and blog content.",
    approach: "I worked closely with the design team to create a clean and elegant interface that highlighted property images and important details. I built a responsive site that is easy to use on both desktop and mobile devices, and added interactive features like maps and custom plan viewers.",
    process: [
      {
        name: "plan",
        description: "Created wireframes and planned the user experience with the design team."
      },
      {
        name: "build",
        description: "Developed the website using PHP, MySQL, and JavaScript, including interactive property pages and inquiry forms."
      },
      {
        name: "test",
        description: "Tested all features to ensure smooth navigation and proper functionality across devices."
      },
      {
        name: "launch",
        description: "Deployed the platform and made it live, leading to more qualified leads and better client engagement."
      }
    ],
    featureImage: require("../assets/portfolio/bme/feature.png"),
    featureClean: require("../assets/portfolio/bme/feature.png"),
    highlights: [
      {
        original: require("../assets/portfolio/bme/4.png"),
        thumbnail: require("../assets/portfolio/bme/4.png"),
      },
      {
        original: require("../assets/portfolio/bme/5.png"),
        thumbnail: require("../assets/portfolio/bme/5.png"),
      },
      {
        original: require("../assets/portfolio/bme/2.png"),
        thumbnail: require("../assets/portfolio/bme/2.png"),
      },
      {
        original: require("../assets/portfolio/bme/6.png"),
        thumbnail: require("../assets/portfolio/bme/6.png"),
      },
      {
        original: require("../assets/portfolio/bme/7.png"),
        thumbnail: require("../assets/portfolio/bme/7.png"),
      },
    ],
    webLink: "http://beaumonde-estate.com/",
    github: null,
  },
  {
    id: "nfluencer-mobile-01",
    type: ProjectType.MOBILE,
    mainTitle: "Nfluencer Mobile App",
    secondaryTitle: "NFT-Based Services on the Go",
    primaryColor: "#5c3ec7",
    transparentColor: "#e0cbfd",
    tagline: "Sell services and NFTs with a native mobile experience",
    role: "Mobile App Developer",
    year: "2025",
    services: "Mobile App Development, React Native, Expo, Tailwind CSS, Payment Integration",
    industry: "Gig Economy, NFTs, Digital Services",
    description: "Built a mobile app for NFLUENCER using React Native and Expo. The app lets influencers and creators sell services with NFT digital assets as add-ons. It mixes blockchain features with traditional payment options like Stripe and PayPal. The design is clean and user friendly, making it simple to manage gigs on the go.",
    challenge: "The client wanted a mobile app that kept all the key features of the NFLUENCER web platform, including the marketplace, NFT tools, messaging, and payment systems, but in a format that works well on mobile. The challenge was to ensure fast performance and ease of use on various devices.",
    approach: "I used React Native with Expo for a cross-platform solution. I adapted the web design for mobile, focusing on simple navigation and clear access to key features. Secure payments and a smooth NFT creation process were also priorities.",
    process: [
      {
        name: "plan",
        description: "Adapted the design for mobile and planned the key features to ensure a smooth user experience."
      },
      {
        name: "build",
        description: "Developed the mobile app with React Native, connected it to the backend, and added secure payment options."
      },
      {
        name: "test",
        description: "Tested the app on different devices to ensure fast performance and ease of use."
      },
      {
        name: "launch",
        description: "Released the app and monitored its performance to make sure it met user needs."
      }
    ],
    featureImage: require("../assets/portfolio/nfluencer/6.png"),
    featureClean: require("../assets/portfolio/nfluencer/6.png"),
    highlights: [
      {
        original: require("../assets/portfolio/nfluencer/16.jpeg"),
        thumbnail: require("../assets/portfolio/nfluencer/16.jpeg"),
      },
      {
        original: require("../assets/portfolio/nfluencer/13.jpg"),
        thumbnail: require("../assets/portfolio/nfluencer/13.jpg"),
      },
      {
        original: require("../assets/portfolio/nfluencer/14.jpg"),
        thumbnail: require("../assets/portfolio/nfluencer/14.jpg"),
      },
      {
        original: require("../assets/portfolio/nfluencer/7.png"),
        thumbnail: require("../assets/portfolio/nfluencer/7.png"),
      },
      {
        original: require("../assets/portfolio/nfluencer/8.png"),
        thumbnail: require("../assets/portfolio/nfluencer/8.png"),
      },
      {
        original: require("../assets/portfolio/nfluencer/9.jpeg"),
        thumbnail: require("../assets/portfolio/nfluencer/9.jpeg"),
      },
      {
        original: require("../assets/portfolio/nfluencer/10.jpg"),
        thumbnail: require("../assets/portfolio/nfluencer/10.jpg"),
      },
      {
        original: require("../assets/portfolio/nfluencer/11.jpg"),
        thumbnail: require("../assets/portfolio/nfluencer/11.jpg"),
      },
      {
        original: require("../assets/portfolio/nfluencer/15.jpeg"),
        thumbnail: require("../assets/portfolio/nfluencer/15.jpeg"),
      },
    ],
    webLink: null,
    github: "https://github.com/joharkhan99/Nfluencer-Mobile-App",
  },
  {
    id: "bueno-express-01",
    type: ProjectType.WEBSITE,
    mainTitle: "Bueno Express Transport",
    secondaryTitle: "Transport Booking Platform",
    primaryColor: "#2C3EFD",
    transparentColor: "rgb(227, 229, 255)",
    tagline: "Efficient transport bookings made simple",
    role: "Full Stack Developer",
    year: "2025",
    services: "UI Design, Frontend & Backend Development, Payment Integration, AWS Deployment",
    industry: "Transportation, Logistics, Booking",
    description: "Developed a transport booking platform for Bueno Express Transport. The system handles trip and bus bookings, luggage transport, and door-to-door pickups and dropoffs. It serves several cities including BRONX, MANHATTAN, Newburgh, and more. The platform features both user and admin dashboards, with functionalities like email bookings, captcha verifications, and multiple payment methods. It was first built using PHP, MySQL, Apache, HTML, and JavaScript, then later redesigned with the MERN stack and deployed on AWS.",
    challenge: "The client needed a reliable and scalable system to manage different types of transport bookings. They required a solution that could handle diverse services from trip bookings to package delivery, while also managing bus schedules, routes, and cities. Integration with tools like Google Sheets for booking data and support for multiple payment methods added to the complexity.",
    approach: "I started by building a basic system using traditional web technologies. Over time, I redesigned the platform using the MERN stack to improve performance and scalability. I implemented user, admin, and support dashboards to manage bookings and operations efficiently. The system now supports various payment methods like Stripe, PayPal, and cards, along with robust verification steps such as email and captcha.",
    process: [
      {
        name: "Plan",
        description: "Mapped out the system requirements and workflows with the client."
      },
      {
        name: "Build",
        description: "Developed the initial platform using PHP and later transitioned to MERN with AWS deployment."
      },
      {
        name: "Test",
        description: "Tested the booking process, payment integrations, and dashboard functionalities."
      },
      {
        name: "Launch",
        description: "Deployed the upgraded platform and ensured smooth operation with ongoing support."
      }
    ],
    featureImage: require("../assets/portfolio/bueno/featureclean.png"),
    featureClean: require("../assets/portfolio/bueno/feature.png"),
    highlights: [
      {
        original: require("../assets/portfolio/bueno/1.png"),
        thumbnail: require("../assets/portfolio/bueno/1.png"),
      },
      {
        original: require("../assets/portfolio/bueno/2.png"),
        thumbnail: require("../assets/portfolio/bueno/2.png"),
      },
      {
        original: require("../assets/portfolio/bueno/4.png"),
        thumbnail: require("../assets/portfolio/bueno/4.png"),
      },
      {
        original: require("../assets/portfolio/bueno/6.png"),
        thumbnail: require("../assets/portfolio/bueno/6.png"),
      },
      {
        original: require("../assets/portfolio/bueno/7.png"),
        thumbnail: require("../assets/portfolio/bueno/7.png"),
      },
      {
        original: require("../assets/portfolio/bueno/8.png"),
        thumbnail: require("../assets/portfolio/bueno/8.png"),
      },
      {
        original: require("../assets/portfolio/bueno/9.png"),
        thumbnail: require("../assets/portfolio/bueno/9.png"),
      },
      {
        original: require("../assets/portfolio/bueno/10.png"),
        thumbnail: require("../assets/portfolio/bueno/10.png"),
      },
    ],
    webLink: "https://buenoexpresstransport.com",
    github: null,
  },
  {
    id: "bullionutv-01",
    type: ProjectType.WEBSITE,
    mainTitle: "BullionUTV",
    secondaryTitle: "Recharge & Earn Bill Payment System",
    primaryColor: "#8370ed",
    transparentColor: "rgb(196, 188, 240)",
    tagline: "Easy bill payments with rewards",
    role: "Full Stack Developer",
    year: "2025",
    services: "Full Stack Development, Payment Integration, Digital Wallet, Laravel Development",
    industry: "Financial Services, Bill Payment",
    description: "Built a bill payment system for the African market using Laravel. Users can pay for utilities, airtime, data, and cable TV subscriptions with various payment methods including cryptocurrency. The platform features a digital wallet and a gift card trading module, designed to be user friendly and efficient.",
    challenge: "The client needed a secure, all-in-one platform that handled multiple payment methods, including crypto, while supporting utilities and entertainment services. They also wanted a digital wallet and gift card trading feature to offer more flexibility and rewards.",
    approach: "I used Laravel for its robust security and fast development. I created a system that connects with several payment gateways and service providers, and built a digital wallet and gift card module with strong verification to ensure safe transactions.",
    process: [
      {
        name: "plan",
        description: "Mapped out requirements and planned the system design with the client."
      },
      {
        name: "build",
        description: "Developed the backend with Laravel and integrated multiple payment methods and service APIs."
      },
      {
        name: "test",
        description: "Tested all payment workflows and verification processes to ensure reliable performance."
      },
      {
        name: "launch",
        description: "Deployed the platform and monitored operations to ensure a smooth rollout."
      }
    ],
    featureImage: require("../assets/portfolio/bullionutv/featureclean.png"),
    featureClean: require("../assets/portfolio/bullionutv/feature.png"),
    highlights: [
      {
        original: require("../assets/portfolio/bullionutv/1.png"),
        thumbnail: require("../assets/portfolio/bullionutv/1.png"),
      },
      {
        original: require("../assets/portfolio/bullionutv/2.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/2.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/3.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/3.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/4.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/4.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/5.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/5.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/6.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/6.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/7.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/7.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/8.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/8.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/9.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/9.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/10.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/10.jpeg"),
      },
      {
        original: require("../assets/portfolio/bullionutv/11.jpeg"),
        thumbnail: require("../assets/portfolio/bullionutv/11.jpeg"),
      },
    ],
    webLink: null,
    github: null,
  }



];