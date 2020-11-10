import {
  GrPersonalComputer,
  GrSystem,
  GrWordpress,
  GrReactjs,
} from 'react-icons/gr'
import {
  FaNetworkWired,
  FaHtml5,
  FaBootstrap,
  FaGithubSquare,
} from 'react-icons/fa'
import {
  SiAdobephotoshop,
  SiCss3,
  SiJavascript,
  SiMaterialUi,
  SiTailwindcss,
  SiAdobeillustrator,
  SiFigma,
  SiCisco,
  SiAdobepremiere,
  SiVisualstudiocode,
} from 'react-icons/si'

export const skills = [
  {
    id: 1,
    icon: <GrReactjs />,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using HTML, CSS and React.js',
  },
  {
    id: 2,
    icon: <FaNetworkWired />,
    title: 'Network Administrator',
    about:
      'Maintaining computer networks and solving any problems that may occur with them',
  },
  {
    id: 3,
    icon: <GrSystem />,
    title: 'System Administrator',
    about:
      ' Install, upgrade and monitor software and hardware.Maintaining operating systems, business applications, security tools, web-servers, email, PCs, local and wide area networking both hardware and software and mid-range server hardware.',
  },
  {
    id: 4,
    icon: <SiAdobephotoshop />,
    title: 'Graphic designers',
    about:
      'Visualizing and creating graphics including illustrations, logos, layouts and photos. You’ll be the one to shape the visual aspects of websites, books, magazines, product packaging, exhibitions and more.',
  },
  {
    id: 5,
    icon: <GrWordpress />,
    title: 'WordPress Developers',
    about:
      'Back-end and front-end development, including creating WordPress themes and plugins. They have different programming skills such as namely PHP, HTML5, CSS3, and JavaScript.',
  },
  {
    id: 6,
    icon: <GrPersonalComputer />,
    title: 'Troubleshooting ',
    about:
      ' Troubleshoot software and hardware problems and help our customers install applications and programs.',
  },
]

export const languages = [
  {
    icon: <FaHtml5 />,
    name: 'HTML',
    level: '99',
  },
  {
    icon: <SiCss3 />,
    name: 'CSS',
    level: '75',
  },
  {
    icon: <FaBootstrap />,
    name: 'Bootstrap',
    level: '95',
  },
  {
    icon: <GrReactjs />,
    name: 'ReactJs',
    level: '80',
  },
  {
    icon: <SiJavascript />,
    name: 'JavaScript',
    level: '70',
  },
  {
    icon: <SiMaterialUi />,
    name: 'MATERIAL-UI',
    level: '60',
  },
  {
    icon: <SiTailwindcss />,
    name: 'Tailwind',
    level: '70',
  },
]

export const tools = [
  {
    icon: <SiAdobephotoshop />,
    name: 'Photoshop',
    level: '85',
  },
  {
    icon: <SiFigma />,
    name: 'Figma',
    level: '65',
  },
  {
    icon: <SiAdobeillustrator />,
    name: 'Illustrator',
    level: '45',
  },
  {
    icon: <SiCisco />,
    name: 'Cisco PacketTracer',
    level: '85',
  },
  {
    icon: <SiAdobepremiere />,
    name: 'Adobe PremierePro',
    level: '65',
  },
  {
    icon: <FaGithubSquare />,
    name: 'GitHub ',
    level: '55',
  },
  {
    icon: <SiVisualstudiocode />,
    name: 'Visual Studio Code',
    level: '90',
  },
]
