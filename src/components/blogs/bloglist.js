import React from 'react';
import fetch from 'isomorphic-fetch'; 
import BlogListItem from './bloglistitem';
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
        fetch('http://localhost:1337/blogs').then((response)=>{
            if(response.status >=400){
                throw new Error("Bad Response from Server");
            }
            return response.json();
        }).then((blogs)=>{
            this.setState({blogs: blogs});
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