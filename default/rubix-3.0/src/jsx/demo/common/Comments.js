/**
 * Created by rajesh on 9/11/15.
 */
import React, { Component } from 'react';




export class CommentBox extends Component{
    render(){
        return (
        <div><h1>Comments</h1>
            <CommentList data={this.props.data}></CommentList>
            <CommentForm></CommentForm>
        </div>);
    }
}

export class CommentForm extends Component{
    render(){
        return (<div>
            Hello! world! Iam a Comment Form
        </div>);
    }
}

export class CommentList extends Component {
    render(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        })
        return (<div>
            {commentNodes}
        </div>);
    }
}

export class Comment extends Component{
    rawMarkUp(){
        var rawMarkUp = marked(this.props.children.toString(),{sanitize:true});
        return {__html: rawMarkUp};
    }

    render(){
        return (<div>
            <h2>{this.props.author}</h2>
            <span dangerouslySetInnerHTML = {this.rawMarkUp()}></span>
        </div>);
    }
}