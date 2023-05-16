import Head from 'next/head';
import Link from 'next/Link';
import Layout from '../../components/Layout';
import { getCategory } from '../../actions/category';
import {API,DOMAIN,APP_NAME,FB_APP_ID} from '../../config';
import moment from 'moment';
import renderHTML from 'react-render-html';
import SmallCard from '../../components/blog/SmallCard';
 

const Category = ({category})=>{
    return(
        <React.Fragment>
            <Layout>
                <main>
                    <div className='container-fluid text-center'>
                        <header>
                            <div className='col-md-12 pt-3'>
                                <h1 className='display-4 font-weight-bold'>{category.name}</h1>
                            </div>
                        </header>
                    </div>
                    
                </main>
            </Layout>
        </React.Fragment>
    )
}

Category.getIntialProps = ({ query })=>{
    return getCategory(query.slug).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            return {category: data.category}
        }
    })
}

export default Category;