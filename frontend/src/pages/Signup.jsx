// import { useState } from "react";
// import { BottomWarning } from "../components/BottomWarning";
// import { Button } from "../components/Button";
// import { Heading } from "../components/Heading";
// import { InputBox } from "../components/InputBox";
// import { SubHeading } from "../components/SubHeading";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// axios.interceptors.request.use((request) => {
//   console.log("Starting Request", request);
//   return request;
// });

// axios.interceptors.response.use((response) => {
//   console.log("Response:", response);
//   return response;
// });

// export const Signup = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   return (
//     <div className="bg-slate-300 h-screen flex justify-center">
//       <div className="flex flex-col justify-center">
//         <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//           <Heading label={"Sign up"} />
//           <SubHeading label={"Enter your infromation to create an account"} />
//           <InputBox
//             onChange={(e) => {
//               setFirstName(e.target.value);
//             }}
//             placeholder="John"
//             label={"First Name"}
//           />

//           <InputBox
//             onChange={(e) => {
//               setLastName(e.target.value);
//             }}
//             placeholder="Doe"
//             label={"Last Name"}
//           />

//           <InputBox
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//             placeholder="harkirat@gmail.com"
//             label={"Email"}
//           />

//           <InputBox
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             placeholder="123456"
//             label={"Password"}
//           />
//           <div className="pt-4">
//             <Button
//               onClick={async () => {
//                 try {
//                   const data = { username, firstName, lastName, password };
//                   const response = await axios.post(
//                     "http://localhost:3001/api/v1/user/signup",
//                      data,
//                     {
//                       headers: {
//                         "Content-Type": "application/json",
//                       },
//                     }
//                   );
//                   localStorage.setItem("token", response.data.token);
//                   navigate("/dashboard");
//                 } catch (error) {
//                   console.log("error during signup", error);
//                 }
//               }}
//               label={"Sign up"}
//             />
//           </div>
//           <BottomWarning
//             label={"Already have an account?"}
//             buttonText={"Sign in"}
//             to={"/signin"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-6 h-max">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="test1000@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                try {
                  const data = { username, firstName, lastName, password };
                  const response = await axios.post(
                    "https://paytm-jq5n.onrender.com/api/v1/user/signup",
                    data,
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                } catch (error) {
                  console.log("error during signup", error);
                }
              }}
              label={"Sign up"}
              className="w-full py-2"
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
