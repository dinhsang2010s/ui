import { theme } from "antd";
import { CSSProperties, useEffect, useState } from "react";

interface IProps {
  url?: string;
  style?: CSSProperties | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
}

export default function ImageSVG(props: IProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const {
    token: { colorPrimary },
  } = theme.useToken();

  useEffect(() => {
    const fetchSVG = async () => {
      if (props.url) {
        const response = await fetch(props.url ?? "");
        const svgText = await response.text();
        setSvgContent(svgText);
      }
    };
    fetchSVG();
  }, []);

  return (
    <>
      {svgContent && (
        <>
          <div
            className="svg-container"
            style={{ ...props.style }}
            dangerouslySetInnerHTML={{ __html: svgContent ?? <></> }}
          />
          <style>{`
            .svg-container {
              width: ${props.width ?? "24px"};
              height: ${props.height ?? "24px"};
              fill: ${"#637381"};
            }

            .ant-menu-item-selected .svg-container {
              fill: ${colorPrimary} !important;
            }
          `}</style>
        </>
      )}
    </>
  );
}
