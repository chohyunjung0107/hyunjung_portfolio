import { Parallax } from "react-parallax";

interface propsType {
    url?: string;
    title?: string;
}

function ParallaxComponent(props: propsType) {
    const { url, title } = props;

    return (
        <Parallax bgImage={url} strength={100} blur={{ min: -15, max: 10 }}>
            <div
                className="parallax-container"
                style={{
                    position: "relative",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                }}
            >
                <Parallax
                    strength={100}
                    className="parallax-title"
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        width: "100%",
                        textAlign: "center",
                        fontSize: "50px",
                    }}
                >
                    {title}
                </Parallax>
            </div>
        </Parallax>
    );
}

export default function projects() {
    return (
        <div style={{ height: "200vh" }}>
            <ParallaxComponent url="/1.jpg" title="space" />
            <ParallaxComponent url="/2.jpg" title="space2" />
            <ParallaxComponent url="/3.jpg" title="space3" />
        </div>
    );
}
