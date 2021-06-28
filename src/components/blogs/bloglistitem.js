import React from 'react';

const BlogListItem = ({id,blogtitle,blogcontent,featureimage,categories})=>{
const category = categories.map((category)=>{
 return category.categoryname     
})
    return(
        <div className="col-12">
            <div className="card border-secondary mb-3">
                <div className="card-header">{category}</div>
                <div className="card-body">
                    <img src={`http://localhost:1337${featureimage.formats.thumbnail.url}`} />
                    <h4 className="card-title">{blogtitle}</h4>
                    <h5>{blogcontent}</h5>
                </div>
            </div>
        </div>
    )
}
export default BlogListItem;