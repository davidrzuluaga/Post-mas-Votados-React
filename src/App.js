import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import posts from './posts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts
    }
  }
  voteArrows = (e) => {
    const index = this.state.posts.map(function(e) { return e.id; }).indexOf(Math.floor(e.target.id))
    var postVotes = this.state.posts[index].votes
    e.target.classList.contains("glyphicon-triangle-top") ? postVotes += 1 : postVotes -= 1
    this.setState({
      tasks: this.state.posts.map((post, i) =>
        i === index ? {votes: post.votes = postVotes } : post
      )
    })
  }
  
  render() {
    return (
      <Grid>
        <Row className="">
          <Col md={8} mdOffset={2} >
            <h1>Blog posts populares</h1>
          <div className="general-grid">
            <p>Orden: 
              <Button>Ascendente</Button>
              <Button>Descendente</Button>
            </p>
          </div>
           {this.state.posts.map((post, index) =>  
            <Row className="posts-grid" key={post.id}>
              <Col md={4}><a href={post.url}><img alt={ post.id } className="image" src={ post.post_image_url } /></a></Col>
              <Col className="votes" md={1}>
                <span onClick={this.voteArrows} id={post.id} className="glyphicon glyphicon-triangle-top arrow" aria-hidden="true" />
                {post.votes}
                <span onClick={this.voteArrows} id={post.id} className="glyphicon glyphicon-triangle-bottom arrow" aria-hidden="true" />
              </Col>
              <Col md={7}><a href={post.url}><p>{ post.title }</p></a><p>{ post.description }</p><p className="writtenby">Escrito por: <img alt={ post.id } className="authoravatar" src={ post.writer_avatar_url } /></p></Col>
            </Row>
            )}
          </Col>
        </Row>
    </Grid>
    );
  }
}

export default App;
