import React, { useEffect } from 'react';

const LinkedInBadge = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        script.type = "text/javascript";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on unmount
        };
    }, []);

    return (
        <div
            class="badge-base LI-profile-badge"
            data-locale="th_TH"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="krittapop-manupornprapa"
            data-version="v1">
            <a
                class="badge-base__link LI-simple-link"
                href="https://th.linkedin.com/in/krittapop-manupornprapa?trk=profile-badge"
            >
            </a>
        </div>
    );
};

export default LinkedInBadge;
