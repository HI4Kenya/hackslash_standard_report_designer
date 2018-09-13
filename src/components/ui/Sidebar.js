import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, Collapse, CardTitle, CardText } from 'reactstrap';
import Collapsible from 'react-collapsible';
//import {Accordion, AccordionItem} from 'react-sanfona';

class Sidebar extends React.Component {
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
    
      onChange = (editorState) => this.setState({ editorState });
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    render() {
        const { contentState } = this.state;
        return (
            <Card>
            <CardHeader>Selected report attributes</CardHeader>
            <CardBody>
              {/* <CardText>Selected Data elements</CardText> */}
              {/* <Button  color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Go somewhere</Button>
              <Collapse isOpen={this.state.collapse}>
              <CardBody>
                nkjsfsnfjsfnkf
              </CardBody>
              </Collapse> */}
              <Collapsible trigger="Data Elements">
        <li>This is the collapsible content. It can be any element or React component you like.</li>
        <li>It can even be another Collapsible component. Check out the next section!</li>
      </Collapsible>
      <Collapsible trigger="Indicators">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Programs">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>

      {/* Start of side Menu */}
      {/* <Accordion>
        
            <AccordionItem title="Data Elements">
              <div>
               tjcnsjcnsj
              </div>
            </AccordionItem>
       
      </Accordion> */}
      {/*End of Side Menu  */}
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>

        );
    }
}

export default Sidebar;