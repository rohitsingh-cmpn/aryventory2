// import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { useRef } from "react";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "../../components/ui/avatar";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";
// import { Separator } from "../../components/ui/separator";

// import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { ChevronRightIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, faAngleDown, faBan, faCalendar, faChartLine, faCheck, faLineChart, faPenToSquare, faThumbsDown, faThumbsUp, faTimes, faTruck, faTruckFast, faUserTie, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import legends1 from './../assets/legends1.png'
import legends2 from './../assets/legends2.png'
import legends3 from './../assets/legends3.png'

const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// Data for stat cards
const statCards = [
  {
    title: "Total Orders Today",
    value: "80",
    icon: faCheck,
    color: '#29B659',
    bg: 'bg-[#B2FFCC]'
  },
  {
    title: "Out of Stock",
    value: "120",
    icon: faTimes,
    color: '#DE5858',
    bg: 'bg-[#FFB1B1]'

  },
  {
    title: "Low Quality Products",
    value: "20",
    icon: faThumbsDown,
    color: '#DE5858',
    bg: 'bg-[#FFB1B1]'

  },
  {
    title: "Total Orders in current Month",
    value: "10k",
    icon: faCalendar,
    color: '#3759FB',
    bg: 'bg-[#B5C2FF]'

  },
];

// Data for date labels
const dateLabels = [
  "19/06",
  "20/06",
  "21/06",
  "22/06",
  "23/06",
  "19/06",
  "20/06",
  "21/06",
  "22/06",
  "23/06",
];

// Data for bar chart
const barData = [
  {
    height: "h-[151px]",
    bg: "bg-[#49c4ff80]",
    value: "₹3,37,682",
    top: "top-16",
  },
  {
    height: "h-[76px]",
    bg: "bg-[#f4d1f780]",
    value: "₹3,37,682",
    top: "top-[139px]",
  },
  {
    height: "h-48",
    bg: "bg-[#f5c38f80]",
    value: "₹3,37,682",
    top: "top-[23px]",
  },
  {
    height: "h-[118px]",
    bg: "bg-[#22f4ef80]",
    value: "₹3,37,682",
    top: "top-[97px]",
  },
  {
    height: "h-[216px]",
    bg: "bg-[#7145fd80]",
    value: "₹3,37,682",
    top: "top-[-px]",
  },
];

// Data for legends


// Data for products
const products = [
  {
    brand: "Samsung",
    name: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
    image: "/rectangle-6306.svg",
  },
  {
    brand: "Samsung",
    name: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
    image: "/rectangle-6306.svg",
  },
];

// export const MacbookPro = () => {
//   return (
//     <div className="bg-[#f6f6f6] flex flex-row justify-center w-full">

//     </div>
//   );
// };



// UTILITY FUNCTION (replaces lib/utils)
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const legends =[
  {
    name :'John...',
    icon: legends1
  },
  {
    name :'Luca...',
    icon: legends2
  },
  {
    name :'John...',
    icon: legends3
  },
  {
    name :'Luca...',
    icon: legends2
  },
  {
    name :'John...',
    icon: legends1
  },
  {
    name :'John...',
    icon: legends3
  },
  {
    name :'John...',
    icon: legends1
  },
  {
    name :'Luca...',
    icon: legends2
  },
  {
    name :'John...',
    icon: legends3
  },
]
// --- UI COMPONENTS (previously converted) ---

// Separator
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// Avatar
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;


// Select
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;


// Card
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl bg-card text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";


// Button
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";


// --- MAIN PAGE COMPONENT ---

// // Data for stat cards
// const statCards = [
//     // ... data from your original component
// ];

// // ... (All other data arrays: dateLabels, barData, legends, products)
// const dateLabels = [ "19/06", "20/06", "21/06", "22/06", "23/06", "19/06", "20/06", "21/06", "22/06", "23/06", ];
// const barData = [ { height: "h-[151px]", bg: "bg-[#49c4ff80]", value: "₹3,37,682", top: "top-16", }, { height: "h-[76px]", bg: "bg-[#f4d1f780]", value: "₹3,37,682", top: "top-[139px]", }, { height: "h-48", bg: "bg-[#f5c38f80]", value: "₹3,37,682", top: "top-[23px]", }, { height: "h-[118px]", bg: "bg-[#22f4ef80]", value: "₹3,37,682", top: "top-[97px]", }, { height: "h-[216px]", bg: "bg-[#7145fd80]", value: "₹3,37,682", top: "top-[-px]", }, ];
// const legends = [ { name: "John...", image: "/ellipse-18.png" }, { name: "Luca...", image: "/ellipse-18-1.png" }, { name: "Brad...", image: "/ellipse-18-2.png" }, ];
// const products = [ { brand: "Samsung", name: "Motorola Edge 50 Pro 5G with 125W Charger...", price: "₹150", quantity: "200", image: "/rectangle-6306.svg", }, { brand: "Samsung", name: "Motorola Edge 50 Pro 5G with 125W Charger...", price: "₹150", quantity: "200", image: "/rectangle-6306.svg", }, ];


