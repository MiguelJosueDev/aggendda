import * as React from "react";

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children?: React.ReactNode;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className = "", value, onValueChange, children, ...props }, ref) => {
    const handleValueChange = (newValue: string) => {
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childElement = child as React.ReactElement<RadioGroupItemProps>;
        return React.cloneElement(childElement, {
          checked: childElement.props.value === value,
          onClick: () => handleValueChange(childElement.props.value),
        });
      }
      return child;
    });

    return (
      <div ref={ref} className={`${className}`} role="radiogroup" {...props}>
        {childrenWithProps}
      </div>
    );
  },
);

interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
  className?: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className = "", value, id, ...props }, ref) => {
    return (
      <input
        type="radio"
        id={id}
        value={value}
        ref={ref}
        className={`h-4 w-4 rounded-full border border-slate-300 text-[#5C9DF1] focus:outline-none focus:ring-2 focus:ring-[#5C9DF1] focus:ring-offset-2 ${className}`}
        {...props}
      />
    );
  },
);

RadioGroup.displayName = "RadioGroup";
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
