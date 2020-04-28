import React from 'react';
import {GithubOutlined, LinkedinOutlined} from '@ant-design/icons';


function PageFooter() {
    return (

        <div>   
            <p> Footer </p>

            <GithubOutlined className='mx-auto'  style={{ fontSize: '36px', color: 'black'}} onClick= { () => console.log("You clicked github icon")} />
            
            <LinkedinOutlined className='mx-auto' style={{ fontSize: '36px', color: 'black'}} onClick= { () => console.log("You clicked linkedIn icon")} />
        </div>

        

    );


    
}

export default PageFooter;