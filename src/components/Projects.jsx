
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                {/* <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a> */}
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'iNotebook',
        description:'Developed iNotebook using MERN stack  for efficient note management and retrieval. Created a dynamic, responsive UI and robust backend, ensuring seamless user experience and reliable data handling',

        image: {vpn},
        // git:'https://github.com/nithingooud/CoPeople',
        technologies:['MongoDb','Express.js' ,'ReactJS' , 'NodeJS']
    },
    {
        title:'Real Time Chat Application',
        description:'Developed a robust and scalable real-time chat application that allows users to engage in instant messaging with real-time updates providing a seamless communication experience. ',
        image: {copeople},
        technologies:[ 'Node.js', 'Express.js','Socket.IO ']
    },
    {
        title:"Women's Safety App",
        description:"Crafted an Android app capable of promptly notifying guardians, complete with the user's location, in instances of emergency,ensuring swift response and assistance during critical situations",
        image: {copeople},
        
        technologies:[ 'XML', 'Java','Android Studio']
    },
    {
        title:'Resume Builder',
        description:'This project aimed to simplify the process of crafting professional resumes for job seekers Reactjs.',
        image: {copeople},
        technologies:[ 'React JS']
    },
    {
        title:'Diet Consultant Manager',
        description:'Designed a comprehensive software project to streamline and enhance the management processes within the domain of diet consultancy ',
        image: {copeople},
        technologies:[ 'HTML','CSS',"JS",'MongoDB']
    }
    
]

export default Projects