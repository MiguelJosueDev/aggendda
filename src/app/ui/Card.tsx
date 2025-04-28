import type * as React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className = "", children }: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader = ({ className = "", children }: CardHeaderProps) => {
  return <div className={`p-6 pb-0 space-y-1.5 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle = ({ className = "", children }: CardTitleProps) => {
  return (
    <h3
      className={`font-semibold text-xl leading-none tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const CardDescription = ({
  className = "",
  children,
}: CardDescriptionProps) => {
  return <p className={`text-sm text-slate-500 ${className}`}>{children}</p>;
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent = ({ className = "", children }: CardContentProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const CardFooter = ({ className = "", children }: CardFooterProps) => {
  return (
    <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
