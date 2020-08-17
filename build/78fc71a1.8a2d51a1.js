(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=o,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||r;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(105)),i={title:"Creating Forms In React With Formik And Yup",id:"react-formik",author:"Anshul Goyal",author_url:"https://github.com/anshulrgoyal",author_image_url:"/img/anshul.jpg",tags:["formik","rect","yup"],image:"https://cdn-images-1.medium.com/max/8992/0*FtmrJ9x7DT7XVaKD"},c={permalink:"/blog/react-formik",source:"@site/blog/2019-01-25-react-formik.md",description:"Forms are a very important part of any application. Forms are used everywhere from login to search.",date:"2019-01-25T00:00:00.000Z",tags:[{label:"formik",permalink:"/blog/tags/formik"},{label:"rect",permalink:"/blog/tags/rect"},{label:"yup",permalink:"/blog/tags/yup"}],title:"Creating Forms In React With Formik And Yup",readingTime:5.215,truncated:!0,prevItem:{title:"Rust and Node.js: A match made in heaven",permalink:"/blog/nodejs-rust-match"},nextItem:{title:"Scraping with NodeJS and Cheerio",permalink:"/blog/scrapping-nodejs"}},l=[{value:"List Of Content",id:"list-of-content",children:[]},{value:"Introduction",id:"introduction",children:[{value:"What is Formik?",id:"what-is-formik",children:[]},{value:"What is Yup?",id:"what-is-yup",children:[]}]},{value:"Let Us Get To Code",id:"let-us-get-to-code",children:[{value:"Using Formik",id:"using-formik",children:[]},{value:"Form With Formik",id:"form-with-formik",children:[]},{value:"Different Methods To Render Forms",id:"different-methods-to-render-forms",children:[]},{value:"Adding Reset To Form",id:"adding-reset-to-form",children:[]},{value:"Adding Validation",id:"adding-validation",children:[]},{value:"Handling Form Submit",id:"handling-form-submit",children:[]},{value:"Let Us Go through The Flow",id:"let-us-go-through-the-flow",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]},{value:"If you are wondering how I have set my react project please do check my previous blog",id:"if-you-are-wondering-how-i-have-set-my-react-project-please-do-check-my-previous-blog",children:[]},{value:"Bonus",id:"bonus",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Forms are a very important part of any application. Forms are used everywhere from login to search."),Object(r.b)("h2",{id:"list-of-content"},"List Of Content"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Introduction to Formik")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Introduction to Yup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Creating a Simple Form Markup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Using Formik With Simple Form")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Adding Reset Button")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Adding Validation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Handling Submit")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Conclusion"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Useful tip:")," Use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://bit.dev?utm_medium=content&utm_source=bitsandpieces&utm_content=1&utm_campaign=rsrch_msg_jul"}),"*","*","Bit"),Object(r.b)("strong",{parentName:"p"}," to encapsulate components with all their dependencies and setup. Build truly modular applications with better code reuse, simpler maintenance and less overhead.\n["),"Share reusable code components as a team \xb7 Bit","*","*","\n",Object(r.b)("em",{parentName:"p"},"Easily share reusable components between projects and applications to build faster as a team. Collaborate to develop\u2026"),"bit.dev](",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://bit.dev?utm_medium=content&utm_source=bitsandpieces&utm_content=1&utm_campaign=rsrch_msg_jul"}),"https://bit.dev?utm_medium=content&utm_source=bitsandpieces&utm_content=1&utm_campaign=rsrch_msg_jul"),")"),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ReactJS")," is a library. It does not include a pre-baked solution to handle the form\u2019s state and actions. Forms in the ReactJS can be a pain with all those repetition and business logic at the same time. ",Object(r.b)("strong",{parentName:"p"},"Formik")," handles form state and ",Object(r.b)("strong",{parentName:"p"},"Yup")," handles validation so we can focus our business logic."),Object(r.b)("h3",{id:"what-is-formik"},"What is Formik?"),Object(r.b)("p",null,"Formik is a library which manages the state of the form. The state of the form means the error and value for every field and many more. Formik provides a mechanism to validate the field by passing a function."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2400/1*Jy7lJxq1JegkQpzYTecW0A.png",alt:"Formik"})),Object(r.b)("em",{parentName:"p"},"Formik")),Object(r.b)("h3",{id:"what-is-yup"},"What is Yup?"),Object(r.b)("p",null,"Yup is a validation library. It can be used to validate object , array , string and almost every JavaScript data structure. We would use it to validate our input."),Object(r.b)("h2",{id:"let-us-get-to-code"},"Let Us Get To Code"),Object(r.b)("p",null,"We would convert our simple form which does not do anything to an interactive well-built form with formik."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2000/1*qflnAnPU2UZgcSWOHJKo6A.png",alt:"Simple form"})),Object(r.b)("em",{parentName:"p"},"Simple form")),Object(r.b)("p",null,"To use Formik we just need to follow these steps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Wrap the form with Formik component from the formik package.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Replace input with fields as it provides more control over the state.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Added onChange and value event handler which is also provided by the Formikcomponent as a prop."))),Object(r.b)("p",null,"The state of form is handled by Formik so it would make sense the values of field and change events should be handled by the Formik."),Object(r.b)("h3",{id:"using-formik"},"Using Formik"),Object(r.b)("p",null,"We need to pass certain props to fromik for it to work."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The component to be rendered or the function to be invoked while rendering form or children it needs to display. Formik only manages state and validation. It does not manages rendering of the form elements.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onSubmit handler for the form.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"initalValue of the state of the form."))),Object(r.b)("h3",{id:"form-with-formik"},"Form With Formik"),Object(r.b)("p",null,"Now we would see what our form look like now."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2160/1*ABPDZLXqgi1Qs8gaknUomw.png",alt:"Form State handled by Formik"})),Object(r.b)("em",{parentName:"p"},"Form State handled by Formik")),Object(r.b)("p",null,"Let look at the props passed to the Formik. The initalValues specify the initial state of the form. onSubmit specify the function invoked with values of form and action that can be performed on the state of the form. The change is also handled by the formik by providing props.handleChange method and the updated value by providing props.values ."),Object(r.b)("p",null,"The Field is just a wrapper around the input tags and can be used to render any input component from select , checkbox to radio button. We can just do something like it. You can checkout",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://jaredpalmer.com/formik/docs/api/field"})," Formik Docs")," for more information."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'<Field component="select" name="color">\n  <option value="red">Red</option>\n  <option value="green">Green</option>\n  <option value="blue">Blue</option>\n</Field>\n')),Object(r.b)("h3",{id:"different-methods-to-render-forms"},"Different Methods To Render Forms"),Object(r.b)("p",null,"Formik support there different methods to render a form. render prop can be used, a function is provided as a prop which returns an react node. Form can be passed as a children, children should be a function which returns a react node. component prop is also available, the component which is to be rendered can be provided."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"<Formik\n...props\ncomponent={Form}\n/>\nor\n<Formik\n...props\nrender={()=><Form />}\nor\n<Formik ...props >\n ()=><Form />\n</Formik>\n")),Object(r.b)("h3",{id:"adding-reset-to-form"},"Adding Reset To Form"),Object(r.b)("p",null,"We have to just add a button which calls the handleReset method supplied by Formik. Now the magic of Formik will blow your mind."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'<button\n  disabled={!props.dirty}\n  onClick={props.handleReset}\n  type="button"\n  className={s.button}\n>\n  Reset\n</button>\n')),Object(r.b)("p",null,"We have a working reset button."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2000/1*qxlfT9R_BFRgnufc2FxmYw.gif",alt:"Reset Working"})),Object(r.b)("em",{parentName:"p"},"Reset Working")),Object(r.b)("h3",{id:"adding-validation"},"Adding Validation"),Object(r.b)("p",null,"We would be using Yup to valid our inputs first, we should construct a schema for validation of the object."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"import * as yup from 'yup'\n")),Object(r.b)("p",null,"Now we can use yup.object ,yup.string etc. Let us create one for our form."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'**const userSchema = yup.object().shape({\n  name: yup.string().required("Name is Required."),\n  email: yup\n    .string()\n    .email("Please Enter an valid Email")\n    .required("Email is Required."),\n  password: yup\n    .string()\n    .required("Password is Required.")\n    .max(13,"Too long")\n    .min(8,"Too short")\n})**\n')),Object(r.b)("p",null,"So expect our value to be an object and shape specify the keys which should be there and what should be the type of the key and what should be their length etc. ",Object(r.b)("strong",{parentName:"p"},"Yup")," can be used to create an awesome schema to validate anything. Here is the documentation for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jquense/yup/blob/master/README.md"}),"Yup"),"."),Object(r.b)("p",null,"We show an error if our field has been touched and has an error using props provided by formik."),Object(r.b)("h3",{id:"handling-form-submit"},"Handling Form Submit"),Object(r.b)("p",null,"Till now we were just logging the data. We can use this data in any way. We can make an API request or save data for the next step. We can use the form submit state to show loading or disable the submit button. Now let see how it is used."),Object(r.b)("p",null,"We change the state to submitting and show loader and we can use setTimeout to mimic the API behavior. The submitting State is provided as a prop same as the errors and other states like dirty or others."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2560/1*WOphSQn9px06prgws1gTwA.gif",alt:"Form in action"})),Object(r.b)("em",{parentName:"p"},"Form in action")),Object(r.b)("h3",{id:"let-us-go-through-the-flow"},"Let Us Go through The Flow"),Object(r.b)("p",null,"We use the submit button to submit the form and reset to reset it. We use the setUser to change the component state and use it in our details. We use Yup to validate our inputs."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"We saw Formik in action but it is just a tip of the iceberg and you can dive in Formik and configure it to control every aspect of your form and use it to configure validation pattern, flow etc.Formik is extremely configurable and very simple to use and setup. You can get a fully working form in very few line of code."),Object(r.b)("h2",{id:"if-you-are-wondering-how-i-have-set-my-react-project-please-do-check-my-previous-blog"},"If you are wondering how I have set my react project please do check my previous blog"),Object(r.b)("h2",{id:"bonus"},"Bonus"),Object(r.b)("p",null,"All the code of the Form for you:).\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/anshulgoyal15/Formik-Blog"}),Object(r.b)("strong",{parentName:"a"},"anshulgoyal15/Formik-Blog"))))}p.isMDXComponent=!0}}]);