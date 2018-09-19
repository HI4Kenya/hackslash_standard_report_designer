import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  CardTitle,
  CardText
} from "reactstrap";

//for collapsible functionality
import Collapsible from "react-collapsible";
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

// import ListBox from "react-listbox";
// import "react-listbox/dist/react-listbox.css";
//import {Select as Selector} from 'react-select';

//Select Resources

import "react-select/dist/react-select.css";
import Select from "react-virtualized-select";
import createFilterOptions from "react-select-fast-filter-options";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

// const listoptions = [
//   { label: "One", value: 1 },
//   { label: "Two", value: 2 },
//   { label: "Three", value: 3 }
// ];

//  const selected = [1, 2];
// onChange = selected => {
//   this.selected
// };

// const options1 = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ];

const options = [
  // ...
  { value: "Kenya", label: "Kenya" },
  { value: "Uganda ", label: "Uganda" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "S-Sudan", label: "S-Sudan" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Burundi", label: "Burundi" }
  // ...
];
const indicators = [
  { value: "Stanford University", label: "UON" },
  { value: "Stanford University", label: "MMUST" }
];
const filterOptions = createFilterOptions({ options });
const filterIndicators = createFilterOptions({ indicators });

class ReportItems extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      isLoading:false,  // to Initialize the loading to false 
      datasets:[],   //The array of the data we want to fetch
      collapse: false   //Initial state of the Collapse Feature
    };
    
  }

  //Mounting The fetched data
  componentDidMount(){
    this.fetchData();
  }

  //Function to fetch data using the Fetch Api
  fetchData(){
    this.setState({
      datasets:[]
    })

    const headers={
     headers:{ 
       'Authorization':`Basic ${btoa('kenya:Last#2002')}`
    }
  }

  //call the fetch url
  fetch('http://197.136.81.99:8080/training/api/dataSets',headers)
  .then(response=>response.json())
  .then(pasrsedJSON=>pasrsedJSON.dataSets.map(datasetElements=>(
    {
     datasetID: `${datasetElements.id}`,
     datasetName: `${datasetElements.displayName}`
    }
  )))
  .then(datasets=>this.setState({datasets,isLoading:false}))
  .catch(error=>console.log('Parsing error',error)) 
  
  }
//End of Fetching data


  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  //   onContentStateChange: Function = (contentState) => {
  //     this.setState({
  //       contentState,
  //     });
  //   };

  onChange = editorState => this.setState({ editorState });
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    const { contentState } = this.state;
    const { selectedOption } = this.state;
//data for rendering
const {isLoading,datasets}=this.state;

    return (
      <Card>
        <CardHeader>Selected report attributes</CardHeader>
        <CardBody>
          {/* <ListBox
            options={listoptions}
            selected={selected}

          /> */}
          <div>
        {
          !isLoading && datasets.length>0? datasets.map(datasets=>{
            const {datasetId,datasetName}=datasets;
            const options1 = [              
              { value: datasetId, label: datasetName}
            ]
            return(
          // <select >
          //   <option value={datasetId}>{datasetName}</option>
          // </select>
          
           <Select
           value={selectedOption}
           onChange={this.handleChange}
           options={options1}
         />     
            )
          }):null
     }
     </div>
     {/* <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options1}
            /> */}
       {/* <Select filterOptions={filterOptions} options={options} /> */}
          <Collapsible trigger="Country">
            <Select filterOptions={filterOptions} options={options} />
          </Collapsible>
          <DualListBox
    options={[
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
    ]}
    selected={['one']}
    onChange={(selected) => {
        console.log(selected);
    }}
/>
          <Collapsible trigger="Indicators">
        
          </Collapsible>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}

export default ReportItems;
