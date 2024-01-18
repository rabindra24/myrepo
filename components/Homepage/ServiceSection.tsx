// import React from "react";
// import { service } from "@/constant/contant";
// import Heading from "@/utils/Heading";

const ServiceSection = ({ notitle }: { notitle?: boolean }) => {
  return (
    <div className="bg-background">
      {/* <div className="container mx-auto">
        <div className="bg-background py-12 md:px-8">
          <div className=" xl:px-0 py-10">
            <div className="flex flex-col lg:flex-row flex-wrap">
              <div className="mt-4 lg:mt-0 lg:w-3/5">
                {notitle === true ? "" : <Heading title="Service" />}
              </div>
            </div>
          </div>
          <div className=" xl:px-0">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
              {service.map((item, idx) => (
                <div key={idx}>
                  <div className="bg-secondary hover:bg-primary transition-all duration-1000 p-5 rounded-md relative h-full w-full">
                    <span className="">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className=" text-primary bg-background p-2 mb-5 rounded-full w-12 h-12 flex items-center justify-center"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      {item.title}
                    </h1>
                    <div className="my-5">
                      {item.lists.map((list, idx) => (
                        <div
                          className="flex items-center pb-4 dark:border-gray-700  w-full space-x-3"
                          key={idx}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <h4 className="text-md">{list.listItem}</h4>
                        </div>
                      ))}
                    </div>
                    <a className="underline absolute bottom-5 text-sm  0 font-bold  flex items-center">
                      <p>Show All</p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#FFF"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <line x1="15" y1="16" x2="19" y2="12" />
                          <line x1="15" y1="8" x2="19" y2="12" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceSection;
