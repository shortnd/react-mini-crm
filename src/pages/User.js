import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import Layout from "../layouts/Layout"

class User extends React.Component {
  state = {
    user: {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props)
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
