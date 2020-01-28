import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import Layout from "../layouts/Layout"

class User extends React.Component {
  state = {
    user: {}
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    await fetch(`/users/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          user: json.user
        })
      })
    // console.log(id);
  }
  // componentWillMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <Layout>
        <h1>User</h1>
      </Layout>
    )
  }
}

// const User = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     fetch(`/api/users/${id}`)
//       .then(async res => res.json())
//       .then(async json => {
//         setUser(json.user)
//       })
//   }, [id])

//   return (
//     <Layout>
//       <h1>{user.name}</h1>
//     </Layout>
//   )
// }

export default User
