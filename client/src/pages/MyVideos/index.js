import React, { Component } from 'react'
import ClientHeader from '../../components/Headers/ClientHeader'
import ClientFooter from '../../components/Footers/ClientFooter';
import BodyHeader from '../../components/BodyHeader'
import ContentBody from './Components/ContentBody'
import NewsAlert from './Components/NewsAlert'
import HeaderMenu from './Components/HeaderMenu'

class MyVideos extends Component {
    state={
        seletedMenu: 'videos'
    }

    selectMenu = e => {
        this.setState({
            seletedMenu: e.key
        });
    };

    render(){
        return (
            <div className='col-12 p-0'>
                <ClientHeader/>
                
                <BodyHeader 
                    title={'My Videos'}
                    content={ 
                        <HeaderMenu   
                            selectMenu={ this.selectMenu }
                            selected={ this.state.seletedMenu }
                        />
                    }
                />

                <NewsAlert message={'Invite a friend and receive $20 discount.'}/>

                <ContentBody/>

                <ClientFooter/>
            </div>
        )
    }
};

export default MyVideos;