import React from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style';
import {CSSTransition} from 'react-transition-group';
import { connect }from 'react-redux';

const Header = (props) => {
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
                    <CSSTransition
                        in={props.isFocus}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.isFocus? 'isFocus': ''}
                            onFocus={props.onFocusHandler}
                            onBlur={props.onBlurHandler}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.isFocus? 'iconfont isFocus': 'iconfont'}>&#xe60e;</i>
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

const mapStateToProps=(state)=>{
    return {
        isFocus: state.isFocus
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onFocusHandler(){
            const action = {
                type: "search_focus"
            };
            dispatch(action);
        },
        onBlurHandler(){
            const action = {
                type: "search_blur"
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);