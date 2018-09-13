import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class EditorConvertToJSON extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }

  
  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const { contentState } = this.state;
    return (
      <div>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={this.onContentStateChange}
        />
        <textarea
          disabled
          value={JSON.stringify(contentState, null, 4)}
        />
      </div>
    );
  }
}

export default EditorConvertToJSON;