import React from 'react';
import {
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
} from './style';
import {CSSTransition} from 'react-transition-group';
import { connect }from 'react-redux';
import * as actionCreators from './store/actionCreators';

const searchInfoShow = (isShow) => {
    if (isShow){
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>    
                </SearchInfoTitle>
                <div>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </div>
            </SearchInfo>
        )
    } else {
        
    }
}

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
                    {/* <SearchInfo>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>    
                        </SearchInfoTitle>
                        <div>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                        </div>
                    </SearchInfo> */}
                    {searchInfoShow(props.isFocus)}
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
        isFocus: state.header.isFocus
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onFocusHandler(){
            dispatch(actionCreators.searchFocus());
        },
        onBlurHandler(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);