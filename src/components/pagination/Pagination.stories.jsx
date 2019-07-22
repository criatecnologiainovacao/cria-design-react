import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from ".";

storiesOf('Dados|Pagination', module)
    .add('default', () => {
        return (
            <div className="first">
                <div className="block">
                    <span className="demonstration">When you have few pages</span>
                    <Pagination layout="prev, pager, next" total={50} />
                </div>
                <div className="block">
                    <span className="demonstration">When you have more than 7 pages</span>
                    <Pagination layout="prev, pager, next" total={1000}/>
                </div>
            </div>
        )
    })

    .add('small pagination', () => {
        return ( <Pagination layout="prev, pager, next" total={50} small={true} /> )
    });


