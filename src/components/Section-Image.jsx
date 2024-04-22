import React from "react";

class SectionImage extends React.Component {
    render() {
        return (
            <div className="section-image">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

export default SectionImage;