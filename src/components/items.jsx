import React from "react";

class Items extends React.component {
    render() {
        console.log(this.props);

        return  
        <div class="col-md-3">
        <div class="card" style="width: 18rem">
          <img src = {this.props.imgSrc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">
              {this.props.text}
            </p>
          </div>
        </div>
      </div>  ;
}
}
   
export default Items;