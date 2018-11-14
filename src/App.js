import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import posts from './posts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: posts,
      posts: posts
    }
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
            <Row className="posts-grid">
              <Col md={4}><a href={post.url}><img className="image" src={ post.post_image_url } /></a></Col>
              <Col className="votes" md={1}>
                <span class="glyphicon glyphicon-triangle-top" aria-hidden="true" />
                {post.votes}
                <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true" />
              </Col>
              <Col md={7}><a href={post.url}><p>{ post.title }</p></a><p>{ post.description }</p><p className="writtenby">Escrito por: <img className="authoravatar" src={ post.writer_avatar_url } /></p></Col>
            </Row>
            )}
          </Col>
        </Row>
    </Grid>
    );
  }
}

export default App;
