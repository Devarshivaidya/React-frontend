import React from 'react';
import fetch from 'isomorphic-fetch'; 
import BlogListItem from './bloglistitem';
import axios from 'axios';
class BlogList extends React.Component
{
        constructor(){
          super()
          this.state={
            blogs:[] 
          }
        } 
    componentWillMount()
    {
        axios.get('https://strapireactbackend.herokuapp.com/blogs').then((response)=>{

        this.setState({blogs: response.data});
            
        });
    }
    render(){
        return(
        <div>
             {
                    this.state.blogs.map(({id,blogtitle,blogcontent,featureimage,categories})=>(
                        <div className="Container">
                            <div className="row">
                                <BlogListItem key={id} blogtitle= {blogtitle} blogcontent={blogcontent} featureimage={featureimage} categories={categories} />
                            </div>
                        </div>

                    ))
                }
            </div>
        );
    }
}

export default BlogList;