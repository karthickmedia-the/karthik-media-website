"use client";

import React from "react";
import { motion } from "framer-motion";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface DatabaseWithRestApiProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
    sixth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}
const DatabaseWithRestApi = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor
}: DatabaseWithRestApiProps) => {
  return <div className={cn("relative flex w-full flex-col items-center", className)}>
      {/* SVG Paths  */}
      <svg width="100%" height="100%" viewBox="0 0 260 100" className="h-full sm:w-full text-muted px-0 py-0 border-0">
        <g stroke="currentColor" fill="none" strokeWidth="0.4" strokeDasharray="100 100" pathLength="100">
          <path d="M 22 10 v 10 q 0 5 5 5 h 98 q 5 0 5 5 v 10" />
          <path d="M 62 10 v 10 q 0 5 5 5 h 58 q 5 0 5 5 v 10" />
          <path d="M 105 10 v 10 q 0 5 5 5 h 15 q 5 0 5 5 v 10" />
          <path d="M 155 10 v 10 q 0 5 -5 5 h -15 q -5 0 -5 5 v 10" />
          <path d="M 198 10 v 10 q 0 5 -5 5 h -58 q -5 0 -5 5 v 10" />
          <path d="M 238 10 v 10 q 0 5 -5 5 h -98 q -5 0 -5 5 v 10" />
          {/* Animation For Path Starting */}
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle className="database db-light-1" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-2)">
          <circle className="database db-light-2" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-3)">
          <circle className="database db-light-3" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-4)">
          <circle className="database db-light-4" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-5)">
          <circle className="database db-light-5" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        <g mask="url(#db-mask-6)">
          <circle className="database db-light-6" cx="0" cy="0" r="12" fill="url(#db-blue-grad)" />
        </g>
        {/* Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* First Button */}
          <g>
            <rect fill="#18181B" x="2" y="5" width="40" height="10" rx="5"></rect>
            <DatabaseIcon x="6" y="7.5"></DatabaseIcon>
            <text x="15" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.first || "GET"}
            </text>
          </g>
          {/* Second Button */}
          <g>
            <rect fill="#18181B" x="45" y="5" width="34" height="10" rx="5"></rect>
            <DatabaseIcon x="49" y="7.5"></DatabaseIcon>
            <text x="58" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.second || "POST"}
            </text>
          </g>
          {/* Third Button */}
          <g>
            <rect fill="#18181B" x="82" y="5" width="46" height="10" rx="5"></rect>
            <DatabaseIcon x="86" y="7.5"></DatabaseIcon>
            <text x="95" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.third || "PUT"}
            </text>
          </g>
          {/* Fourth Button */}
          <g>
            <rect fill="#18181B" x="131" y="5" width="48" height="10" rx="5"></rect>
            <DatabaseIcon x="135" y="7.5"></DatabaseIcon>
            <text x="144" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.fourth || "DELETE"}
            </text>
          </g>
          {/* Fifth Button */}
          <g>
            <rect fill="#18181B" x="182" y="5" width="32" height="10" rx="5"></rect>
            <DatabaseIcon x="186" y="7.5"></DatabaseIcon>
            <text x="195" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.fifth || "PATCH"}
            </text>
          </g>
          {/* Sixth Button */}
          <g>
            <rect fill="#18181B" x="217" y="5" width="42" height="10" rx="5"></rect>
            <DatabaseIcon x="221" y="7.5"></DatabaseIcon>
            <text x="230" y="12" fill="white" stroke="none" fontSize="4" fontWeight="500">
              {badgeTexts?.sixth || "OPTIONS"}
            </text>
          </g>
        </g>
        <defs>
          {/* 1 */}
          <mask id="db-mask-1">
            <path d="M 22 10 v 10 q 0 5 5 5 h 98 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          {/* 2 */}
          <mask id="db-mask-2">
            <path d="M 62 10 v 10 q 0 5 5 5 h 58 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          {/* 3 */}
          <mask id="db-mask-3">
            <path d="M 105 10 v 10 q 0 5 5 5 h 15 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          {/* 4 */}
          <mask id="db-mask-4">
            <path d="M 155 10 v 10 q 0 5 -5 5 h -15 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          {/* 5 */}
          <mask id="db-mask-5">
            <path d="M 198 10 v 10 q 0 5 -5 5 h -58 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          {/* 6 */}
          <mask id="db-mask-6">
            <path d="M 238 10 v 10 q 0 5 -5 5 h -98 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          {/* Blue Grad */}
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#C8F200"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 md:bottom-16 flex w-full flex-col items-center px-4">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[150px] md:h-[200px] w-[62%] rounded-xl bg-accent/30" />
        {/* box title */}
        <div className="absolute -top-4 md:-top-6 z-20 flex items-center justify-center rounded-xl border bg-[#101112] px-4 py-2 md:px-6 md:py-3">
          <SparklesIcon className="size-4 md:size-5 text-primary" />
          <span className="ml-2 text-xs md:text-sm lg:text-base font-medium">
            {title ? title : "Data exchange using a customized REST API"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-10 md:-bottom-14 z-30 grid h-[80px] w-[80px] md:h-[100px] md:w-[100px] place-items-center rounded-full border-t border-primary/30 bg-[#141516] font-bold text-sm md:text-base text-center px-2">
          {circleText ? circleText : "SVG"}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[200px] md:h-[280px] lg:h-[320px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background shadow-md">
          {/* Badges */}
          <div className="absolute bottom-10 md:bottom-16 left-8 md:left-16 z-10 h-8 md:h-10 rounded-full bg-[#101112] px-4 md:px-6 text-sm md:text-base border flex items-center gap-2">
            <HeartHandshakeIcon className="size-4 md:size-5 text-primary" />
            <span>{buttonTexts?.first || "LegionDev"}</span>
          </div>
          <div className="absolute bottom-10 md:bottom-16 right-8 md:right-16 z-10 hidden h-8 md:h-10 rounded-full bg-[#101112] px-4 md:px-6 text-sm md:text-base sm:flex border items-center gap-2">
            <Folder className="size-4 md:size-5 text-primary" />
            <span>{buttonTexts?.second || "v2_updates"}</span>
          </div>
          {/* Circles */}
          <motion.div className="absolute -bottom-16 md:-bottom-20 h-[120px] md:h-[160px] w-[120px] md:w-[160px] rounded-full border-t border-primary/20 bg-accent/5" animate={{
          scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
          <motion.div className="absolute -bottom-24 md:-bottom-32 h-[180px] md:h-[240px] w-[180px] md:w-[240px] rounded-full border-t border-primary/15 bg-accent/5" animate={{
          scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
          <motion.div className="absolute -bottom-[130px] md:-bottom-[180px] h-[250px] md:h-[340px] w-[250px] md:w-[340px] rounded-full border-t border-primary/10 bg-accent/5" animate={{
          scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
          <motion.div className="absolute -bottom-[160px] md:-bottom-[220px] h-[320px] md:h-[440px] w-[320px] md:w-[440px] rounded-full border-t border-primary/5 bg-accent/5" animate={{
          scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
        </div>
      </div>
    </div>;
};
export default DatabaseWithRestApi;
const DatabaseIcon = ({
  x = "0",
  y = "0"
}: {
  x: string;
  y: string;
}) => {
  return <svg x={x} y={y} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>;
};