import React from "react";

export default class Tags extends React.Component{
  render(){
      const tags= this.props.tags
      return (
          <div className="tags">
              {tags.map((tag)=>( <div  key={tag} className="tag">{tag}</div>))}
      </div>
      )
  }
}