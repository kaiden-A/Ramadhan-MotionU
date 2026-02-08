import { handleShare } from "../../../../utils/shareUtils";

function HadithsDetails({ onClose }) {

    const onClickShare = async () => {
        const result = await handleShare(
            'Todays Hadiths',
            'Take A little time and Read!',
        );

        if (result.method === 'clipboard') {
            alert('Link copied to clipboard (Native share not supported)');
        }
    }

    return (
        <>

            <div 
                className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose} // Closes modal when clicking the backdrop
            >
                {/* Stop Propagation prevents the modal from closing when clicking inside the white box */}
                <div 
                    className="modal-content bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-deep-blue">Hadith Explanation</h3>
                            <button 
                                onClick={onClose} 
                                className="modal-close-btn p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="bg-primary/5 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-primary mb-2">
                                    <span className="material-symbols-outlined filled-icon">auto_stories</span>
                                    <span className="text-sm font-bold uppercase" id="hadithDetailDay">Today</span>
                                </div>
                                <p className="text-lg font-medium leading-relaxed text-deep-blue mb-2" id="hadithDetailText">
                                    "The best among you are those who learn the Quran and teach it."
                                </p>
                                <p className="text-sm text-[#617589]" id="hadithDetailSource">Sahih Bukhari</p>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-bold text-deep-blue mb-3">Explanation</h4>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <p className="text-gray-600 leading-relaxed" id="hadithExplanation">
                                        This hadith emphasizes the importance of learning and teaching the Quran. The Prophet Muhammad (peace be upon him) highlighted that the best people are those who not only learn the Quran but also impart its knowledge to others.
                                    </p>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-bold text-deep-blue mb-3">Key Lessons</h4>
                                <div className="grid gap-2">
                                    <div className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-600">The Quran is central to Islamic life and spirituality</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-600">Teaching what we learn multiplies our rewards</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-4 border-t border-gray-100">
                                <button onClick={onClickShare} className="share-hadith-btn w-full flex items-center hover:cursor-pointer justify-center gap-2 bg-primary text-white py-3 px-4 rounded-xl hover:bg-primary/90 transition-colors">
                                    <span className="material-symbols-outlined">share</span>
                                    Share This Hadith
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HadithsDetails;