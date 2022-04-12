import React from 'react';
import axios from 'axios';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.onChange = this.onChange.bind(this);
    // this.search = this.search.bind(this);
    // this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

//   componentDidMount() {
//     axios
//       .get(`/sfHomes/homes`)
//       .then(homes => {
//         this.setState({
//           homes: homes.data
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   onChange(e) {
//     this.setState({
//       term: e.target.value,
//     });
//   }

//   encodeHTML(s) {
//     return s
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/"/g, '&quot;');
//   }

//   search() {

//     const cleanTerm = this.encodeHTML(this.state.term);

//     axios
//       .get(`/sfHomes/search/${cleanTerm}`)
//       .then(homes => {
//         this.setState({
//           homes: homes.data
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   rerenderParentCallback() {
//     this.componentDidMount();
//   }

  render() {
    return (
		<div>
			{/* <h1>SF Homes For Sale</h1>
			<input value={this.state.term} onChange={this.onChange} />
			<button onClick={this.search}> Search </button>
			<h2>Upload .csv here:</h2>
			{this.rerenderParentCallback && <DragAndDrop rerenderParentCallback={this.rerenderParentCallback} />}
			{this.state.homes.length > 0 && <HouseList houses={this.state.homes} />} */}
			<h1 className='text'>Hello World from my React boilerplate</h1>
		</div>
    );
  }
}

export default Parent;
