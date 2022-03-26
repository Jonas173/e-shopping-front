import React, { Component } from 'react';
import internal from 'stream';
import { isThisTypeNode } from 'typescript';

type params = {
    stars: Number;
};

export class Rating extends Component<params, {}> {
    render(): React.ReactNode {
        let container = <div></div>;

        return <div>
            ⭐⭐⭐⭐⭐
        </div>
    }
}

export default Rating