export const projects = [
  {
    id: 1,
    slug: "digital-life-lessons",
    name: "Digital Life Lessons",
    shortDescription: "A modern web-based learning platform for creating, sharing, and learning lessons with user dashboard and admin panel",
    fullDescription: "Digital Life Lessons is a comprehensive React-based learning platform that provides users with organized lessons, tutorials, and educational content. The application features a user-friendly interface with dark/light theme toggle, user dashboard for managing lessons and favorites, and an admin panel for content management. Built with React, Vite, and MongoDB, the platform offers a seamless learning experience across all devices.",
    image: "/projects/digital-life-lessons.jpg",
    techStack: ["React", "Vite", "Node.js", "MongoDB", "Context API", "Firebase", "CSS3"],
    category: "Full Stack",
    liveLink: "https://digitallifelessonsa11.web.app",
    githubLink: "https://github.com/Nayem-51/client_11",
    
    challenges: [
      "Implementing a robust user authentication system with Firebase",
      "Managing complex state across multiple components using Context API",
      "Creating an intuitive admin panel for content management",
      "Ensuring real-time synchronization between database and UI",
      "Optimizing performance for large lesson datasets"
    ],
    
    futureImprovements: [
      "Add video lesson support with progress tracking",
      "Implement a rating and review system for lessons",
      "Create achievement badges for active learners",
      "Add collaborative features like lesson comments and discussions",
      "Integrate AI-powered lesson recommendations based on user interests",
      "Add offline mode for accessing downloaded lessons"
    ],
    
    features: [
      "Public lessons browsing with search and filter",
      "User Dashboard with Add Lesson, My Lessons, and Favorites",
      "Admin panel for content moderation",
      "Dark/Light theme toggle with persistent preference",
      "Secure authentication with email/password and Google Sign-In",
      "Responsive design for all devices",
      "Real-time lesson updates",
      "Category-based lesson organization"
    ],
  },
  
  {
    id: 2,
    slug: "export-hub",
    name: "Export Hub - Trade Management",
    shortDescription: "A global trade management platform for browsing products, managing exports, and tracking imports with secure authentication",
    fullDescription: "Export Hub is a comprehensive trade management platform that enables users to browse products, add items for export, and manage imports efficiently. The platform features robust authentication, real-time inventory tracking, and a modern responsive design. Built with React, Node.js, and MongoDB, it provides secure product management with backend validation to prevent unauthorized deletions and over-importing.",
    image: "/projects/export-hub.jpg",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS", "DaisyUI"],
    category: "Full Stack",
    liveLink: "https://exporthub-nayem.web.app",
    githubLink: "https://github.com/Nayem-51/client_10",
    
    challenges: [
      "Implementing real-time inventory tracking with quantity validation",
      "Building secure backend protection to prevent unauthorized product deletion",
      "Creating a complex state management system for imports/exports",
      "Handling concurrent user actions to prevent race conditions",
      "Implementing efficient search functionality for large product datasets",
      "Designing an intuitive UX for complex import/export operations"
    ],
    
    futureImprovements: [
      "Add multi-currency support with real-time exchange rates",
      "Implement advanced analytics dashboard for trade insights",
      "Add export/import history with detailed transaction logs",
      "Create notification system for inventory alerts",
      "Integrate payment gateway for direct transactions",
      "Add bulk import/export functionality with CSV support",
      " Implement AI-powered product recommendations"
    ],
    
    features: [
      "Secure authentication with email/password and Google Sign-In",
      "Browse all products in responsive 3-column grid layout",
      "Add products for export with comprehensive form",
      "Import products with quantity validation",
      "Manage personal imports and exports in dedicated dashboards",
      "Update or delete exported products with modal forms",
      "Real-time inventory tracking and updates",
      "Search functionality to find products instantly",
      "Dark mode and light mode toggle",
      "Toast notifications for all actions",
      "Backend protection for product deletion",
      "Pagination on All Products page"
    ],
  },
  
  {
    id: 3,
    slug: "greennest-plant-store",
    name: "GreenNest - Plant Care & Store",
    shortDescription: "An eco-friendly platform for exploring indoor plants, sustainable living practices, and plant care information",
    fullDescription: "GreenNest is a beautiful and intuitive indoor plant care and store platform that helps users discover and learn about various indoor plants. The application features detailed plant information including care levels, ratings, and availability. Built with React and Firebase, it offers a seamless experience for plant enthusiasts with user authentication, profile management, and personalized plant collections.",
    image: "/projects/greennest.jpg",
    techStack: ["React", "Firebase", "Context API", "CSS3", "Firebase Auth"],
    category: "Frontend",
    liveLink: "https://assignment9-84144.web.app",
    githubLink: "https://github.com/Nayem-51/Greennest_09",
    
    challenges: [
      "Creating an engaging plant browsing experience with detailed information",
      "Implementing Firebase authentication with password validation",
      "Building a user profile system with updateProfile() functionality",
      "Designing a responsive layout that showcases plant images beautifully",
      "Managing protected routes for authenticated content",
      "Implementing forgot password functionality with email redirect"
    ],
    
    futureImprovements: [
      "Add shopping cart and checkout functionality",
      "Implement plant care reminders and notifications",
      "Create a plant identification feature using image recognition",
      "Add user reviews and ratings for plants",
      "Integrate a community forum for plant care tips",
      "Add wishlist functionality for favorite plants",
      "Implement seasonal plant recommendations",
      "Add care guides with watering schedules"
    ],
    
    features: [
      "Responsive layout with persistent Navbar and Footer",
      "Browse top-rated indoor plants from JSON data",
      "Protected Plant Details and My Profile routes",
      "Firebase Authentication (Email/Password, Google Sign-In)",
      "Forgot Password functionality with Gmail redirect",
      "Profile update using Firebase updateProfile()",
      "Password show/hide toggle on Login and Signup",
      "Password validation for security",
      "Beautiful plant card displays with ratings",
      "Smooth navigation and user experience",
      "Mobile-responsive design"
    ],
  },
]
