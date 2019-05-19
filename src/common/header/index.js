import React from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style';

class Header extends React.Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem> 
                    <NavItem className="right">登录</NavItem> 
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>    
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe60e;</i>
                    </SearchWrapper>                  
                </ Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe7e2;</i>
                        &nbsp;写文章</Button>
                    <Button className="reg">注册</Button>    
                </Addition>      
            </HeaderWrapper>
        )
    }
}

export default Header;