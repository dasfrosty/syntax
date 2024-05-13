import { type ComponentProps, forwardRef } from "react";
import Icon from "../../syntax-core/src/Icon/Icon";

const Shuffle = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => (
  <Icon
    ref={ref}
    path="m24 4.8-4.8 4.8-1.8-1.8L19.2 6H2.4v6H0V3.6h19.2l-1.8-1.8L19.2 0 24 4.8ZM4.8 24l1.8-1.8-1.8-1.8H24V12h-2.4v6H4.8l1.8-1.8-1.8-1.8L0 19.2 4.8 24Z"
    color={color}
    size={size}
  />
));
Shuffle.displayName = "Shuffle";
export default Shuffle;