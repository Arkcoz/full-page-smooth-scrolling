import React from 'react'
import useNav from '../hooks/useNav';

const SecondSection = () => {
    const secondSectionRef = useNav("second");

    return (
        <section
            ref={secondSectionRef}
            id="second-section"
        >
            <div>Second Section</div>
        </section>
    )
}

export default SecondSection