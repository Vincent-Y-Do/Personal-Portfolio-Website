import monitoring from '../../assets/portfolioPics/monitoring.png'
import gasStation from '../../assets/portfolioPics/gasStation.jpg'
import bulldog from '../../assets/portfolioPics/bulldog.jpg'
import gatheredPeople from '../../assets/portfolioPics/gatheredPeople.jpg'
import websiteDesign from '../../assets/portfolioPics/websiteDesign.jpg'

export const responsiveSettings = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 144 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1440, min: 800 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export const data = [
    {   id:1,
        name: 'Kafkometry',
        img: monitoring,
        description: 'An Kafka Cluster Heatlh monitoring app, designed with a focus on speed.',
        techStack: ['React, ', 'JavaScript, ', 'HTML, ', 'CSS, ', 'Node.js, ', 'Express.js, ', 'Kafka, ', 'Docker, ', 'MongoDB, ','OAuth'],
    },
    {   id:2,
        name: 'Find-My-Fuel',
        img: gasStation,
        description: 'A web application that enables users to find the nearest fuel station based on specific criteria and needs',
        techStack: ['React, ', 'JavaScript, ', 'HTML, ', 'CSS, ', 'Node.js, ', 'Express.js, ','MongoDB, ','Webpack, ','Postgresql'],
    },
    {   id:3,
        name: ' Frenchies',
        img: bulldog,
        description: 'A doggy dating app meant to connect people based on the dog or dogs that they have.',
        techStack: ['React, ', 'JavaScript, ', 'HTML, ', 'CSS, ', 'Node.js, ', 'Express.js, ', 'MongoDB, ', 'OAuth'],
    },
    {   id:4,
        name: 'LFG',
        img: gatheredPeople,
        description: 'A web application designed to allow users to sign up for activities and receive notifications when the required number of participants is reached.',
        techStack: ['React, ', 'JavaScript, ', 'HTML, ', 'CSS, ', 'Node.js, ', 'Express.js, ','MongoDB'],
    },
    {   id:5,
        name: 'Online Portfolio',
        img: websiteDesign,
        description: 'Online portfolio created using React.js and hosted on AWS.',
        techStack: ['React, ', 'JavaScript, ', 'HTML, ', 'CSS'],
    }

];

