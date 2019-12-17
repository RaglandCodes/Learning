import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    //e.preventDe
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    //e.preventDefault();
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        console.dir(data);
      });
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <label>Title </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <br /> <br />
          <label>Body </label>
          <textarea name="body" value={this.state.body} onChange={this.onChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
