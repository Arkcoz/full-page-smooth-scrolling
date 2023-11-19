import React from 'react'
import useNav from '../hooks/useNav';

const FourthSection = () => {
    const fourthSectionRef = useNav("fourth");

    return (
        <section
            ref={fourthSectionRef}
            id="fourth-section"
        >
            <div>Fourth  Section</div>
        </section>
    )
}

export default FourthSection