/* eslint-disable react/jsx-no-comment-textnodes */
import "../styles/our-approach.scss";

const OurApproach = () => {
    return (
        <section className="approach">
            <h2 className="heading">Our Approach: Simple, Streamlined, Successful</h2>
            <div className="stepContainer">
                <div className="stepCard">
                    <p className="stepNumber">// STEP 1</p>
                    <h3 className="stepTitle">Subscribe & Request</h3>
                    <p className="stepDescription">
                        Become a part of our network by subscribing to our services. Once you&apos;re on board, simply submit your request
                        for a new project, and we’ll get started on turning your vision into reality.
                    </p>
                </div>
                <div className="stepCard">
                    <p className="stepNumber">// STEP 2</p>
                    <h3 className="stepTitle">Design & Build</h3>
                    <p className="stepDescription">
                        Our team gets to work, crafting bespoke designs and developing the core functionality of your project. From the
                        initial concept to full implementation, we focus on creating solutions that are...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
