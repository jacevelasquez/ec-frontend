import React from "react";

function Introduction() {
  return (
    <div>
      <section id="section1" className="h-screen flex">
        <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Section 1</h1>
            <p className="text-lg">
              This is a simple introduction to Section 1. Here you can provide
              information about this section's content, goals, or any other
              relevant details that will help your visitors understand what they
              can expect.
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-gray-100 flex items-center justify-center">
          <img
            src="/xlarge.png"
            alt="Placeholder Image"
            className="object-cover w-3/4 h-3/4"
          />
        </div>
      </section>
    </div>
  );
}

export default Introduction;
