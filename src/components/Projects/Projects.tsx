import { m } from "framer-motion"

const projects = [

    {
        title: 'WitnessChain Analytics Dashboard',
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tellus vel sapien condimentum efficitur. Vivamus erat augue, dictum tincidunt libero ut, accumsan luctus odio. Aenean tincidunt aliquet urna, at molestie libero fermentum ut. Aliquam malesuada nisi vel nisl ultrices congue. Vivamus non dolor risus. In quis nisi a ipsum sagittis iaculis. Mauris felis urna, porta sed venenatis sit amet, commodo id erat. Pellentesque neque odio, convallis a ligula ac, vehicula posuere metus. Maecenas gravida eros sed leo pellentesque, et sollicitudin massa finibus. Vivamus nunc enim, vulputate et ullamcorper quis, malesuada non risus. Cras in ex vel augue pretium placerat suscipit id turpis. Donec ac posuere tellus. In ac urna sed quam feugiat luctus id sed ante. Nullam vel tincidunt nibh.",
        buttonText:" check out tha analytics dashboard"
    },
    {
        title: 'WitnessChain Analytics Dashboard',
        description:" yadadadadada",
        buttonText:" check out tha analytics dashboard"
    },    {
        title: 'WitnessChain Analytics Dashboard',
        description:" yadadadadada",
        buttonText:" check out tha analytics dashboard"
    },    {
        title: 'WitnessChain Analytics Dashboard',
        description:" yadadadadada",
        buttonText:" check out tha analytics dashboard"
    },    {
        title: 'WitnessChain Analytics Dashboard',
        description:" yadadadadada",
        buttonText:" check out tha analytics dashboard"
    },
]
const Projects =() => {
    return <>
        <div className="section width-[50%] my-5">
            <h1 className="text-8xl">Let's work together.</h1>
            <p className="text-3xl">
            I love challenging myself to build interactive and scalable systems, single-page applical
            From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL. 
            I help awesome people to build ambitious yet accessible web projects - the wilder, the better.
            </p>
            <button> Learn more about my approach to work</button>
        </div>
        <div className="section">
            <h1 className="text-8xl">My recent projects.</h1>
            <div>
                    {
                        projects.map((project)=> {
                            return <>
                                <div>
                                    <h2 className="projectTitle bold text-5xl py-10">{project.title}</h2>
                                    <p> {project.description}</p>
                                    <button>{project.buttonText} </button>
                                </div>
                            </>
                        }
                        )
                    }
            </div>
        </div>
    </>
}
export default Projects;