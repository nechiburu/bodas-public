import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Header2 from '../../components/header2'

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
        <Header2/>
        
        <div class="grid xl:grid-cols-2 grid-cols-1 gap-6"></div>
       <div class="z-[9]" id="app_header">
      <div class="app-header z-[999] ltr:ml-[248px] rtl:mr-[248px] bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700">
        <div class="flex justify-between items-center h-full">
          <div class="flex items-center vertical-box">
          </div>
       
       <h3>Ajustes</h3>


          <div class="card-text h-full">
       </div>
      </div>
    </div>
    </div>
    </Fragment>
    )
};
export default BlogSingle;