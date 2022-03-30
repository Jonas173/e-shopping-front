import React, { Component } from 'react';

export class Rating extends Component {
    render() {
        let displayedStars = "";
        for (let i = 0; i < this.props.stars; ++i) displayedStars += "⭐";

        return <div>
            {displayedStars}
        </div>
    }
}

export default Rating