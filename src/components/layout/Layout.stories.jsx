import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Layout from '.'

export const actions = {
    onClick: action('Clicked')
};

const rowHeight = {
    height: '100px',
    border: 'solid black 1px',
    'background-color': '#595757'
};

const divInside = {
    height: '10px',
    width: '10px',
    'background-color': 'black'
};

const gray = [
    {
        'background-color': '#595757',
        'height': '40px',
        'margin-bottom': '20px',
        'border-radius': '5px',
        'color': 'white',
        'text-align': 'center'
    },
    {
        'background-color': '#757474',
        'height': '40px',
        'margin-bottom': '20px',
        'border-radius': '5px',
        'color': 'white',
        'text-align': 'center'
    },
    {
        'background-color': '#9b9b9b',
        'height': '40px',
        'margin-bottom': '20px',
        'border-radius': '5px',
        'color': 'white',
        'text-align': 'center'
    }
];

const fixture = (gutter, span) => {
    return (
        <Layout.Row gutter={gutter}>
            <Layout.Col span={span}>
                <div style={gray[0]}/>
            </Layout.Col>
            <Layout.Col span={span}>
                <div style={gray[2]}/>
            </Layout.Col>
            <Layout.Col span={span}>
                <div style={gray[0]}/>
            </Layout.Col>
            <Layout.Col span={span}>
                <div style={gray[1]}/>
            </Layout.Col>
        </Layout.Row>
    )
};

