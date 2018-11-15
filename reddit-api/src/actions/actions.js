import fetch from 'cross-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POST'
export const SELECT_SUBREDDIT ='SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selecSubreddit (subreddit){
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit){
    return{
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}


function requestPosts(subreddit){
    return{
        type: REQUEST_POSTS,
        subreddit
    }
}
function receivePosts(subreddit, json){
    return {
        type: RECEIVE_POSTS,
        subreddit,
        //aqui le decimos que en la parte posts los pille del json con su data y de los hijos que tenga me forme la información requerida
        posts: json.data.children.map(child=>child.data),
        receiveAt: Date.now()
    }
}

function fetchPosts(subreddit){
    return dispatch=> {
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response=>response.json())
            .then(json=>dispatch(receivePosts(subreddit,json)))
    }
}

function shouldFetchPosts (state,subreddit){
    const posts = state.postsBySubreddit[subreddit]
    if(!posts){
        return true
    }else if(posts.isFetching){
        return false
    } else{
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit){
    return (dispatch,getState)=>{
        if (shouldFetchPosts(getState(), subreddit)){
            return dispatch (fetchPosts(subreddit))
        }
    }
}








