import { Props } from 'next/script';
import React, { ComponentType, useEffect } from 'react'

function WithoutTokenRedirect<P extends Props>(
    WrappedComponent: ComponentType<P>
): ComponentType<P> {
    return function WithoutTokenRedirectWrapper(props: P) {
        
        useEffect(() => {
            const token = localStorage.getItem('token');            

            if (token!=='token') {
                window.location.href = "/";  
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
}

export default WithoutTokenRedirect;