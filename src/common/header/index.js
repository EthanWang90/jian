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
                        <CSSTransition
                            in={this.props.isFocus}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.isFocus? 'isFocus': ''}
                                onFocus={this.props.onFocusHandler}
                                onBlur={this.props.onBlurHandler}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.isFocus? 'iconfont isFocus': 'iconfont'}>&#xe60e;</i>
                        {this.searchInfoShow(this.props.isFocus)}
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

    searchInfoShow = (isShow) => {
        if (isShow){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>    
                    </SearchInfoTitle>
                    <div>
                        {this.props.list.map((item)=>{
                            return(
                                <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            )
                        })}                    
                    </div>
                </SearchInfo>
            )
        } else {
            
        }
    }

}

const mapStateToProps=(state)=>{
    return {
        isFocus: state.header.isFocus,
        list: state.header.searchList,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onFocusHandler(){
            dispatch(actionCreators.showHotSearch(dispatch));
            dispatch(actionCreators.searchFocus());
        },
        onBlurHandler(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);