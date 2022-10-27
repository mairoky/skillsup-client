import React from 'react';

const Blog = () => {
    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Q1. what is cors?</h3>
                        <p><span>Ans: </span>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
                    </div>
                    <div className="col-12">
                        <h3>Q2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p><span>Ans: </span>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.</p>
                        <p>Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. Some are:</p>
                        <ul>
                            <li>Cookie-Based authentication</li>
                            <li>Token-Based authentication</li>
                            <li>Third party access(OAuth, API-token)</li>
                            <li>OpenId</li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <h3>Q3. How does the private route work?</h3>
                        <p><span>Ans: </span>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                    </div>
                    <div className="col-12">
                        <h3>Q4. What is Node? How does Node work?</h3>
                        <p><span>Ans: </span>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;