storiesOf('Básicos|Layout', module)
    .add('default', () => {
             return (
                 <div>
                     <Layout.Row><Layout.Col>
                         <div style={gray[0]}/>
                     </Layout.Col></Layout.Row>
                     <Layout.Row>
                         <Layout.Col span="12">
                             <div style={gray[1]}/>
                         </Layout.Col>
                     </Layout.Row>
                     <Layout.Row>
                         <Layout.Col span="6">
                             <div style={gray[0]}/>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
    .add('gutter', () => {
             return (
                 <div>
                     <Layout.Row gutter="20"><Layout.Col span="24">
                         <div style={gray[0]}/>
                     </Layout.Col></Layout.Row>
                     <Layout.Row gutter="20">
                         <Layout.Col span="12">
                             <div style={gray[1]}/>
                         </Layout.Col>
                         <Layout.Col span="12">
                             <div style={gray[2]}/>
                         </Layout.Col>
                     </Layout.Row>
                     {
                         fixture(20, 6)
                     }
                 </div>
             )
         }
    )
    .add('span', () => {
             return (
                 <div>
                     <Layout.Row><Layout.Col span="24">
                         <div style={gray[0]}/>
                     </Layout.Col></Layout.Row>
                     <Layout.Row>
                         <Layout.Col span="12">
                             <div style={gray[1]}/>
                         </Layout.Col>
                         <Layout.Col span="12">
                             <div style={gray[2]}/>
                         </Layout.Col>
                     </Layout.Row>
                     {
                         fixture(0, 6)
                     }
                 </div>
             )
         }
    )
    .add('type', () => {
             return (
                 <div>
                     <Layout.Row type="flex"><Layout.Col span="24">
                         <div style={gray[0]}/>
                     </Layout.Col></Layout.Row>
                     <Layout.Row type="flex">
                         <Layout.Col span="6">
                             <div style={gray[1]}/>
                         </Layout.Col>
                         <Layout.Col span="6">
                             <div style={gray[2]}/>
                         </Layout.Col>
                     </Layout.Row>
                     <Layout.Row type="flex" justify="end">
                         <Layout.Col span="4">
                             <div style={gray[0]}/>
                         </Layout.Col>
                         <Layout.Col span="4">
                             <div style={gray[2]}/>
                         </Layout.Col>
                         <Layout.Col span="4">
                             <div style={gray[0]}/>
                         </Layout.Col>
                         <Layout.Col span="4">
                             <div style={gray[1]}/>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
    .add('justify', () => {
             const layout = (justifyType = {}) => (
                 <Layout.Row
                     type="flex"
                     {...justifyType}
                 >
                     <Layout.Col span="6">
                         <div style={gray[0]}/>
                     </Layout.Col>
                     <Layout.Col span="6">
                         <div style={gray[1]}/>
                     </Layout.Col>
                     <Layout.Col span="6">
                         <div style={gray[2]}/>
                     </Layout.Col>
                 </Layout.Row>
             );
             return (
                 <div>
                     {
                         layout()
                     }
                     {
                         layout({ justify: 'center' })
                     }
                     {
                         layout({ justify: 'end' })
                     }
                     {
                         layout({ justify: 'space-between' })
                     }
                     {
                         layout({ justify: 'space-around' })
                     }
                 </div>
             )
         }
    )
    .add('xs-sm-md-lg-xl', () => {
             return (
                 <div>
                     <Layout.Row type="flex">
                         <Layout.Col xs="8" sm="6" md="4" lg="3" xl="1">
                             <div style={gray[0]}/>
                         </Layout.Col>
                         <Layout.Col xs="4" sm="6" md="8" lg="9" xl="11">
                             <div style={gray[1]}/>
                         </Layout.Col>
                         <Layout.Col xs="4" sm="6" md="8" lg="9" xl="11">
                             <div style={gray[2]}/>
                         </Layout.Col>
                         <Layout.Col xs="8" sm="6" md="4" lg="3" xl="1">
                             <div style={gray[0]}/>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
    .add('offset', () => {
             return (
                 <div>
                     <Layout.Row gutter="10">
                         <Layout.Col span="6">
                             <div style={gray[0]}/>
                         </Layout.Col>
                         <Layout.Col span="6" offset="6">
                             <div style={gray[1]}/>
                         </Layout.Col>
                     </Layout.Row>
                     <Layout.Row gutter="10">
                         <Layout.Col span="6" offset="6">
                             <div style={gray[0]}/>
                         </Layout.Col>
                         <Layout.Col span="6" offset="6">
                             <div style={gray[1]}/>
                         </Layout.Col>
                     </Layout.Row>
                     <Layout.Row gutter="10">
                         <Layout.Col span="12" offset="6">
                             <div style={gray[0]}/>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
    .add('push', () => {
             return (
                 <div>
                     <Layout.Row justify="end">
                         <Layout.Col span="6" offset="6">
                             <div style={gray[0]}>Sem push</div>
                         </Layout.Col>
                     </Layout.Row>
                     <Layout.Row justify="end">
                         <Layout.Col span="6" offset="6" push="4">
                             <div style={gray[1]}>Push 4</div>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
    .add('pull', () => {
             return (
                 <div>
                     <Layout.Row justify="end">
                         <Layout.Col span="6" offset="6">
                             <div style={gray[0]}>Sem pull</div>
                         </Layout.Col>
                     </Layout.Row>
                     <Layout.Row justify="end">
                         <Layout.Col span="6" offset="6" pull="4">
                             <div style={gray[1]}>Pull 4</div>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
    .add('tag', () => {
             return (
                 <div>
                     <Layout.Row tag="ul">
                         <Layout.Col tag="li">
                             <div style={gray[0]}/>
                         </Layout.Col>
                         <Layout.Col tag="li">
                             <div style={gray[0]}/>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
    .add('align', () => {
             return (
                 <div>
                     <Layout.Row style={rowHeight} type="flex" align="top">
                         <Layout.Col span="8">
                             <Layout.Row style={rowHeight} type="flex" align="top">
                                 <div style={divInside}/>
                             </Layout.Row>
                         </Layout.Col>
                         <Layout.Col span="8">
                             <Layout.Row style={rowHeight} type="flex" align="middle">
                                 <div style={divInside}/>
                             </Layout.Row>
                         </Layout.Col>
                         <Layout.Col span="8">
                             <Layout.Row style={rowHeight} type="flex" align="bottom">
                                 <div style={divInside}/>
                             </Layout.Row>
                         </Layout.Col>
                     </Layout.Row>
                 </div>
             )
         }
    )
;
