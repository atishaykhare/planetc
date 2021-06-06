import React from 'react';
import Showcase from "../Components/showcase/showcase";


const ContentSlider = (props) => {
    const {s, sections, heading} = props;
    return (
        <div style={{textAlign:'center'}}>
            <section className={s.sections}>
                <h3>{heading}</h3>
                <Showcase sections={sections}/>
            </section>
        </div>
    );
};

export default ContentSlider;