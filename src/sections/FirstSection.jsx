import React from 'react'
import useNav from '../hooks/useNav'

const FirstSection = () => {
    const firstSectionRef = useNav("first");

    return (
        <section
            ref={firstSectionRef}
            id="first-section"
        >
            <div>First Section</div>
        </section>
    )
}

export default FirstSection