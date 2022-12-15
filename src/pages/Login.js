import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import '../App.css';
import initAuth from '../firebase/firebase.init'

initAuth();
const auth = getAuth();

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const emailFieldHandler = e => {
        setEmail(e.target.value);
    }

    const passwordFieldHandler = e => {
        setPassword(e.target.value);
    }

    const formHandler = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="App">
            <div className="vh-100 bg-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card border-0 rounded-4" style={{ opacity: '85%', backgroundColor: '#FDF9F6' }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-center mb-5 fw-bold">Welcome back! Please login</h2>

                                        <form onSubmit={formHandler}>
                                            <div className="form-outline mb-4">
                                                <input onBlur={emailFieldHandler} type="email" id="form3Example3cg" className="form-control" required />
                                                <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input onBlur={passwordFieldHandler} type="password" id="form3Example4cg" className="form-control" required />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>

                                            <div className="text-danger">{error}</div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success btn-block text-light">Login</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
