import React from "react";

const Blog = () => {
  return (
    <div className="my-28">
      <div className="flex justify-center py-10">
        <div className="max-w-2xl w-full">
          <div className="grid grid-cols-2 gap-8">
            <div className="border border-red-500 p-8 bg-white rounded-lg shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-red-500">Question 1:</h3>
                <p className="text-gray-600 text-1xl font-bold">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </p>
                <p className="text-gray-600">
                  <span className="text-xl font-bold text-red-500">Ans: </span>
                  Access tokens are short-lived credentials used to authenticate
                  and authorize access to specific resources. They are sent with
                  each request to prove the client's identity and permissions.
                  Refresh tokens are long-lived tokens used to obtain new access
                  tokens when they expire. They are typically stored securely
                  and not sent with each request. Common client-side storage
                  options include HTTP-only secure cookies, web storage
                  (localStorage/sessionStorage), or in-memory variables, with
                  security measures such as encryption and protection against
                  cross-site scripting (XSS) attacks.
                </p>
              </div>
            </div>
            <div className="border border-red-500 p-8 bg-white rounded-lg shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-red-500">Question 2:</h3>
                <p className="text-gray-600 text-1xl font-bold">
                  Compare SQL and NoSQL databases?
                </p>
                <p className="text-gray-600">
                  <span className="text-xl font-bold text-red-500">Ans: </span>
                  SQL databases use a predefined schema, support structured
                  data, and have powerful querying capabilities. They are
                  vertically scalable and suitable for applications with complex
                  relationships. NoSQL databases have a flexible schema, handle
                  unstructured data, and are horizontally scalable. They often
                  sacrifice strict transactions for improved performance. NoSQL
                  databases are used for handling large volumes of rapidly
                  changing data in scenarios like real-time analytics and IoT
                  applications. The choice between SQL and NoSQL depends on the
                  specific requirements of the application.
                </p>
              </div>
            </div>
            <div className="border border-red-500 p-8 bg-white rounded-lg shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-red-500">Question 3:</h3>
                <p className="text-gray-600 text-1xl font-bold">
                  What is express js? What is Nest JS?
                </p>
                <p className="text-gray-600">
                  <span className="text-xl font-bold text-red-500">Ans: </span>
                  Express.js is a minimalistic web framework for Node.js that
                  simplifies the development of web applications and APIs. It
                  provides routing, middleware, and request/response handling
                  features, allowing developers to quickly build server-side
                  applications. Nest.js, on the other hand, is a powerful and
                  scalable Node.js framework that follows the architectural
                  principles of Angular. It emphasizes modularity, dependency
                  injection, and decorators to create efficient and maintainable
                  server-side applications. Nest.js provides built-in features
                  like validation, authentication, and database integration,
                  making it a comprehensive choice for building robust
                  applications.
                </p>
              </div>
            </div>
            <div className="border border-red-500 p-8 bg-white rounded-lg shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-red-500">Question 4:</h3>
                <p className="text-gray-600 text-1xl font-bold">
                  What is MongoDB aggregate and how does it work?
                </p>
                <p className="text-gray-600">
                  <span className="text-xl font-bold text-red-500">Ans: </span>
                  MongoDB's aggregate function allows for advanced data analysis
                  and manipulation by processing data through a sequence of
                  stages. Each stage performs specific operations on the data,
                  such as filtering, grouping, sorting, and projecting.
                  Documents flow through the stages sequentially, with each
                  stage building upon the output of the previous stage. The
                  aggregate function returns the final result of the data
                  pipeline, providing transformed data or aggregated values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
