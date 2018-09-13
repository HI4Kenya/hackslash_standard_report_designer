import React, { Component } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import Panel  from 'react-bootstrap/lib/Panel';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
//import 'react-bootstrap/dist/react-bootstrap';

class MyEditor extends Component{
    state = { editorState: EditorState.createEmpty() }
    onChange = (editorState) => this.setState({ editorState });
    render(){
        return(
            <div className="row">
            <div className="col-md-3">
  
            </div>
            <div className="col-md-9">     
              <div>
                <Panel bsStyle="primary">
                  <Panel.Heading></Panel.Heading>
                  <Panel.Body>
                    <Editor  
                      editorState={this.state.editorState}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-content"
                      toolbarClassName="toolbar-class"
                      onEditorStateChange={this.onChange}                
  
                    />
                  </Panel.Body>
                </Panel> 
              </div>
            </div>
          </div>
        );
    }
}
export default MyEditor;