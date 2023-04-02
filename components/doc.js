import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import { useEffect } from "react";
import styles from "../styles/Home.module.css"
export function Code(props) {
  return (
    <pre className="language-js">
    <code>
       {

          `${props.data}`


      }
    </code>

    </pre>



  );
}
export default function Doc(){

  useEffect(()=>{
    Prism.highlightAll()
  },[])

// let requestpath = `${host}/signup?email=${userEmail}&pwd=${password}`;
  return (
    <div className={styles.sp2}>
      <div className={styles.s2c}>
        <pre className="language-js">
          <code>
            {`//signUp_function [&#36 = $]\n
function userSignUpDb(userEmail, password) {
let requestpath = 'http://0.0.0.0:3009 + /path? + email=&#36{"userEmail"}&pwd=&#36{"password"}
const fetched = await fetch(requestpath, { method: "POST", credentials: "include" }).catch(() => null);
if (fetched) {
  const data = await fetched.json().then(JSON.parse)
  .catch(e => {console.log("Fetch error:",e);return null});
  return data;
}else{
  return {"message":null,"server":false};
}  `}
          </code>
        </pre><br/><br/>

        <pre className="language-js">
          <code>
              {`//server response\n
{
  "email": "hellothere@gmail.com",
  "pwd": "123456789",
  "loginCode": "032130",
  "active": false,
  "created_at": "2023-03-29T07:57:20.967Z",
  "_id": "6423ef60253cecd7741cedb1",
  "__v": 0
}`}
          </code>
        </pre>
        <br/><br/><br/>
      </div>
    </div>
  );
}