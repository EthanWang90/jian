import React from 'react';
import {
    HomeContainer,
    HomeLeft,
    HomeRight,
} from './style'

class Home extends React.Component{
    render(){
        return(
            <HomeContainer>
                <HomeLeft>
                    <img className="image-frame" src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeContainer>
        )
    }
}

export default Home;