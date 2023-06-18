// This code defines a React functional component called 'Container' that serves as a wrapper for its children.
// It takes a single prop called 'children', which represents the content that will be rendered inside the component.
// The component renders a <div> element and places the 'children' prop within it, effectively wrapping the content.
// The 'Container' component can be used to provide a consistent layout or styling to its child components.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.

"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      // max-w-[2520px]: This sets the maximum width of the element to 2520px. This means that the element will never be wider than 2520px, even if the viewport is larger than that.
      // mx-auto: This centers the element horizontally within its container.
      // xl:px-20: This sets the padding-left and padding-right properties of the element to 20px on large screens (≥1280px).
      // md:px-10: This sets the padding-left and padding-right properties of the element to 10px on medium screens (≥960px).
      // sm:px-2: This sets the padding-left and padding-right properties of the element to 2px on small screens (≥600px).
      // px-4: This sets the padding-left and padding-right properties of the element to 4px on all screen sizes.
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
  );
};

export default Container;
