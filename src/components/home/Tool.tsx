import {
  ArrowTopRightOnSquareIcon,
  BookmarkIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import aiToolsData from "../../../public/data.json";
import { Link } from "react-router-dom";
console.log(aiToolsData);
const Tool = () => {
  return (
    <div className="px-4 md:px-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {aiToolsData.map((tool, index) => (
          <div key={index} className="border rounded-lg">
            <div className="h-[250px] w-full">
              <img
                className="w-full h-full rounded-t-lg"
                src={`https://picsum.photos/200/150?${Math.random()}`}
                alt=""
              />
            </div>
            <div className="p-3 space-y-3 flex flex-col">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{tool.title}</h3>
                  <button className="flex items-center text-sm space-x-1">
                    <EnvelopeIcon className="h-5 w-5" />
                    <span>12345</span>
                  </button>
                </div>
                <span>
                  <CheckBadgeIcon className="h-5 w-5" />
                </span>
              </div>

              <p>{tool.shortDescription}</p>
              <div className="flex gap-4 justify-center">
                {tool.toolTags.map((tag, index) => (
                  <button
                    className="hover:bg-slate-50 text-sm border px-2 py-1 rounded-md font-medium"
                    key={index}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 items-center">
                <a
                  className="underline-offset-4 hover:underline text-sm font-medium "
                  href=""
                >
                  #{tool.category}
                </a>
                <a
                  className="underline-offset-4 hover:underline text-sm  font-medium "
                  href=""
                >
                  #{tool.subcategories}
                </a>
              </div>

              <div className="flex gap-4 items-center mt-auto">
                <Link
                  className="w-full border py-1 inline-flex justify-center text-blue-500 hover:bg-slate-50 rounded-md "
                  to={`/${tool._id}`}
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </Link>
                <button className="w-full border py-1 inline-flex justify-center text-blue-500 hover:bg-slate-50 rounded-md ">
                  <a href="">
                    <BookmarkIcon className="w-5 h-5" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tool;
