import React, { useState } from "react";

const Carousel = ({ mediaFiles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // Vérification si mediaFiles est nul ou vide
    if (!mediaFiles || mediaFiles.length === 0) {
        return <p>No media available</p>; // Message à afficher si aucun média n'est disponible
    }

    const handleNext = () => {
        if (currentIndex < mediaFiles.length - 1) {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setIsFading(false);
            }, 300); // Durée de l'animation
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex - 1);
                setIsFading(false);
            }, 300); // Durée de l'animation
        }
    };

    const renderMedia = () => {
        const currentFile = mediaFiles[currentIndex];
        if (currentFile.type === 'image') {
            return (
                <img
                    src={currentFile.url}
                    alt=""
                    className={`w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded-t transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                    }`}
                />
            );
        } else if (currentFile.type === 'video') {
            return (
                <video
                    controls
                    className={`w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded-t transition-opacity duration-300 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    <source src={currentFile.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }
    };

    return (
        <div className="relative">
            {renderMedia()}

            {/* Bouton Précédent */}
            <button
                className={`absolute top-1/2 left-0 transform text-white font-bold text-lg -translate-y-1/2 bg-light-blue p-2 rounded-full ${
                    currentIndex === 0 ? 'opacity-0' : ''
                }`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
            >
                &lt;
            </button>

            {/* Bouton Suivant */}
            <button
                className={`absolute top-1/2 right-0 transform text-white font-bold text-lg -translate-y-1/2 bg-light-blue p-2 rounded-full ${
                    currentIndex === mediaFiles.length - 1 ? 'opacity-0' : ''
                }`}
                onClick={handleNext}
                disabled={currentIndex === mediaFiles.length - 1}
            >
                &gt;
            </button>

            {/* Numéro du média actuel sur le nombre total */}
            <div className="absolute bottom-2 right-4 bg-black text-white text-sm px-2 py-1 rounded">
                {currentIndex + 1} / {mediaFiles.length}
            </div>
        </div>
    );
};

export default Carousel;
