import Input from "@/components/input";
import {useCallback, useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(
        () => {
            setVariant((currenvVariant) => currenvVariant === 'login' ? 'register' : 'login')
        },
        [],
    );

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
            <div className=" w-full h-full bg-black lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div
                        className="bg-black px-16 py-16 self-center mt-2 lg:w/2/5 lg:max-w-md rounded-md w-full bg-opacity-70">
                        <h2 className="text-white text-4xl mb-8 font-semibold ">{variant === 'login' ? 'Sign in' : 'Register'}</h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input value={userName} id="username" label="Username" onChange={(e) => {
                                    setUserName(e.target.value)
                                }}/>
                            )}
                            <Input value={email} id="email" label="Email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email"/>
                            <Input value={password} id="password" label="Password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} type="password"/>
                        </div>
                        <button
                            className="bg-red-600 py-3 text-white rounded-md mt-10 w-full hover:bg-red-700 transition">{variant === 'login' ? 'Login':'Sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">{variant === 'login' ? 'Fist time using netflix' : 'Already have an account'} ? <span onClick={toggleVariant}
                                                                                              className="text-white ml-1 hover:underline cursor-pointer">{variant === 'login' ? 'Create an account' : 'Sign in'}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;