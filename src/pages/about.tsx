import Head from "next/head";

export default function About () {
    return(
        <>
        <Head>
            <title>about me</title>
            <meta name="description" content="about" />
        </Head>
        
        <main className="flex gap-5 md:gap-10 md:mt-10 mt-5 flex-col md:flex-row">
            <div className="self-center">
                <img className='md:w-full w-36 rounded-full' src='https://pbs.twimg.com/profile_images/1498682094314311687/-DOihTkC_400x400.jpg'/>
            </div>
            <div>
                <h1 className="font-title text-3xl font-bold">Welcome</h1>
                <p className="description text-gray-500">
                    Hello! I am a junior web developer looking for learning more about computer science in general.
                    <br/>
                    I am primarily interested in backend and the several existing paradigms and languages available to make useful tools. My current technologies include languages such as <span className="active">Javascript, Typescript and Python</span>, along with libraries like <span className="active">React</span> and databases such as <span className="active">MySQL, PostgreSQL and MongoDB.</span>
                    <br/>
                    You can reach me at wrongbyte@pm.me. Also, take a look on my <a href='https://github.com/wrongbyte' className='active inline'>github</a>.
                </p>
            </div>
        </main>
    </>
    )
}