import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
//import profile from './assets/profile.png';


class App extends Component{
    state = { displayBio: false };

/*no need of constructor class and bind method if we use state like the way above and arrow func for toggleDisplayBio*/
    // constructor(){
    //     super();
    //     this.state = { displayBio: false }; /*displayBio is going to be a value which controls whether or not to show this new section in react application; by default putting it false*/
       
    //     console.log('Component this', this);

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

    // }

    // readMore()  {
    //     //this.state.displayBio = true; directly modifying is a bad practice to change the state. hence using setstate().
    //     console.log('readMore this', this);
    //     this.setState({displayBio : true }); /*setstate shows undefined*/

    // }

    // showLess() {
    //     this.setState({displayBio : false });
    // }

    toggleDisplayBio = () => {
        this.setState({displayBio : !this.state.displayBio})
    }


    render() {
       return(
            <div>
                {/* <img src={profile} alt='profile' className='profile' /> */}
                <h1>Hello!</h1>
                <p>My name is Gargi. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                  this.state.displayBio ? (
                   <div>
                       <p>I live in Kolkata, and code everyday.</p>
                       <p>My favourite language is Python and currently learning React.</p>
                       <p>Besides coding, I love travelling, music and exploring cuisine!</p>
                       <button onClick={this.toggleDisplayBio}>Show Less</button>
                  </div>
             ) : (
                 <div>
                     <button onClick={this.toggleDisplayBio}>Read More</button>
                 </div>
        
             )
          }
          <hr />
          <Projects />
          <hr />
          <SocialProfiles />
           </div>
        )
 }
}

export default App;