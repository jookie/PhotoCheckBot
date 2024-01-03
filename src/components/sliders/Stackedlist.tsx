import { people } from "../sliders/constants/card";

export default function StackedList() {
  return (
    //   flex flex-wrap gap-x-16 divide-x divide-gray-100
    <div className="flex">
      {people.map((person) => (
        <div key={person.email} className="">
          <div>
            <a
              href={person.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-10 w-19 flex-none bg-red-"
                src={person.imageUrl}
                alt=""
              />
            </a>
          </div>

          <div className="">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {person.name}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {person.email}
            </p>
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen{" "}
                <time dateTime={person.lastSeenDateTime}>
                  {person.lastSeen}
                </time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
