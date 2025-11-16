export const profile = {
  name: 'Sourav Sarker',
  dob: '1997-07-22',
  phone: '+8801765651957',
  title: 'Software Engineer',
  email: 'sourav39.dev@gmail.com',
  address: 'Dhaka, Bangladesh',
  socials: {
    stackoverflow: 'https://stackoverflow.com/users/11635804/sourav',
    linkedin: 'https://www.linkedin.com/in/sourav-sarker-6a9029b8/',
    twitter: 'https://x.com/ssarker95',
    instagram: 'https://www.instagram.com/_sarker/',
    github: 'https://github.com/sarker39',
    facebook: 'https://www.facebook.com/sarker.sourav.7/',
  },
};

export const projects: Project[] = [
  // {
  //   name: 'CardioVisual',
  //   image: 'https://picsum.photos/200/150',
  //   downloads: '100k',
  //   appStoreLink: 'https://apps.apple.com/us/app/cardiovisual-heart-health/id1009028152',
  //   subHeading: 'Health Education Application',
  //   playStoreLink: 'https://play.google.com/store/apps/details?id=com.cardiovisual.app',
  // },
  // {
  //   name: 'Rewaa POS',
  //   image: 'https://picsum.photos/200/150',
  //   downloads: '6k',
  //   subHeading: 'Retail Management Software',
  //   playStoreLink: 'https://play.google.com/store/apps/details?id=com.rewaatech.pos',
  //   appStoreLink:
  //     'https://apps.apple.com/us/app/%D9%86%D9%82%D8%A7%D8%B7-%D8%A7%D9%84%D8%A8%D9%8A%D8%B9-%D9%85%D9%86-%D8%B1%D9%88%D8%A7%D8%A1-rewaa-pos/id1658257539',
  // },
  // {
  //   name: 'MyGolf2u',
  //   image: 'https://picsum.photos/200/150',
  //   downloads: '10k',
  //   subHeading: 'A Better Golfing Experience',
  //   playStoreLink: 'https://play.google.com/store/apps/details?id=com.brite.mygolf2u&gl=US',
  //   appStoreLink: 'https://apps.apple.com/us/app/mygolf2u/id1092380543',
  // },
];

export interface Project {
  name: string;
  image: string;
  downloads: string;
  subHeading: string;
  playStoreLink: string;
  appStoreLink: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa?: string;
  description?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface ResearchExperience {
  position: string;
  institution: string;
  duration: string;
  responsibilities: string[];
}

export interface Publication {
  title: string;
  conference: string;
  location: string;
  year: string;
  pages: string;
  doi: string;
}

export const education: Education[] = [
  {
    institution: 'Shahjalal University of Science & Technology, Sylhet',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    duration: 'Mar 2015 — Feb 2019',
    cgpa: '3.28 / 4.00',
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: 'SELISE Bangladesh',
    position: 'Software Engineer',
    duration: 'Apr 2022 — Present',
    responsibilities: [
      'Lead an engineering team of 4',
      'Maintained agile role and developed a Fintech Software which generates close to 1 million Swiss Franc each year for the company. (CHF 1m)',
      'Worked inside a tech team for a Swiss platform for insurance, pension, and broker sectors that enables secure communication and data exchange and with plans to expand into a community-driven marketplace for third-party services and industry digitalization.',
      'Worked in a scale app that has been designed to manage complete financial activities, assets and plans for the Swiss origin people',
    ],
  },
  {
    company: 'Secure Link Services Ltd.',
    position: 'Junior Software Engineer',
    duration: 'Apr 2019 — Mar 2022',
    responsibilities: [
      'Worked in a report generation tool that optimized yearly business for shareholders',
      'Worked in a project management system (like: Trello) for a corporate using MongoDB, Node.js and Socket.io',
    ],
  },
];

export const researchExperience: ResearchExperience[] = [
  {
    position: 'Research Assistant',
    institution: 'Department of Computer Science & Engineering, SUST',
    duration: 'Jan 2018 — Feb 2019',
    responsibilities: [
      'Collaborated with a team of researchers on a project which is focused on building a factoid question answering system in Bengali on a closed domain.',
      'Collected and preprocessed datasets from various sources, ensuring data quality and integrity and implemented and fine-tuned NLP models with open-source ml libraries.',
      'Conducted literature reviews to identify relevant research in different languages and methodologies, contributing the insights to project strategy.',
      'Assisted in designing and conducting experiments, analyzing results, and presenting findings during weekly team meetings.',
      'Presented research progress and results at a NLP regional conference via poster presentation, engaging with peers and receiving constructive feedback.',
      'Published two conference paper on the topic of Classification and question answering system in prominent regional conference of respective field.',
    ],
  },
  {
    position: 'Executive Member',
    institution: 'SUST Natural Language Processing Lab',
    duration: 'July 2018 — June 2019',
    responsibilities: [
      'Collaborating partially with a multidisciplinary team in the SUST NLP lab on building a NER for Bengali Search Engine "Pipilika".',
      'Participating in workshops and seminars arranged by NLP Lab to stay updated with the involved and contemporary topics in NLP and Machine Learning',
    ],
  },
];

export const publications: Publication[] = [
  {
    title: 'Bengali Question Answering System for Factoid Questions: A statistical approach',
    conference: '2019 2nd International Conference on Bangla Speech and Language Processing (ICBSLP)',
    location: 'Sylhet, Bangladesh',
    year: '2019',
    pages: 'pp. 1-5',
    doi: 'doi:10.1109/ICBSLP47725.2019.201512',
  },
  {
    title: 'Classification of Bengali Questions Towards a Factoid Question Answering System',
    conference: '2019 1st International Conference on Advances in Science, Engineering and Robotics Technology (ICASERT)',
    location: 'Dhaka, Bangladesh',
    year: '2019',
    pages: 'pp. 1-5',
    doi: 'doi: 10.1109/ICASERT.2019.8934567',
  },
];

export const technicalSkills = {
  programming: ['C', 'C#', 'Python', 'TensorFlow', 'MATLAB'],
  framework: ['Angular', 'Dotnet'],
  dataAnalysis: ['Pandas', 'NumPy', 'SciPy'],
  tools: ['Git', 'Jupyter Notebook', 'Visual Studio', 'Visual Studio Code', 'MS Office'],
};

export const achievements = [
  {
    title: 'Best Poster',
    description: 'in the poster presentation segment in International Conference on Bangla Speech and Language Processing (ICBSLP-2018)',
  },
  {
    title: 'Runner-up in Bangladesh Mathematical Olympiad (BdMO)',
    description: 'regional phase and 1 time champion in National Earth Olympiad (NEO) arranged by BYEI.',
  },
];

export const testScores = {
  ielts: '6.5',
};

export const languages = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Bengali', proficiency: 'Native' },
  { name: 'Hindi', proficiency: 'Intermediate' },
];

export const googleScholarProfile = 'li3B1oAAAAJ';