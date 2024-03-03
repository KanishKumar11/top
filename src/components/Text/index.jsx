import React from "react";

const sizeClasses = {
  txtOxygenBold1969: "font-bold font-oxygen",
  txtOxygenBold16: "font-bold font-oxygen",
  txtOxygenBold16Black900e0: "font-bold font-oxygen",
  txtOxygenBold5295: "font-bold font-oxygen",
  txtOxygenRegular1378: "font-normal font-oxygen",
  txtOxygenRegular86: "font-normal font-oxygen",
  txtOxygenBold1562WhiteA700: "font-bold font-oxygen",
  txtOxygenBold7116: "font-bold font-oxygen",
  txtOxygenBold2344: "font-bold font-oxygen",
  txtOxygenBold1575: "font-bold font-oxygen",
  txtOxygenRegular14WhiteA700: "font-normal font-oxygen",
  txtOxygenBold1938: "font-bold font-oxygen",
  txtOxygenBold1562Black900e0: "font-bold font-oxygen",
  txtOxygenRegular16Gray800: "font-normal font-oxygen",
  txtOxygenBold1575Black900e0: "font-bold font-oxygen",
  txtOxygenRegular18: "font-normal font-oxygen",
  txtOxygenBold86: "font-bold font-oxygen",
  txtOxygenBold1969Teal700: "font-bold font-oxygen",
  txtOxygenRegular16: "font-normal font-oxygen",
  txtOxygenBold6275: "font-bold font-oxygen",
  txtOxygenRegular1389: "font-normal font-oxygen",
  txtOxygenRegular19: "font-normal font-oxygen",
  txtOxygenRegular16Deeporange900: "font-normal font-oxygen",
  txtOxygenRegular1588: "font-normal font-oxygen",
  txtOxygenBold80: "font-bold font-oxygen",
  txtOxygenBold7003: "font-bold font-oxygen",
  txtOxygenRegular20Black900e0: "font-normal font-oxygen",
  txtOxygenRegular14: "font-normal font-oxygen",
  txtOxygenBold1425: "font-bold font-oxygen",
  txtOxygenBold1588: "font-bold font-oxygen",
  txtOxygenBold1984: "font-bold font-oxygen",
  txtRobotoMedium14: "font-medium font-roboto",
  txtOxygenBold5988: "font-bold font-oxygen",
  txtOxygenRegular18WhiteA700: "font-normal font-oxygen",
  txtOxygenBold1826: "font-bold font-oxygen",
  txtOxygenRegular28: "font-normal font-oxygen",
  txtOxygenBold155Black900e0: "font-bold font-oxygen",
  txtOxygenLight72: "font-light font-oxygen",
  txtOxygenRegular20: "font-normal font-oxygen",
  txtOxygenRegular64: "font-normal font-oxygen",
  txtOxygenBold8348: "font-bold font-oxygen",
  txtOxygenRegular16WhiteA700: "font-normal font-oxygen",
  txtOxygenBold6325: "font-bold font-oxygen",
  txtOxygenRegular24: "font-normal font-oxygen",
  txtOxygenRegular1389WhiteA700: "font-normal font-oxygen",
  txtOxygenRegular22: "font-normal font-oxygen",
  txtOxygenRegular64WhiteA700: "font-normal font-oxygen",
  txtOxygenBold2288: "font-bold font-oxygen",
  txtOxygenBold2723: "font-bold font-oxygen",
  txtOxygenBold2325: "font-bold font-oxygen",
  txtOxygenRegular16WhiteA70096: "font-normal font-oxygen",
  txtOxygenBold64: "font-bold font-oxygen",
  txtOxygenBold20: "font-bold font-oxygen",
  txtOxygenBold155: "font-bold font-oxygen",
  txtOxygenBold24: "font-bold font-oxygen",
  txtOxygenBold5962: "font-bold font-oxygen",
  txtOxygenLight72Black900e0: "font-light font-oxygen",
  txtRobotoRegular16: "font-normal font-roboto",
  txtOxygenBold7102: "font-bold font-oxygen",
  txtOxygenBold6212: "font-bold font-oxygen",
  txtOxygenBold1562: "font-bold font-oxygen",
  txtOxygenBold24WhiteA700: "font-bold font-oxygen",
  txtOxygenRegular72: "font-normal font-oxygen",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