const MacbookPro = () => {
  // The entire MacbookPro component JSX goes here.
  // It's the same as the one provided above, so it's omitted here for brevity.
  // Just copy the JSX from the first part of this response and paste it here.
  return (
    <div className="bg-[#F6F6F6] p-4 w-full h-[calc(100vh-65px)] overflow-y-auto">


      <main className="grid grid-cols-4  w-full h-full gap-5">
        {/* Stat Cards Row */}
        <div className="grid grid-cols-4 w-full col-span-4 gap-4">
          {statCards.map((stat, index) => (
            <Card key={index} className="bg-[#FFFFFF] flex w-full py-1 px-4 col-span-2 lg:col-span-1 h-full overflow-hidden">
              <CardContent className="flex items-center my-2 ml-4">
                <FontAwesomeIcon icon={stat.icon} color={stat.color} className={`${stat.bg} p-3 text-xl rounded-xl`} />
                <div className="flex ml-auto flex-col w-full h-full justify-center pl-4 ">
                  <p className="font-['Montserrat',Helvetica] font-normal text-black text-xl">
                    {stat.title}
                  </p>
                  <p className="font-['Montserrat',Helvetica] font-semibold text-black text-4xl">
                    {stat.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="w-full h-full  flex col-span-4">
          <div className="  grid grid-cols-4 w-full h-full gap-5" >
            <div className="flex w-full h-full lg:col-span-3 col-span-4 min-h-[300px]">
              <Card className="bg-[#FFFFFF] flex flex-col w-full py-4 h-full ">
                <div className="flex justify-between px-2 mx-4 mb-3 py-1">
                  <div>
                    <div className="text-lg">
                      Sales Overview
                    </div>

                    <div className="text-[#757575] text-sm">
                      May 25, 2025 - Jun 25, 2025
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <button className="bg-accent p-2 rounded-xl" >
                        <FontAwesomeIcon className="px-1" icon={faPenToSquare} />
                      </button>
                    </div>
                    <div  >
                      <button className="bg-accent p-2 rounded-xl">
                        Daily
                        <FontAwesomeIcon className="px-2" icon={faAngleDown} />
                      </button>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            <div className="grid grid-cols-2 w-full h-full lg:col-span-1 col-span-4 gap-5" >
              <Card className="bg-[#FFFFFF] flex flex-col col-span-1 lg:col-span-2 relative">
                <FontAwesomeIcon className="absolute p-4 text-2xl rounded-2xl top-5 right-5 bg-[#B2FFCC] text-[#29B659]" icon={faLineChart} />
                <CardContent className="mt-auto p-5 ">

                  <div className="">
                    <p className="font-['Montserrat',Helvetica] font-normal text-black text-xl">
                      Top Selling Product
                    </p>
                    <p className="font-['Montserrat',Helvetica] font-semibold text-black text-4xl mt-[6px]">
                      80
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#FFFFFF] flex flex-col relative col-span-1 lg:col-span-2">
                <CardContent className="p-5 mt-auto">

                  <FontAwesomeIcon className="absolute p-4 top-5 text-2xl rounded-2xl right-5 bg-[#FFF2B2] text-[#FFD400]" icon={faUserTie} />
                  <div className="">
                    <p className="font-['Montserrat',Helvetica] font-normal text-black text-xl">
                      Current month's best Performer
                    </p>
                    <p className="font-['Montserrat',Helvetica] font-semibold text-black text-4xl">
                      80
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>

        {/* Sales Overview Chart */}

        {/* To be received Card */}


        <div className="flex col-span-4 w-full h-full">
          <div className="grid grid-cols-4  w-full h-full gap-5">

            {/* Left Column */}
            <div className="grid grid-cols-2 w-full h-full lg:col-span-1 col-span-4 gap-5 ">
              {/* In hand Card */}
              <Card className="bg-[#FFFFFF] flex flex-col col-span-1 lg:col-span-2 relative">
                
                <CardContent className="mt-auto p-5">
                  <FontAwesomeIcon className="absolute p-4 text-2xl rounded-2xl top-5 right-5 bg-[#B5E7FF] text-[#30A7DE]" icon={faWarehouse} />
                  <div className="">
                    <p className="font-['Montserrat',Helvetica] font-normal text-black text-xl">
                      In hand
                    </p>
                    <p className="font-['Montserrat',Helvetica] font-semibold text-black text-4xl mt-[6px]">
                      80
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* To be received Card */}
              <Card className="bg-[#FFFFFF] flex flex-col relative col-span-1 lg:col-span-2">
                <CardContent className="p-5 mt-auto">
                  <FontAwesomeIcon className="absolute p-4 text-2xl rounded-2xl top-5 right-5 bg-[#FFEAB3] text-[#EDB421]" icon={faTruckFast} />
                  <div className="">
                    <p className="font-['Montserrat',Helvetica] font-normal text-black text-xl">
                      To be received
                    </p>
                    <p className="font-['Montserrat',Helvetica] font-semibold text-black text-4xl mt-[10px]">
                      80
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Middle Column - Bar Chart */}
            <div className="bg-[#FFFFFF] flex w-full h-full lg:col-span-3 col-span-4 min-h-[300px] rounded-xl">
            <Card className="rounded-r-none flex flex-col w-full py-4 h-full ">
              <div className="flex justify-between px-2 mx-4 mb-3 py-1">
                  <div>
                    <div className="text-lg">
                      Staff Overview
                    </div>

                    <div className="text-[#757575] text-sm">
                      May 25, 2025 - Jun 25, 2025
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <button className="bg-accent p-2 rounded-xl" >
                        <FontAwesomeIcon className="px-1" icon={faPenToSquare} />
                      </button>
                    </div>
                    <div  >
                      <button className="bg-accent p-2 rounded-xl">
                        Daily
                        <FontAwesomeIcon className="px-2" icon={faAngleDown} />
                      </button>
                    </div>
                  </div>
                </div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data2}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                  <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            <div className="flex flex-col p-3">
              <div className=" p-2 text-xl">
                Legends
              </div>
              <div className="grid grid-cols-3">
                {legends.map((legend,index) => (
                  <div className="p-2">

                    <img src={legend.icon} alt="" />
                    <div>
                      {legend.name}
                    </div>
                  </div>
                  
                ))}


              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Best Performer Card */}


      </main>
    </div>
  );
};


// Default export to be used in App.js or main.jsx
export default function Component() {
  return <MacbookPro />;
}
