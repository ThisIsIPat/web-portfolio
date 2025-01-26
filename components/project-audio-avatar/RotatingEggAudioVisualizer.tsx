import React from "react";
import AudioVisualizer from "@/components/project-audio-avatar/AudioVisualizer";

interface EggAudioVisualizerProps {
    analyserNode: AnalyserNode;
    extractVolume?: (frequencyVolumes: number[]) => number;
    baseSpeed?: number;
    speedAmplifier?: number;
    color?: string;
    size?: string;
    style?: {
        gradientFillColor1?: string;
        gradientFillColor2?: string;
        strokeColor?: string;
        strokeWidth?: string;
    }
}

const calculateAverageVolume = (frequencyVolumes: number[]) => {
    return frequencyVolumes.length
        ? frequencyVolumes.reduce((acc, volume) => acc + volume, 0) / frequencyVolumes.length
        : 0;
};

const RotatingEggAudioVisualizer: React.FC<EggAudioVisualizerProps> = (
    {
        analyserNode,
        extractVolume = calculateAverageVolume,
        baseSpeed = 0,
        speedAmplifier = 4,
        size = "100%",
        style: {
            gradientFillColor1: gradientFillColor1 = "white",
            gradientFillColor2: gradientFillColor2 = "purple",
            strokeColor: strokeColor = "none",
            strokeWidth: strokeWidth = "0"
        } = {}
    }) => {
    return (
        <AudioVisualizer<SVGSVGElement>
            analyserNode={analyserNode}
            setupElementAnimation={(ref) => {
                let rotation = 0;

                return (deltaTime, frequencyVolumes) => {
                    if (!ref.current) return;

                    const extractedVolume = extractVolume(frequencyVolumes);
                    const rotationsPerSecond = baseSpeed + speedAmplifier / (1 + Math.exp(-extractedVolume / 12 + 6));
                    rotation -= (rotationsPerSecond * deltaTime) / 1000 * 360;
                    if (rotation >= 360) rotation -= 360;
                    if (rotation < 0) rotation += 360;
                    ref.current.style.transform = `rotate(${rotation}deg)`;
                };
            }}
            renderAnimatedElement={(ref) => (
                <svg
                    ref={ref}
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    style={{position: "absolute", transform: "translate(-50%, -50%)"}}
                >
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor={gradientFillColor1} offset="0%"></stop>
                            <stop id="stop2" stopColor={gradientFillColor2} offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient)"
                        d="M26,-25.9C33.3,-18.8,38.3,-9.4,38.5,0.2C38.7,9.8,34.1,19.6,26.9,26C19.6,32.3,9.8,35.2,0.3,34.9C-9.2,34.6,-18.4,31.1,-26,24.7C-33.6,18.4,-39.6,9.2,-40.8,-1.2C-42,-11.6,-38.3,-23.1,-30.7,-30.3C-23.1,-37.4,-11.6,-40,-1.1,-38.9C9.4,-37.9,18.8,-33,26,-25.9Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                        strokeWidth={strokeWidth}
                        style={{transition: "all 0.3s ease 0s"}}
                        stroke={strokeColor}
                    />
                </svg>
            )}
        />
    );
};

export default RotatingEggAudioVisualizer;