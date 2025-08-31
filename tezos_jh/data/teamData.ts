// data/teamData.ts
export interface Member {
  name: string;
  course: string;
  image: string;
  instagram: string;
  linkedin: string;
  whatsapp: string;
  x: string;
  github: string;
  gmail: string;
  bio: string;
}

export const teamData: Record<string, Member[]> = {
  "Tech Team": [
    {
      name: "John Doe",
      course: "B.Tech CSE, 2nd Year",
      image: "/images/john.jpg",
      instagram: "https://instagram.com/john",
      linkedin: "https://linkedin.com/in/john",
      whatsapp: "https://wa.me/911234567890",
      x: "https://x.com/john",
      github: "https://github.com/john",
      gmail: "mailto:john@gmail.com",
      bio: "Passionate about web development and AI.",
    },
    {
      name: "Sarah Khan",
      course: "B.Tech IT, 3rd Year",
      image: "/images/sarah.jpg",
      instagram: "https://instagram.com/sarah",
      linkedin: "https://linkedin.com/in/sarah",
      whatsapp: "https://wa.me/919876543210",
      x: "https://x.com/sarah",
      github: "https://github.com/sarah",
      gmail: "mailto:sarah@gmail.com",
      bio: "UI/UX enthusiast and frontend developer.",
    },
  ],
  "Social Media Team": [
    {
      name: "Ali Ahmad",
      course: "BBA, 1st Year",
      image: "/images/ali.jpg",
      instagram: "https://instagram.com/ali",
      linkedin: "https://linkedin.com/in/ali",
      whatsapp: "https://wa.me/9191122334455",
      x: "https://x.com/ali",
      github: "https://github.com/ali",
      gmail: "mailto:ali@gmail.com",
      bio: "Handles social media strategy and branding.",
    },
  ],
};