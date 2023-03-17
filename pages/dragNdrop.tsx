import { useState } from "react";

function App() {
    const [isDragging, setIsDragging] = useState(false);
    const [leftDivContent, setLeftDivContent] = useState<string[]>([
        "Item 1",
        "Item 2",
        "Item 3",
    ]);
    const [rightDivContent, setRightDivContent] = useState<string[]>([]);

    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        index: number
    ) => {
        setIsDragging(true);
        event.dataTransfer.setData("text/plain", leftDivContent[index]);
    };
    const handleDragStartR = (
        event: React.DragEvent<HTMLDivElement>,
        index: number
    ) => {
        setIsDragging(true);
        event.dataTransfer.setData("text/plain", rightDivContent[index]);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        // 드래그 중인 요소가 이벤트 대상에서 벗어날 때 실행됩니다.
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const droppedText = event.dataTransfer.getData("text/plain");
        const newLeftDivContent = leftDivContent.filter(
            (item) => item !== droppedText
        );
        const newRightDivContent = [...rightDivContent, droppedText];

        setLeftDivContent(newLeftDivContent);
        setRightDivContent(newRightDivContent);
    };
    const handleDropR = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const droppedText = event.dataTransfer.getData("text/plain");
        const newRightDivContent = rightDivContent.filter(
            (item) => item !== droppedText
        );
        const newLeftDivContent = [...leftDivContent, droppedText];

        setLeftDivContent(newLeftDivContent);
        setRightDivContent(newRightDivContent);
    };

    return (
        <div>
            <div className="App" style={{ width: "100%", display: "flex" }}>
                <div
                    className="left-div"
                    style={{
                        width: "50%",
                        height: "300px",
                        background: "#ccc",
                    }}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDropR}
                >
                    {leftDivContent.map((item, index) => (
                        <div
                            key={index}
                            className="left-div-item"
                            draggable={true}
                            onDragStart={(event) =>
                                handleDragStart(event, index)
                            }
                            onDragEnd={() => setIsDragging(false)}
                            style={{
                                opacity: isDragging ? 0.5 : 1,
                                cursor: "pointer",
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div
                    style={{ width: "50%", background: "#999" }}
                    className="right-div"
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {rightDivContent.map((item, index) => (
                        <div
                            key={index}
                            className="right-div-item"
                            draggable={true}
                            onDragStart={(event) =>
                                handleDragStartR(event, index)
                            }
                            onDragEnd={() => setIsDragging(false)}
                            style={{
                                opacity: isDragging ? 0.5 : 1,
                                cursor: "pointer",
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: "30px" }}>
                -LEFT :: {leftDivContent}
                <br />
                -RIGHT ::{rightDivContent}
            </div>
        </div>
    );
}

export default App;
