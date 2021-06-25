import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <a href="/">Home画面</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// if (document.getElementById('examplepage')) {
//     ReactDOM.render(<Example />, document.getElementById('examplepage'));
// }
export default Example;