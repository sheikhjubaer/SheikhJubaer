
const Teaching = () => {
    return (
        <div className="my-8">
            <div className="text-center mb-7">
                <h1 className="text-2xl md:text-3xl font-bold space-x-1">Teaching Experience</h1>
            </div>
            <div className="w-full mb-7">
                <h1 className="text-xl md:text-2xl font-bold border-b-2 pb-2 mb-2 text-[#494E52]">Teaching Assistance Experience</h1>
                <p className="text-base md:text-lg mt-1 text-justify">During my undergrad research, we needed a dataset to train our deep learning framework and the size of the dataset had to be big enough for proper model development. So, we needed huge workforce, which we found with the assistance of our junior-level undergrad students. Nevertheless, professor <a href="https://www.essi.upc.edu/dtim/people/ataur" target="blank_" className="text-blue-700 hover:underline font-semibold">Md Ataur Rahman</a> used to conduct two courses: one is <span className="font-bold">Artificial Intelligence (Lab)</span>, another is <span className="font-bold">Neural Network and Fuzzy Logic (Lab)</span>. Therefore, Bangla handwriting and manual Data Annotation task was divided among those enrolled students as one of the course assignments, where me and my lab members were in charge of supervising them and grading their assignments.</p>
                <p className="text-base md:text-lg mt-3 font-bold text-[#494E52]">Our key responsibilities are highlighted below:</p>
                <ul className="ml-8 mt-2 list-disc">
                    <li className="text-base md:text-[18px] mb-1">Conducted lab and discussion sessions for students.</li>
                    <li className="text-base md:text-[18px] mb-1">Graded students' work and provided feedback to students.</li>
                    <li className="text-base md:text-[18px] mb-1">Provided one-on-one support to students, including answering questions and providing additional help if needed.</li>
                    <li className="text-base md:text-[18px] mb-1">Collaborated with the course instructor to ensure that the course met its objectives and that students received the needed support.</li>
                    <li className="text-base md:text-[18px] mb-1">Provided administrative support, such as record keeping and organising course materials.</li>
                </ul>
            </div>
            <div className="w-full mb-7">
                <h1 className="text-xl md:text-2xl font-bold border-b-2 pb-2 mb-2 text-[#494E52]">Programming Tutor</h1>
                <p className="text-base md:text-lg mt-1 text-justify">This experience also came during my undergrad, particularly from my third year, where I started to help students learning programming and the language was Python and Java. This used to be one-to-one session, where my motive was to develop the logical thinking of a student while programming more than learning the coding syntax. Here, I used to have some financial transaction from students, which help me cover a significant amount of my undergrad tuition fees. Moreover, this experience came in handy where I was doing my final year research as Python was the primary tools for us to develop our system pipeline.</p>
            </div>
        </div>
    );
};

export default Teaching;