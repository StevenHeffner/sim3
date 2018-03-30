import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function Nav (props) {
  // if (this.props.history == '/'){
  return (
    <div>

   {props.username}
   {props.profile_pic}
   <Link to='/dashboard'><button>Home</button></Link>
   <Link to='/post/:postid'> <button>New Post</button></Link>
   <Link to='/'><button>Logout</button></Link>

    </div>
  );
//  }
}

function mapStateToProps(state){
  return{
    username:state.username,
    profile_pic: state.profile_pic
  }
}

export default connect(mapStateToProps) (Nav);