import React from 'react'
import useNav from '../hooks/useNav';

const ThirdSection = () => {
    const thirdSectionRef = useNav("third");

    return (
        <section
            ref={thirdSectionRef}
            id="third-section"
        >
            <div>Third Section</div>
        </section>
    )
}

export default ThirdSection