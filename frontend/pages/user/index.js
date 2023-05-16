import Layout from "../../components/Layout";
import { isAuth } from "../../actions/auth";
import Private from '../../components/auth/Private';
import Link from 'next/Link';
const UserIndex = ()=>{
    return (
    <Layout>
        <h2>User Dashboard</h2>
        <Private>

        </Private>
    </Layout>
    
    
    );
};

export default UserIndex;