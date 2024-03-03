import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[28px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs text-black-900_e0",
    gray_900: "bg-gray-900 shadow-bs text-white-A700",
    deep_purple_A200: "bg-deep_purple-A200 shadow-bs text-white-A700",
    white_A700_cc: "bg-white-A700_cc text-gray-900",
  },
  outline: { gray_900: "border-2 border-gray-900 border-solid text-gray-900" },
};
const sizes = { xs: "p-[9px]", sm: "p-[13px]", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "white_A700_cc",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_900",
    "deep_purple_A200",
    "white_A700_cc",
  ]),
};

export { Button };
