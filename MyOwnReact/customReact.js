//creating custom react


function renderHTML(cont,ele){
    const myElement = document.createElement(ele.type);
    myElement.innerHTML = ele.Children;
    for(const prop in ele.props){
        if(prop === 'children') continue;
        myElement.setAttribute(prop,ele.props[prop]);
    }
    cont.appendChild(myElement);
}

// const { Children } = require("react");

const element = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank'
    },
    Children: 'click to go to youtube'
}

const container = document.querySelector('#MyPage')

renderHTML(container,element)