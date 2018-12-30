import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // return react component
    return (props) => (
        <div>
            { props.isAdmin && <p>This is a private message please do not shared with others.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    // return react component
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view the info.</p>}
        </div>
    );
};


// create custom Info component, contained admin message
const InfoWithAdminWarning = withAdminWarning(Info);
const InfoWithAuthenticationWarning = requireAuthentication(Info);


ReactDOM.render(
    <div>
        <InfoWithAdminWarning isAdmin={true} info="testing1"/>
        <InfoWithAuthenticationWarning isAuthenticated={false} info="testing2"/>
    </div>,
    document.getElementById('placedhere')
);