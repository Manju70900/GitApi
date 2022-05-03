// import React,{useState,useEffect} from 'react'

// const Home = () => {
//     let [state, setstate] = useState([]);

//     useEffect(() => {
//         window.fetch("https://api.github.com/users", {
//             method: "GET",
//             headers: {
//                 "CONTENT-TYPE": "application/json"
//             },}).then(data => {
//             data.json().then(value => {
//                 setstate(value);
//             })
//         }).catch(err => console.log(err)
//         )
//     }, []);
//     console.log(state)
//   return (
//     <div>Home</div>
//   )
// }

// export default Home



// AJAX XMLHTTP REQUEST

// import React, {Fragment, useState, useEffect } from "react";

// const Home = () => {

//     let [state, setstate] = useState([]);

//     useEffect(() => {
//         let xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://api.github.com/users");
//         xhr.onload = () => {
//             let users = JSON.parse(xhr.response);
//             setstate(users)
//         },

//             xhr.send();

//     }, []);

//     console.log(state)
//   console.log(state);
//     return <div>
//         {state.length === 0 ? "loading" : state.map(user => {
//             return (
//                 <Fragment key={user.id}>
//                     <li>
//                         <img src={user.avatar_url} alt={user.login} />
//                     </li>
//                     <li>{user.login }</li>
//                 </Fragment>
//             )
//         })}

//           </div>;
// };

// export default Home;





// import React, {Fragment, useState, useEffect } from 'react'
// import axios from 'axios'

// const Home = () => {
//     let [state, setstate] = useState([]);

//     useEffect(() => {

//         axios.get("https://api.github.com/users").then(data => {
//             let payload = data.data;
//             setstate(payload)
//         }).catch(err=> console.log(err))

//     }, []);
//     console.log(state)

//      return <div>
//          {state.length === 0 ? "loading" : state.map(user => {
//              return (
//                 <Fragment key={user.id}>
//                      <li>
//                         <img src={user.avatar_url} alt={user.login} />
//                      </li>
//                      <li>{user.login }</li>
//                  </Fragment>
//              )
//          })}

//            </div>;
// };

// export default Home



//example with async and await

// import React, { Fragment, useState, useEffect } from "react";
// import axios from "axios";

// const Home = () => {
//   let [state, setstate] = useState([]);

//   useEffect(() => {
//     let fetchdata = async () => {
//       try {
//         let users = await axios.get("https://api.github.com/users");
//         setstate(users.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchdata();
//   }, []);
//   console.log(state);

//   return (
//     <div>
//       {state.length === 0
//         ? "loading"
//         : state.map(user => {
//             return (
//               <Fragment key={user.id}>
//                <li>
//                   <img src={user.avatar_url} alt={user.login} />
//                 </li>
//                 <li>{user.login}</li>
//               </Fragment>
//             );
//           })}
//     </div>
//   );
// };

// export default Home;














import React, { useState, useEffect } from "react";
import Search from "./Search";
import MainContent from "./Maincontent";
import Axios from "../Apis/Axios";
const Home = () => {
  let [user, setUser] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
         let client_id = " Iv1.c1a929fb67700e42";
         let client_secret = "4332209ec2a8f2c74b37847e5ced3a2083ae8fda";
         let users = await Axios.get(
          `/users/Manju70900?Client_id${client_id}&Client_secret${client_secret}`
        );

        let ReposData = await Axios.get(
          `/users/Manju70900/repos?Client_id${client_id}&Client_secret${client_secret}`
        );
        setLoading(true);
        setUser(users.data);
        setRepos(ReposData.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  let onTermSubmit = async term => {
    try {
      let client_id = " Iv1.c1a929fb67700e42";
      let client_secret = "4332209ec2a8f2c74b37847e5ced3a2083ae8fda";

      let users = await Axios.get(
        `/users/${term}?Client_id${client_id}&Client_secret${client_secret}`
      );

      let ReposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
      setLoading(true);
      setUser(users.data);
      setRepos(ReposData.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <section id="mainBlock">
      <article>
        <Search onTermSubmit={onTermSubmit} user={user} loading={loading} />
        <MainContent user={user} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default Home;









