import React from 'react';

function SectionTitle(props) {
    return (
        <div>
        <h2 className="inline-block text-base md:text-2xl font-medium text-color-primary mt-2">
            {props.children}
        </h2>
        </div>
    );
}

export default SectionTitle;