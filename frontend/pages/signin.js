import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
import Link from 'next/Link';
const Signin = ()=>{
    return(
        <Layout>
            <h2 className="text-center pt-4 pb-4">Signin Page</h2>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <SigninComponent />
                </div>
            </div>
        </Layout>
    );
};

export default Signin;