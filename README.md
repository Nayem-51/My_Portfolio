# My Portfolio

A professional and responsive portfolio website built with Next.js 14, Tailwind CSS, and JavaScript.

## Features

- ✨ Modern and premium UI design with glassmorphism effects
- 📱 Fully responsive across all devices (mobile, tablet, desktop)
- 🎨 Beautiful gradient color scheme with animations
- 🚀 Fast performance with Next.js 14
- 📊 Skills visualization with progress bars
- 🎓 Education and Experience sections
- 💼 Project showcase with detailed project pages
- 📧 Contact section with multiple contact methods
- 🔗 Social media integration

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript
- **Icons:** React Icons
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd My_Portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update your personal information in `data/personal-info.js`:
- Name and designation
- About me sections
- Contact details
- Social media links
- Education history
- Work experience

### Skills

Modify your skills in `data/skills.js`:
- Add/remove skill categories
- Update skill names and proficiency levels

### Projects

Update your projects in `data/projects.js`:
- Add your actual projects
- Include project descriptions, tech stacks, and links
- Add project images to `/public/projects/`

### Profile Photo

Replace `/public/nayem.jpg` with your professional photo.

### Resume

Add your resume PDF to `/public/resume.pdf` for the download button to work.

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with one click

## Project Structure

\`\`\`
My_Portfolio/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles
│   └── projects/
│       └── [slug]/
│           └── page.js    # Dynamic project detail pages
├── components/
│   ├── Navbar.js          # Navigation bar
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills section
│   ├── Education.js       # Education section
│   ├── Experience.js      # Experience section
│   ├── Projects.js        # Projects section
│   ├── ProjectCard.js     # Project card component
│   ├── Contact.js         # Contact section
│   ├── Footer.js          # Footer
│   └── SocialLinks.js     # Social media links
├── data/
│   ├── personal-info.js   # Personal information and content
│   ├── skills.js          # Skills data
│   └── projects.js        # Projects data
├── public/
│   ├── nayem.jpg          # Your profile photo
│   ├── resume.pdf         # Your resume (add this)
│   └── projects/          # Project images
└── package.json
\`\`\`

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Nayem Talukdar - [GitHub](https://github.com/Nayem-51) | [LinkedIn](https://www.linkedin.com/in/nayem-talukdar/)
