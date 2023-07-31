import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed-bottom fixed-end d-flex justify-content-end align-items-end p-3">
            {showButton && (
                <button
                    id="scrollToTopBtn"
                    className="btn btn-primary"
                    onClick={scrollToTop}
                >
                    <i className="bi bi-chevron-double-up"></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
