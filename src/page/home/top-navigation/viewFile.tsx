import { Button } from "../../../design-system";
import React from "react";
interface Props {}

interface State {}

class FileViewer extends React.Component<Props, State> {
    openFile() {
        window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank");
    }

    render() {
        return (
            <div>
                <Button size="lg" shape="circle" onClick={this.openFile}>
                    Download CV
                </Button>
            </div>
        );
    }
}

export default FileViewer;
