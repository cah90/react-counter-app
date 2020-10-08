import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 0,

    imageUrl: 'https://picsum.photos/200',

    styles: {
      fontSize: 40,
      fontWeight: "bold"
    },

    tags: ["tag1"]
   }

   constructor() {
     super();
     this.handleIncrement = this.handleIncrement.bind(this)
   }

   renderTags() {
     if(this.state.tags.length === 0) return <p>There is no tags!</p> 
   }

   handleIncrement() {
     console.log('clicked', this)
   }

  render() { 
    return ( 
    <React.Fragment>
      <img src={this.state.imageUrl} alt=""/>
      <span style={this.state.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span> 
      
      {this.state.tags.length === 0 && "Please, create a new tag!"}
      {this.renderTags()}
      <ul> { this.state.tags.map( tag  => <li key={tag} >{ tag }</li>) }</ul>

      <button onClick={ this.handleIncrement } style={ {backgroundColor:"pink"} } className="btn btn-secondary btn-sm">Increment</button>
      
    </React.Fragment> 
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const{count} = this.state;
    return count === 0 ? "Zero" : count;
  }

}
 
export default Counter;