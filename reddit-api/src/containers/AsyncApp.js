import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    selecSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions';
import Picker from '../componets/Picker';
import Posts from '../componets/Posts';


class AsyncApp extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.handleRefreshClick =this.handleRefreshClick.bind(this)
    }

    componentDidMount(){
        const {dispatch,selecSubreddit}=this.props
        dispatch(fetchPostsIfNeeded(selecSubreddit))
    }

    componentWillUpdate(prevProps){
        if (this.props-selecSubreddit !== prevProps.selecSubreddit){
            const {dispatch,selecSubreddit}=this.props
            dispatch(fetchPostsIfNeeded(selecSubreddit))
        }
    }

    handleChange(nextSubreddit){
        this.props.dispatch(selecSubreddit(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
    }

    handleRefreshClick(e){
        e.preventDefault()

        const {dispatch,selecSubreddit}=this.props
        dispatch(invalidateSubreddit(selecSubreddit))
        dispatch(fetchPostsIfNeeded(selecSubreddit))
    }

    render(){
        const {selecSubreddit,posts, isFetching, lastUpdate}=this.props
        return(
            <div>
                <Picker
                    value={selecSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
                />
                <p>
                    {lastUpdate &&(
                        <span>
                            Último update en {new Date(lastUpdate).toLocaleDateString()}.{' '}
                        </span>
                    )}
                    {!isFetching &&(
                        <button onClick={this.handleRefreshClick} style={{backgroundColor:"pink"}}>Refresh</button>
                    )}
                </p>
                {isFetching && posts.lenght === 0 && <h2>Loading...</h2>}
                {isFetching && posts.lenght === 0 && <h2>Empty.</h2>}
                {posts.lenght >0 &&(
                    <div style={{opacity: isFetching ? 0.5: 1}}>
                    <Posts posts={posts}/>
                    </div>
                )}
            </div>
        )
    }
}

AsyncApp.propTypes={
    selecSubreddit:PropTypes.string.isRequired,
    posts:PropTypes.array.isRequired,
    isFetching:PropTypes.bool.isRequired,
    lastUpdate:PropTypes.number,
    dispatch:PropTypes.func.isRequired
}

function mapStateToProps(state){
    const {selecSubreddit,postsBySubreddit}= state
    const {isFetching,lastUpdate,items:posts}= postsBySubreddit[
        selecSubreddit
    ] || {
        isFetching:true,
        items:[]
    }

    return{
        selecSubreddit,
        posts,
        isFetching,
        lastUpdate
    }
}

export default connect(mapStateToProps)(AsyncApp);