import React, { Component } from 'react'
import { Collapse } from 'antd';
import './style.css'

import WebView from './Components/Views/WebView';
import MobileView from './Components/Views/MobileView'
import SearchInput from './Components/SearchInput';

class ClientHeader extends Component {
    state={
        collapseSearch: '0',
        auth: false
    };

    onMobileSearchCollapse = () => {
        this.setState({ 
            collapseSearch: this.state.collapseSearch === '1' ? '0' : '1' 
        });
    };

    handleSingIn = () => {
        this.setState({
            auth: true
        })
    }

    render(){
        const Panel = Collapse.Panel;

        return (
            <div id='client-header-container'>
                <div className='hidden-sm'>
                    <WebView handleSingIn={ this.handleSingIn } auth={ this.state.auth }/>
                </div>
                <div className='visible-sm'>
                    <MobileView collapse={ this.onMobileSearchCollapse } />
                </div>
                <div id='mobileview-header-search' className='col-12 visible-md'>
                    <Collapse
                        className='col-12'
                        activeKey={[this.state.collapseSearch]}
                        expandIcon={({ isActive }) =>null}
                        bordered={false}
                    >
                        <Panel key='1'>
                            <SearchInput/>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
};

export default ClientHeader;