const Research = () => {
    return (
        <div className="my-8">
            <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold space-x-1">Research Interest and Experience</h1>
            </div>
            <div className="w-full mb-5">
                <h1 className="text-xl md:text-2xl font-bold border-b-2 pb-2 mb-2 text-[#494E52]">Research Interest</h1>
                <p className="text-base md:text-xl lg:text-lg mt-1 text-justify">Computer Vision, Machine Learning, Deep Learning, Dataset Curation, Data Annotation, Image Segmentation, NLP, Knowledge Graphs, Data Science.</p>
            </div>
            <div className="w-full mb-7">
                <h1 className="text-xl md:text-2xl font-bold border-b-2 pb-2 mb-2 text-[#494E52]">Accomplished / Ongoing Work</h1>
                <p className="text-base md:text-xl lg:text-lg mt-1">Accomplished work of dataset curation and line/word segmentation is the extended version of the undergraduate thesis. The project will be completed with the ongoing recognition work.</p>
                <ul className="ml-8 mt-2 list-disc">
                    <li className="text-base md:text-[18px] mb-1"><span className="font-bold">BN-HTRd <a className="text-blue-600" target="blank_" href="https://data.mendeley.com/datasets/743k6dm543/4">[Link]</a>: </span> The largest and most comprehensive dataset for Bangla handwriting recognition and document segmentation to date.</li>
                    <li className="text-base md:text-[18px] mb-1"><span className="font-bold">BN-DRIHSTI <a className="text-blue-600" target="blank_" href="https://github.com/sheikhjubaer/BN-DRISHTI">[Github]</a>: </span>A state-of-the-art hybrid approach for line/word segmentation from the handwritten document images.</li>
                    <li className="text-base md:text-[18px] mb-1"><span className="font-bold">BN-WordRec: </span>Word Recognition for End-to-End Bangla HTR. <span className="font-bold">(ongoing)</span></li>
                </ul>
            </div>
            <div className="w-full mb-7">
                <h1 className="text-xl md:text-2xl font-bold border-b-2 pb-2 mb-2 text-[#494E52]">Accepted Publication</h1>
                <p className="text-base md:text-lg mt-1 text-[#494E52] font-bold"><span className="text-black">BN-DRISHTI:</span> Bangla Document Recognition through Instance-level Segmentation of Handwritten Text Images</p>
                <p className="text-sm md:text-lg mt-2"><span className="font-bold">Sheikh Mohammad Jubaer</span>, Nazifa Tabassum, Md Ataur Rahman & Mohammad Khairul Islam </p>
                <p className="text-sm md:text-lg mt-1 italic">ICDAR 2023 International Workshop on Machine Learning (4th edition) (WML), San José, California, USA, August 26, 2023.</p>
                <p className="text-sm md:text-lg mt-1 font-semibold">[
                    <a href="https://link.springer.com/chapter/10.1007/978-3-031-41501-2_14" target="blank_" className="text-blue-600">Publication</a>] [<a href="https://arxiv.org/abs/2306.09351" target="blank_" className="text-blue-600">arXiv</a>] [<a href="https://github.com/crusnic-corp/BN-DRISHTI" target="blank_" className="text-blue-600">Code</a>] [<a href="https://youtu.be/ODOgS5ywvqw?si=uxvmWHCjXvLIZ1aG" target="blank_" className="text-blue-600">Demo Presentation</a>] [<a href="https://docs.google.com/presentation/d/1TVLSf_N9_sE9drp3IW_xMHjEbRz22eO7/edit" target="blank_" className="text-blue-600">Presentation Slides</a>] [<span onClick={() => document.getElementById('my_modal_3').showModal()} className="text-blue-600">Certificate</span>]
                </p>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal p-0">
                <div className="modal-box w-full">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <img className="w-[100%]" src="https://i.ibb.co/frjT4hd/certificate.png" alt="certificate" />
                </div>
            </dialog>

            <div className="w-full mb-7">
                <h1 className="text-xl md:text-2xl font-bold border-b-2 pb-2 mb-2 text-[#494E52]">Skill Sets</h1>
                <ul className="ml-8 mt-2 list-disc">
                    <li className="text-base md:text-[18px] mb-1"><span className="font-bold">Programming:</span> Python, Matlab, PHP, C, Java, HTML, CSS, JavaScript, SQL.</li>
                    <li className="text-base md:text-[18px] mb-1"><span className="font-bold">AI/ML Tools:</span> Tensorflow, Keras, Pandas, PyTorch, NumPy, Scikit‐learn, Roboflow, YOLO.</li>
                    <li className="text-base md:text-[18px] mb-1"><span className="font-bold">Miscellaneous:</span> Windows, Shell (Bash), LaTeX, Microsoft Office, Firebase, Git.</li>
                </ul>
            </div>
        </div>
    );
};

export default Research;