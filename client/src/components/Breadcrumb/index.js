import React from 'react'
import { Breadcrumb, Icon } from 'antd'

const BreadcrumbRoute = props => {
    let { routes } = props;
    let count=0, rotueArr=[];

    for( let i in routes ){ // spliting route from /
        if( routes[i] === '/' ){
            count += 1;
            let route = routes.split('/')[count];
            if( route !== '' ){
                rotueArr.push( route );
            }
        }
    };
 
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href='/'><Icon type='home'/></a>
            </Breadcrumb.Item>

            { rotueArr.map(( route, i ) => {
                return(
                    <Breadcrumb.Item key={ route+i }>
                        <a href={`${route}`}>
                            { route.charAt(0).toUpperCase() + route.slice(1) }
                        </a>
                    </Breadcrumb.Item>
                )
            })}

        </Breadcrumb>
    )
};

export default BreadcrumbRoute;