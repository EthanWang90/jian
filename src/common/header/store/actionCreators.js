import axios from 'axios';

const listToStore=(res)=>{
    return {
        type: 'update_list',
        data: res.data.data,
    }
}

export const searchFocus=()=>{
    const action = {
        type: 'search_focus'
    }
    return action
}

export const searchBlur=()=>{
    const action = {
        type: 'search_blur'
    }
    return action
}

export const showHotSearch=(dispatch)=>{
    return (dispatch)=>{
        axios.get('/api/test.json').then((res)=>{
            console.log(res);
            dispatch(listToStore(res));
        });
    }
}