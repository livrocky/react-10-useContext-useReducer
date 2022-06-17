// const Login = () => {
//   const [usernameValue, setUsernameValue] = useState('');
//   const [passwordValue, setPasswordValue] = useState('');

//   function usernameEnterHandler(event) {
//     setUsernameValue(event.target.value);
//   }

//   function passwordEnterHandler(event) {
//     setPasswordValue(event.target.value);
//   }

//   return (
//     <div>
//       <form className='login'>
//         <label htmlFor='username'></label>
//         <input onChange={usernameEnterHandler} value={usernameValue} type='text' placeholder='Username' id='username' />
//         <label htmlFor='password'></label>
//         <input onChange={passwordEnterHandler} value={passwordValue} type='password' placeholder='Password' id='password' />
//         <button className='lgn-btn'>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
function Login({}) {
  function handleLogin(e) {
    e.preventDefault();
    console.log('react is in control');
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor='username'>Enter Username</label>
        <input type='text' placeholder='Username' id='username' />
        <label htmlFor='password'>Enter Password</label>
        <input type='password' placeholder='Password' id='password' />
        <button className='lgn-btn'>Login</button>
      </form>
    </div>
  );
}

export default Login;
