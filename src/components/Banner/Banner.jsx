import { GrMail } from "react-icons/gr";
import { FaMobileScreen } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row my-6 md:my-14">
            <div className="w-full md:w-1/4 text-center mx-auto mb-4">
                <div className="avatar mb-4 mx-auto">
                    <div className="w-52 md:w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                        <img src="https://i.ibb.co/3sDD9Q0/profile.jpg" alt="Profile" className="rounded-full" />
                    </div>
                </div>
                <div className="block">
                    <h1 className="text-xl mb-0 font-bold">Sheikh Mohammad Jubaer</h1>
                    <p className="text-sm mt-2">Completed (B.Sc in) CSE at Premier University</p>
                    <p className="text-sm mt-2 mb-2">Chittagong, Bangladesh</p>
                    <a href="https://drive.google.com/file/d/1cYzSO2UHRoNTfzvVXtZsE5_TyfeN4RnV/view" target="blank_" className="text-sm mt-4 text-blue-700 font-bold hover:underline">Curriculum Vitae  / Resume</a>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 mx-auto">
                <h1 className="text-xl md:text-2xl font-bold">Sheikh Mohammad Jubaer</h1>
                <p className="text-base md:text-lg mt-4 text-justify">I am unenrolled masters/Phd student currently looking for an opportunity to do a research-based masters, preferably PhD. Previously, I obtained my Bachelor's degree from the <a href="https://cse.puc.ac.bd/" target="blank_" className="text-blue-700 hover:underline font-semibold">Premier University</a>, at Chittagong in Bangladesh. During my undergrad, I developed a keen interest on Artificial Intelligence, Machine learning. Particularly I develop my expertise and enhance my knowledge on <span className="font-bold">Deep learning</span>, <span className="font-bold">Computer Vision</span>, and <span className="font-bold">Image processing</span> while working on my undergrad thesis.</p>
                <p className="text-base md:text-lg mt-4 text-justify">I also have experience on leading a research team of three members, working on our undergrad research and some teaching assistantship, under the supervision of professor <a href="https://www.essi.upc.edu/dtim/people/ataur" target="blank_" className="text-blue-700 hover:underline font-semibold">Md Ataur Rahman</a>. Under his supervision, I conducted a inter interdisciplinary research which helped me to defend my undergrad thesis successfully.</p>
                <p className="text-base md:text-lg mt-4 text-justify">If you would like to connect with me, please drop me an email!</p>
                <p className="text-base md:text-lg mt-4 text-justify font-bold">Contact Details:</p>
                <p className="flex items-center mt-2"><GrMail className="text-2xl mr-3"></GrMail> <span className="text-blue-700 font-semibold">jubaer.puc@gmail.com</span></p>
                <p className="flex items-center mt-2"><FaMobileScreen className="text-2xl mr-2"></FaMobileScreen> <span className="text-blue-700 font-semibold">+880 1839455280</span></p>
                
            </div>
        </div>
    );
};

export default Banner;
















{/* <div className="avatar block">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 block">
                    <img src="https://i.ibb.co/3sDD9Q0/profile.jpg" alt="Profile" className="rounded-full block" />
                </div>
            </div>
            <div className="w-80">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim mollitia, dolor reiciendis laudantium laborum nisi provident. Optio vero quo, porro dicta, possimus nostrum amet iusto, nam beatae laborum maxime?</p>
            </div> */}