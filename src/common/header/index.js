import React from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isFocus: false,
        }
    }

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
                        <NavSearch
                            className={this.state.isFocus? 'isFocus': ''}
                            onFocus={this.onFocusHandler}
                            onBlur={this.onBlurHandler}
                        ></NavSearch>
                        <i className={this.state.isFocus? 'iconfont isFocus': 'iconfont'}>&#xe60e;</i>
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

    onFocusHandler=()=>{
        this.setState({
            isFocus: true,
        })
    }
    
    onBlurHandler=()=>{
        this.setState({
            isFocus: false,
        })
    }
}

export default Header;