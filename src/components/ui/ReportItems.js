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
import Collapsible from "react-collapsible";
import ListBox from "react-listbox";
import "react-listbox/dist/react-listbox.css";

//Select Resources
//import "react-select/dist/react-select.css";
import Select from "react-virtualized-select";
import createFilterOptions from "react-select-fast-filter-options";

import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

const listoptions = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 }
];

 const selected = [1, 2];
// onChange = selected => {
//   this.selected
// };

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
    this.state = { collapse: false };
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
    return (
      <Card>
        <CardHeader>Selected report attributes</CardHeader>
        <CardBody>
          <ListBox
            options={listoptions}
            selected={selected}

          />
          
          <Collapsible trigger="Country">
            <Select filterOptions={filterOptions} options={options} />
          </Collapsible>
          <Collapsible trigger="Indicators">
            <Select filterIndicators={filterIndicators} options={indicators} />
          </Collapsible>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}

export default ReportItems;
