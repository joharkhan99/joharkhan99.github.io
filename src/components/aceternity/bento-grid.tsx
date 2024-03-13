import { cn } from "../../utils/cn.ts";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ item, className }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Skeleton item={item} />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {item.title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          <p>{item.description}</p>
          <a
            href={item.link}
            className="mt-3 inline-block text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="group-hover/bento:underline">View More</span>
            <GoArrowUpRight className="inline-block ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Skeleton = ({ item }) => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover/bento:scale-110 transform duration-300 transition"
      />
    </div>
  );
};
