import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-bootstrap/dist/react-bootstrap";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
//import 'webpack';
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
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
//import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from "react-ckeditor-wrapper";

const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};
class App extends Component {
  constructor(props) {
    super(props);
    // this.updateContent = this.updateContent.bind(this);
    //     this.state = {
    //         content: 'content',
    //     }
    const contentState = convertFromRaw(content);
    this.state = {
      contentState
    };
  }

  onContentStateChange = contentState => {
    this.setState({
      contentState
    });
  };

  state = { editorState: EditorState.createEmpty() };
  onChange = editorState => this.setState({ editorState });
  render() {
    const { contentState } = this.state;
    return (
      
      <div className="container-fluid">
        {/* Application Top Bar */}
        <Header />

        {/* End of Application top bar */}
        <br />
        <div className="row">
          <div className="col-md-3">
            {/*  The application Sidebar*/}
            <Sidebar />

            {/* End Of Sidebar */}
          </div>
          <div className="col-md-9">
            <div>
              <Card bsStyle="primary">
                <CardBody>
                  <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="rdw-editor-wrapper"
                    editorClassName="rdw-editor-main"
                    toolbarClassName="rdw-editor-toolbar"
                    onEditorStateChange={this.onChange}
                    // wrapperClassName="demo-wrapper"
                    //editorClassName="demo-editor"
                    onContentStateChange={this.onContentStateChange}
                  />
                </CardBody>
                <textarea
                  className="form-control"
                  disabled
                  value={JSON.stringify(contentState, null, 4)}
                />
                <CardFooter>Standard Report Customizer</CardFooter>
              </Card>
              {/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it's needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
