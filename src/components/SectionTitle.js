import React from 'react';

function SectionTitle(props) {
    return (
        <div>
        <h2 className="inline-block text-base md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-color-primary via-color-secondary to-color-tertiary mt-2">
            {props.children}
        </h2>
        </div>
    );
}

export default SectionTitle;